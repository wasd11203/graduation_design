




// $('#footer').load('data/footer.php');
// $('#header').load('data/header.php',function () {
//     //todo 用户登录和注册
//     $('#login').on('click',function () {
//         tologin();
//     });
//
//     $('#register').on('click',function () {
//         toregister();
//     });
//     $('#mainlogin').on('click','a',function (e) {
//         e.preventDefault();
//         console.log($(this).html());
//         switch($(this).html()){
//             case '已有账号，去登录':
//                 tologin();break;
//             case  '忘记账号':
//                 toregister();break;
//         }
//     });
//     $('#mainlogin .close').on('mouseover',function () {
//         $(this).attr('src','img/close.png');
//     });
//     $('#mainlogin .close').on('mouseout',function () {
//         $(this).attr('src','img/close-normal.png');
//     });
//     function tologin() {
//         $('.alert_warning').hide();
//         $('.succ').hide();
//         $('#mainlogin button').html('登录');
//         $('#mainlogin h1').html('娱票儿账户登录');
//         $('#mainlogin input').eq(2).remove();
//         $('#mainlogin p').css('margin-top','120px').html("<b><a href='#'>忘记账号</a></b><span>|</span> <b><a href='#'>忘记密码</a></b>")
//     }
//     function toregister() {
//         $('.alert_warning').hide();
//         $('.succ').hide();
//         $('#mainlogin h1').html('注册娱票儿账号');
//         $('#mainlogin button').html('注册').before("<input class='form-control' type='text' placeholder='手机验证码'>");
//         $('#mainlogin p').css('margin-top','55px').html("<b><a href='#'>已有账号，去登录</a></b>")
//
//     }
// //todo 登录和注册
//     var uName;
//     var uPwd;
//     var storage = window.sessionStorage;
//     $('#mainlogin input').on('focus',function () {
//         $('.alert_warning').hide();
//     });
//     $('#submit').on('click',function () {
//         if($(this).html()=="登录") {
//             uName = $('#uname').val();
//             uPwd = $('#upwd').val();
//             if (uName != '' && uPwd != '') {
//                 $.get('data/login.php', {'uname': uName, 'passward': uPwd}, function (response) {
//                     // console.log(response);
//                     if (response == 'succ') {
//                         console.log('登录成功');
//                         $('.user').html('欢迎回来:W'+uName);
//                         storage.setItem('username',uName);
//                         $('#loginR').modal('hide');
//                     } else {
//                         console.log('用户名或密码错误');
//                         $('.submit').show();
//                     }
//                 })
//             }
//         }else{
//             uName = $('#uname').val();
//             uPwd = $('#upwd').val();
//             if(uName!==''&&uPwd!==''){
//                 $.get('data/register.php',{'uname':uName,'passward':uPwd},function (response) {
//                     if(response=='succ'){
//                         console.log('注册成功');
//                         $(".lsucc").show();
//                     }else{
//                         $('.phone').show();
//                     }
//                 })
//             }
//         }
//     });
//     $('#uname').on('blur',function () {
//         uName = $('#uname').val();
//         uPwd = $('#upwd').val();
//         if($('#submit').html()=='注册'&&uName!==''){
//             $.get('data/register.php',{'uname':uName,'passward':uPwd},function (response) {
//                 if(response=='repeat'){
//                     // console.log('账号重复');
//                     $('.phone').show();
//                 }else{
//                     $('.usucc').show();
//                 }
//             })
//         }
//     })
//     // todo 页面主导航
//     //todo 分类控制
//     $(".dropnav>ul>li").on('mouseover',function () {
//         var  i =$(this).index();
//         $(".sort-right>div").eq(i).show().siblings().hide();
//     });
//     $('.hotbar>.row>li').on('click',function (e) {
//         e.preventDefault();
//         var i=$(this).index();
//         $('.news>ul').eq(i).show().siblings().hide();
//     });
//
//
// });

//todo 异步加载
var index;
window.onload=function () {
    sort();
    sort(1);
    loadadv();
}
$('.venuebar li').on('click',function (e) {
    e.preventDefault();
    var index = $(this).index()+1;
    if(index<6){
        $(this).addClass('active').siblings().removeClass('active');
        sort(index);
    }
});
function sort(x){
    if(x){
        $.getJSON('data/index_sort.php',{index:x},function (response) {
            $('#cate-item-list-container').html('');
            var html=''
            $.each(response,function (i,data) {
                // console.log(data);
                html+=`<div class="col-md-3 col-sm-3 col-xs-12">
                        <dl>
                            <a href="detail.html?id=${data.pid}">
                                <img  class="img-responsive" src="${data.pimg}">
                                <div class="buy-btn">立即购买</div>

                                <dt>${data.pname}</dt>
                                <dd>
                                    <p>
                                        <span class="price">${data.pprice}</span>
                                        <span>元起</span>
                                    </p>

                                </dd>
                            </a>
                        </dl>
                    </div>`
            })
            // console.log(html);
            $('#cate-item-list-container').html(html);
            tobuy();
        })
    }else{
        $.getJSON('data/index_sort.php',{index:''},function (response) {
            var html='';
            $.each(response,function (i,data) {
                html+=`
                    <div class="col-md-3 col-xs-6">
                        <a href="detail.html?id=${data.pid}"><img  width="190"  src="${data.pimg}" alt=""></a>
                        <div>
                            <a href="detail.html?id=${data.pid}">${data.pname}</a>
                        </div>
                    </div>
            `
            })
            $('#hotsort').html(html);

        })
    }


}





//todo 统一立即购买样式
// $('#cate-item-list-container').on('mouseover',function (e) {
//     console.log(e.target);
//     $(e.target).on('mouseover','img',function (e) {
//         $(this).siblings('.buy-btn').show();
//     }).on('mouseout','img',function () {
//         $(this).siblings('.buy-btn').hide();
//
//     });
// });

// todo 主页上图片显示立即购买样式
function tobuy(){
    $('.buy-btn').siblings('img').on('mouseenter',function () {
        $(this).siblings('.buy-btn').show();
    });
    $('.buy-btn').siblings('img').on('mouseleave',function () {
        $(this).siblings('.buy-btn').hide();
    })
    $('.buy-btn').on('mouseover',function () {
        $(this).show();
    })
    $('.buy-btn').on('mouseout',function () {
        $(this).hide();
    })


}

//todo 下面场馆小样式
// $('.where').on('mouseover',function () {
//     $(this).children('.venue-detail-container').animate({bottom:'0px'},500);
// })


//todo 主页面轮播图异步加载
function loadadv() {
    $.getJSON('data/loadadv.php',function (response) {
        var html='';
        var htmlbar='';
        html+=`
              <div class="item active">
                     <a href="detail.html?id=${response[0].pid}"><img src="img/adv${response[0].padv}.jpg" alt=""></a>
              </div>
        `;
        htmlbar+=`
           <li data-slide-to="0" data-target="#advs" class="active"></li>
        `;
        for(var i=1,data;i<response.length;i++){
            data=response[i];
            html+=`
              <div class="item">
                     <a href="detail.html?id=${data.pid}"><img src="img/adv${data.padv}.jpg" alt=""></a>
              </div>
           `;
            htmlbar+=`
              <li data-slide-to="${i}" data-target="#advs"></li>
            `;
        }
        $('.carousel-inner').html(html);
        $('.carousel-indicators').html(htmlbar);

    })

}





