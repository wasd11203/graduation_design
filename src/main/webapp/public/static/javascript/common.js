$('#header').load('data/header.php',function () {

    //todo 判断是否已经登录
    var storage=window.sessionStorage;
    var username =storage.username;
    if(username){
        loginsucc(username);
    }
    // todo 登录后的样式
    function loginsucc(x) {
        var html;
        html=`<div id="user-nav">
    <a href="">欢迎回来wp${x}<span class="caret"></span></a>
    <ul class="myul">
        <li><a href="index.html">我的娱票儿</a></li>
        <li><a href="mycar.html">我的订单</a></li>
        <li><a href="">我的关注</a></li>
        <li><a href="">个人设置</a></li>
        <li class="exit"><a href="#">退出</a></li>
    </ul>
    </div>        
        `;
        $('.user').html(html);
    }
    //todo 用户登录和注册摸态框变化
    $('#login').click(function () {
        tologin();
    });
    $('#register').on('click',function () {
        toregister();
    });
    $('#mainlogin').on('click','a',function (e) {
        e.preventDefault();
        console.log($(this).html());
        switch($(this).html()){
            case '已有账号，去登录':
                tologin();break;
            case  '忘记账号':
                toregister();break;
        }
    });
    $('#mainlogin .close').on('mouseover',function () {
        $(this).attr('src','img/close.png');
    }).on('mouseout',function () {
        $(this).attr('src','img/close-normal.png');
    });
    function tologin() {
        $('.alert_warning').hide();
        $('.succ').hide();
        $('#mainlogin button').html('登录');
        $('#mainlogin h1').html('娱票儿账户登录');
        $('#mainlogin input').eq(2).remove();
        $('#mainlogin p').css('margin-top','120px').html("<b><a href='#'>忘记账号</a></b><span>|</span> <b><a href='#'>忘记密码</a></b>")
    }
    function toregister() {
        $('.alert_warning').hide();
        $('.succ').hide();
        $('#mainlogin h1').html('注册娱票儿账号');
        $('#mainlogin input').eq(2).remove();
        $('#mainlogin button').html('注册').before("<input class='form-control' type='text' placeholder='手机验证码'>");
        $('#mainlogin p').css('margin-top','55px').html("<b><a href='#'>已有账号，去登录</a></b>")
    }
//todo 登录和注册
    var uName;
    var uPwd;
    $('#mainlogin input').on('focus',function () {
        $('.alert_warning').hide();
    });
    $('#submit').on('click',function () {
        if($(this).html()=="登录") {
            uName = $('#uname').val();
            uPwd = $('#upwd').val();
            if (uName != '' && uPwd != '') {
                $.get('data/login.php', {'uname': uName, 'passward': uPwd}, function (response) {
                    // console.log(response);
                    if (response == 'succ') {
                        console.log('登录成功');

                        storage.setItem('username',uName);
                        loginsucc(uName);
                        $('#loginR').modal('hide');
                    } else {
                        console.log('用户名或密码错误');
                        $('.submit').show();
                    }
                })
            }
        }else{
            uName = $('#uname').val();
            uPwd = $('#upwd').val();
            if(uName!==''&&uPwd!==''){
                $.get('data/register.php',{'uname':uName,'passward':uPwd},function (response) {
                    if(response=='succ'){
                        console.log('注册成功');
                        $(".lsucc").show();
                    }else{
                        $('.phone').show();
                    }
                })
            }
        }
    });
    $('#uname').on('blur',function () {
        uName = $('#uname').val();
        uPwd = $('#upwd').val();
        if($('#submit').html()=='注册'&&uName!==''){
            $.get('data/register.php',{'uname':uName,'passward':uPwd},function (response) {
                if(response=='repeat'){
                    console.log('账号重复');
                    $('.phone').show();
                }else{
                    $('.usucc').show();
                }
            })
        }
    })


    // todo 页面主导航
//todo 分类控制
    $(".dropnav>ul>li").on('mouseover',function () {
        var  i =$(this).index();
        $(".sort-right>div").eq(i).show().siblings().hide();
    });
    $('.hotbar>.row>li').on('click',function (e) {
        e.preventDefault();
        var i=$(this).index();
        $('.news>ul').eq(i).show().siblings().hide();
    });

    //todo 登陆后下拉小块
    $("body").on('mouseover','#user-nav',function () {
        $(".myul").show();
    }).on('mouseout',function () {
        $('.myul').hide();
    }).on('click','.exit a',function (e) {
        e.preventDefault();
        var storage=window.sessionStorage;
        storage.clear();
        window.location.href='index.html';
    });
    //todo 隐藏的地域信息异步生成
    $.getJSON('data/search.php',{"kw":"city"},function (response) {
        for(var i=0,str="",arr=[];i<response.length;i++){
            str=response[i].pname;
            str = str.match(/\[[\u4e00-\u9fa5]+]/);
            arr.push(str[0].slice(1,-1));
        }
        for(var j=0,hash=[];j<arr.length;j++){
            if(hash[arr[j]]==undefined){
                hash[arr[j]]=1;
            }else{
                hash[arr[j]]++;
            }
        }
        var html='';
        for(var key in hash){
            html+=`
              <li><a href="search.html?kw=[${key}]">${key}(${hash[key]})</a></li>
           `
        }
        $("#place ul").html(html);
    });
    


});
$('#footer').load('data/footer.php');

// todo 点击全国弹出和隐藏下拉框
var isshow=false;
$('body').on('click','.gloal>a',function (e) {
    e.preventDefault();
    if(!isshow){
        $('.location').show();
        isshow=true;
    }else{
        $('.location').hide();
        isshow=false;
    }
})

// todo 搜索按钮添加跳转
$('body').on('click','.searchBtn',function (e) {
    e.preventDefault();
    var kw =$(".inputbox").val();
    window.location.href='search.html?kw='+kw;
})

//todo 如果在主导航分类search页面则只需异步请求
$('body').on('click','#mainnav>li>a:gt(0)',function (e) {
    // console.log(location.search);
    var url = location.pathname;
    if(url=="/myroject/search.html"){
        e.preventDefault();
        var kw = $(this).attr('href').slice(-1);
        $.getJSON("data/search.php",{'kw':kw},function (response) {
            var html='';
            $.each(response,function (i,data) {
                html+=`
               <div class="items">
                <a href="detail.html?id=${data.pid}"><img src="${data.pimg}" alt=""></a>
                <div class="message">
                    <a href="detail.html?id=${data.pid}"><h3>${data.pname}</h3></a>
                    <p>影视歌全面发展的大型中国男团</p>
                    <p>【浅水湾艺术中心】</p>
                </div>
                <div class="items_r">
                    <span>预售</span>
                    <p><strong>${data.pprice}</strong>元起</p>
                    <a href="detail.html?id=${data.pid}">立即购买</a>
                </div>
            </div>
            `
            })
            $('.col-md-9').html(html);
        })

    }

})


