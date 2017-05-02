/**
 * 临时记录当前选择的地区信息
 */
var curProValue = null;
var curCityValue = null;
var curAreaValue = null;

/**
 * 初始化 确认订单整个页面
 * @returns
 */
function initConfirmPage(){
	settimes();
	toConfirmOrderAction();
	
	initSelect();
	$('#province').on("change",function(){
//		alert("刷新下级列表:"+$('#province').selectpicker('val'));
		curProValue= $('#province').selectpicker('val');
		var cityList = m_confirm.getOptionList(curProValue);
		
		$('#city').selectpicker('destroy');
		$('#area').selectpicker('destroy');
		
		m_confirm.updataCitys(cityList);
		m_confirm.updateAreas([]);
		return false;
	});
	
	$('#city').on("change",function(){
//		alert("刷新下级列表:"+$('#city').selectpicker('val'));
		curCityValue= $('#city').selectpicker('val');
		var areaList = m_confirm.getOptionList(curProValue,curCityValue);
		
		$('#area').selectpicker('destroy');
		
		m_confirm.updateAreas(areaList);
		
		return false;
	});
	
	$('#area').on("change",function(){
//		alert("刷新下级列表:"+$('#area').selectpicker('val'));
		curAreaValue= $('#area').selectpicker('val');
		m_confirm.getOptionList(curProValue,curCityValue,curAreaValue);
		
		return false;
	});
	
	$("input[type='checkbox']").on("change",function(){
//		alert("checked");
		if($("input[type='checkbox']").is(':checked')){
			$("#receiveDeliveryMobile").val($("#buyUserMobile").val());
			$("#receiveDeliveryMobile").attr("disabled","true");
		}else{
			$("#receiveDeliveryMobile").removeAttr("disabled");
		}
		
		return false;
	});
	
	$("#btn-payment").on("click",function(){
		createOrder();
	});
	
}

/**
 * 去确认订单的请求操作
 * @returns
 */
function toConfirmOrderAction(){
	$.ajax({
		url : 'order/toConfirm',
		type : 'POST',
		dataType : "json",
		data:confirmOrderParams,
		success:function(data){
//			console.log(data);
			if(data.code == 0){
				m_confirm.updateOrder(data.data);
			}else{
				alert("无法下单！");
				loadHtmlByPath("views/resource_detail.html");
			}
		},
		error:function(data){
			alert("fail");
		}
			
	});
	
	return false;
}

function toExitOrderAction(){
	$.ajax({
		url : 'order/exitConfirm',
		type : 'POST',
		dataType : "json",
		data:confirmOrderParams,
		success:function(data){
//			console.log(data);
		},
		error:function(data){
			alert("fail");
		}
			
	});
	
	return false;
}

function initSelect(){
	m_confirm.updataProvinces(cityList);
	m_confirm.updataCitys([]);
	m_confirm.updateAreas([]);
}

function createOrder(){
	
	var buyerPhone = $("#buyUserMobile").val();
	var more = $("#deliveryAddress").val();
	var receiveName = $("#receiveDeliveryPerson").val();
	var receivePhone = $("#receiveDeliveryMobile").val();;
	
	createOrderParams.buyerPhone = buyerPhone;
	createOrderParams.more = more;
	createOrderParams.receiveName = receiveName;
	createOrderParams.receivePhone = receivePhone;
	
	$.ajax({
		url : 'order/create',
		type : 'POST',
		dataType : "json",
		data:createOrderParams,
		success:function(data){
			console.log(data);
			// to do ... 跳转到个人信息中的订单页进行支付
			m_u_detail.index = 0;
			
			loadHtmlByPath("views/user_detail.html");
		},
		error:function(data){
			alert("fail");
		}
			
	});
	
	return false;
}


/*定时设置 结束*/
var id = null;

function display() {
	rtime = etime - ctime;
	if (rtime > 60)
		m = parseInt(rtime / 60);
	else {
		m = 0;
	}
	s = parseInt(rtime - m * 60);
	if (s < 10) {
		s = "0" + s
	}
	$("#time_container").text(m + "分" + s + "秒");

}

function settimes() {

	var time = new Date();
	hours = time.getHours();
	mins = time.getMinutes();
	secs = time.getSeconds();
	etime = hours * 3600 + mins * 60 + secs;
	etime += 600;
	id = setInterval("checktime()", 1000);
}

function checktime() {
	var time = new Date();
	hours = time.getHours();
	mins = time.getMinutes();
	secs = time.getSeconds();

	ctime = hours * 3600 + mins * 60 + secs;

	if (ctime >= etime) {
		expired();
	} else {
		display();
	}
}

function expired() {
//	alert("时间到");
	if (id != null) {
		clearInterval(id);
	}
	location.href = "index.html"; // 填写要转向的网页
}

/*定时设置 结束*/