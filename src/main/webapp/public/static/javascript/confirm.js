
function toConfirmOrderAction(){
	$.ajax({
		url : 'order/toConfirm',
		type : 'POST',
		dataType : "json",
		data:confirmOrderParams,
		success:function(data){
			console.log(data);
			if(data.code == 0){
				m_confirm.updateOrder(data.data);
			}else{
				alert("无法下单！");
				confirmOrderParams = {};
				loadHtmlByPath("views/resource_detail.html");
			}
		},
		error:function(data){
			alert("fail");
		}
			
	});
	
	return false;
}

function initSelect(){
	m_confirm.updataProvinces(confirmOrderCityList);
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
	etime += 60000000;
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
	alert("时间到");
	if (id != null) {
		clearInterval(id);
	}
	location.href = "index.html"; // 填写要转向的网页
}

/*定时设置 结束*/