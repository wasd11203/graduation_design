var url = location.search;
var id = url.slice(4);
$.getJSON('data/detail.php',{id:id},function (response){
    var detail=response[0];
    var arr = detail.ptime.split('-');
    var mdate = arr[1]+'月'+arr[2]+'日';
    var date = arr[0]+'年'+arr[1]+'月'+arr[2]+'日';

    var html='';
    html+=`<div class="col-md-4 banner-left">
                <img width="350px" height="470px" src="${detail.pimg}" alt="">
            </div>
            <ul class="col-md-8 banner-right">
                <li class="title">${detail.pname}</li>
                <li class="sub_title">同名改编电影票房破14亿的话剧</li>
                <li class="time"></li>
                <li class="bottom">
                    <span class="price">${detail.pprice}</span>
                    元起
                    <span class="seat">选座</span>
                </li>
            </ul>
           `

    var html2='';
    html2+=`
                    <div class="col-md-12 top_bar">
                    <ul>
                        <li class="col-md-2"><a href="#" class="buy">购买<span></span></a></li>
                        <li class="col-md-3"><a href="#">演出介绍</a></li>
                    </ul>
                </div>
            <div class="col-md-12 ticked_box">
                    <div class="col-md-2 tab_l">
                        <span>选择场次</span>
                    </div>
                    <div class="col-md-10">
                        <ul class="row times">
                            <li class="col-md-2 active">
                                <a href="#" class="">
                                       ${mdate} <br>周六 19:30
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            <div class="col-md-12">
                    <div class="col-md-2 tab_l"><span>选择票价</span></div>
                    <div class="col-md-10">
                        <ul class="row ticked_detial">
                            <li class="col-md-2"><a href="#">${detail.pprice}元</a></li>
                            <li class="col-md-2"><a href="#">${parseInt(detail.pprice)+200}元</a></li>
                            <li class="col-md-2"><a href="#">${parseInt(detail.pprice)+600}元</a></li>
                            <li class="col-md-2"><a href="#">${parseInt(detail.pprice)+1000}元</a></li>
                        </ul>
                    </div>
                </div>
            <div class="col-md-12 ticked_own">
                <div class="col-md-2 tab_l"><span>你已经选择</span></div>
                <div class="col-md-10 tab_r">
                        <p><label>${date} 周五 19:00</label></p>
                        <ul>
                            <li>
                                <div class="num">
                                    <small>¥</small><span class="f30"></span>
                                    <big>X</big>
                                    <span class="pro-inpNum">
                                        <a href="#" class="sub"></a>
                                        <b>1</b>
                                        <a href="#" class="add"></a>
                                    </span>
                                    <div class="left-ticket">
                                     今日余票还有：<span class="t"><big class="green"></big>张</span>
                                    <img class="fr del-ticket" src="">                                   
                                    </div>

                                </div>
                            </li>
                        </ul>
                        <div class="col-md-12">
                            <div class="pay_box">
                                <a href="#" class="btn" id="btn-submit">加入购物车</a>
                                &nbsp;&nbsp;
                                <span>合计：<big id="total-price">80</big>元</span>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="col-md-12" id="more">
                <p><a href="#" class="buy">演出介绍<span></span></a></p>
                <img src="img/${detail.pmore}.jpg">
            </div>
    `
    $('.chose_left').html(html2);
    $('.banner_main .row').html(html);

    $('.ticked_detial>li').on('click',function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('.ticked_own').show();
        $('.f30').html(this.innerText);
        add(0);
    })
    $('.pro-inpNum a').on('click',function (e) {
        e.preventDefault();
        if($(this).hasClass('sub')){
            if($('.pro-inpNum b').html()>1){
                add(-1);
                var n = $('.left-ticket big').html();
                if(n<3){
                    n++;
                    $('.left-ticket big').html(n);
                }else{
                    $('.left-ticket').hide();

                }
            }
        }else{
            // $.ajaxSettings.async=false;
            $.getJSON('data/detail.php',{id:id},function (response){


            // console.log(response);
            var count=response[0].pcount;
            var total =$('.pro-inpNum b').html();
            var left=count-total;
            if(left<=3&&left>=0){
                $('.left-ticket').css('display','inline-block');
                $('.left-ticket big').html(left);
            }
            if(left!==0){
                add(1);
            }
            })
        }
    });
    function add(x) {
       var str= $('.f30').html();
        var pri = parseInt(str);
        var count = parseInt($('.pro-inpNum b').html())+x;
        $('.pro-inpNum b').html(count);
        var total = pri*count;
        $('#total-price').html(total);
    };
    //todo 加入购物车
    $('#btn-submit').on('click',function (e) {
        e.preventDefault();
        var storage=window.sessionStorage;
        var username =storage.username;
        if(!username){
            $('#loginR').click();

        }else{
            var uname=username;
            var pid = id;
            var pcount=$('.pro-inpNum b').html();
            var pmoney =$('#total-price').html();
            $.get('data/car.php',{uname:uname,pid:pid,pcount:pcount,pmoney:pmoney},function (response) {
                console.log(response);
                if(response=='succ'){
                    console.log('加入购物车');

                }
            })

        }

    })


})

