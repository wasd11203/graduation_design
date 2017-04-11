var app = angular.module('myApp',[]);
var storage=window.sessionStorage;
var username =storage.username;
$.getJSON('data/mycar.php',{uname:username},function (response) {
    var html='';
    $.each(response,function (i,data) {
        var id = data.pid;
        $.ajaxSettings.async = false;
        var x = $.getJSON('data/detail.php',{id:id},function (list) {
        });
        var detail = x.responseJSON[0];
        var arr = detail.ptime.split('-');
        var mdate = arr[1]+'月'+arr[2]+'日';

            html+=`
                    <div class="infobox order_list" data="817" id="${data.cid}">
                            <div class="row info_header">
                                <div class="col-md-3">
                                    <p>订单编号：<span>${1000+parseInt(data.cid)}</span></p>
                                </div>
                                <div class="col-md-3">
                                    <p>时间：<span>2016-10-07 13:52:04</span></p>
                                </div>
                                <div class="col-md-2">
                                    <p>取票类型：<span>快递</span></p>
                                </div>
                                <div class="col-md-2 uploadCard"></div>
                                <div class="col-md-2 stu">
                                    <p>状态：<span>待支付</span></p>
                                </div>
                            </div>
                            <div class="row order_info">
                                <div class="col-md-8 o_i_des">
                                    <dl>
                                        <dt>
                                            <img src="${detail.pimg}">
                                        </dt>
                                        <dd>
                                            <p class="t n">${detail.pname}</p>
                                            <p class="t p">青岛体育中心国信体育馆钻石馆</p>
                                            <p class="t t">${mdate} 周六 19:30</p>
                                            <div class="t s clearfix">
                                            
   
                                       <p class="l"><span>${data.pcount}</span>张</p>
                                                <p class="r"><label>订单金额：</label><span>${data.pmoney}</span>元</p>
                                            </div>
                                            <ul class="arealist clearfix">
                                                <li></li>
                                            </ul>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="col-md-4 o_i_piao">
                                    <ul>
                                        <li><label>手机号码：</label>15727575790</li>
                                        <li><label>收票人姓名：</label>${data.uname}</li>
                                        <li><label>收票人手机：</label>15758689453</li>
                                        <li><label>地址：</label>江西省景德镇市珠山区sadfvas</li>

                                    </ul>
                                    <div class="op">
                                        <a href="${data.cid}" class="opbtn">取消订单</a>
                                        <a class="opbtn">去支付</a>
                                    </div>
                                </div>
                            </div>
                        </div>
        `
    })
    $("#ucenterbox").html(html);
})
$("#ucenterbox").on('click','.opbtn',function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    $.get('data/delete.php',{'cid':id},function (message) {
        console.log(message);
        if(message=='succ'){
            console.log(id);
            $('#'+id).hide();
        }
    })
})
