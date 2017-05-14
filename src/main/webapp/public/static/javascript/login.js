//todo 用户登录和注册摸态框变化
function initAlertDialog() {
	// 点击登陆后 执行tologin方法 修改弹框内容
	$('#login').click(function() {
		tologin();
	});
	// 点击 注册后 执行toregister方法 修改弹框内容
	$('#register').on('click', function() {
		toregister();
	});

	// 点击弹框中的a标签元素后，，执行不同的方法
	$('#mainlogin').on('click', 'a', function(e) {
		e.preventDefault();
		// console.log($(this).html());
		switch ($(this).html()) {
		case '已有账号，去登录':
			tologin();
			break;
		case '忘记账号':
			// toregister();
//			alert("暂未实现");
			break;
		case '忘记密码':
//			alert("暂未实现");
			break;
		case '没有账号？去注册':
			toregister();
			break;
		}
	});

	// 弹框中右上角的角标变化
	$('#mainlogin .close').on('mouseover', function() {
		$(this).attr('src', 'static/images/close.png');
	}).on('mouseout', function() {
		$(this).attr('src', 'static/images/close-normal.png');
	});

	// 弹框中input标签获得焦点后，消除错误信息
	$('#mainlogin input').on('focus', function() {
		$('.alert_warning').hide();
	});

	// 点击提交时 发送不同的请求
	$('#submit').on('click', loginAndRegister);

	// 当在注册时， 用户名输入框失去焦点时异步验证是否已被使用
	$('#uname').on('blur', checkPhone);

}

// 点击登录时。弹框内容的修改
function tologin() {
	$('.alert_warning').hide();
	$('.succ').hide();
	$('#mainlogin button').html('登录');
	$('#mainlogin h1').html('麦票账户登录');
	$('#mainlogin input').eq(2).remove();
	if($(".verify-code")){
		$(".verify-code").remove();
	}
	$('#mainlogin p')
			.css('margin-top', '120px')
			.html(
					"<b><a href='#'>忘记账号</a></b><span>|</span> <b><a href='#'>忘记密码</a></b> <span>|</span> <b><a href='javascript:void(0);'>没有账号？去注册</a> </b>")
}

// 点击注册时。弹框内容的修改
function toregister() {
	$('.alert_warning').hide();
	$('.succ').hide();
	$('#mainlogin h1').html('注册麦票账号');
	$('#mainlogin input').eq(2).remove();
	if($(".verify-code")){
		$(".verify-code").remove();
	}
	$('#mainlogin button').html('注册').before(
			"<div class='row clearfix verify-code' style='margin-bottom:10px;'>" +
			"	<div class='col-md-8 column'>"+
			"		<input class='form-control' id='verify-code' type='text' placeholder='手机验证码'>" +
			"	</div>"+
			
			"	<div class='col-md-4 column'>"+
			"		<button class='btn btn-default' id='send-verify-code'>发送验证码</button>" +
			"	</div>"+
			"<div>");
	$('#mainlogin p').css('margin-top', '55px').html(
			"<b><a href='#'>已有账号，去登录</a></b>");
	
	$("#send-verify-code").on("click",sendVerfiyCode);
}

/* 发送验证码 start*/

var timeOut = null;
var counts = 60;

function sendVerfiyCode(){
	var phone = $('#uname').val();
	if(!$(this).attr("disabled")){
		$(this).attr("disabled",true);
	}
	
	if(!timeOut){
		timeOut = setInterval(function(){
			if(counts == 0){
				if($("#send-verify-code").attr("disabled")){
					$("#send-verify-code").removeAttr("disabled");
					$("#send-verify-code").text("发送验证码");
					if(timeOut){
						clearInterval(timeOut);
						timeOut = null;
						counts = 60;
					}
				}
			}else{
				counts --;
				$("#send-verify-code").text(counts+"S 后可重发");
			}
			console.log("发送");
		}, 1000);
	}
	sendVerfiyCodeAction(phone);
	
//	alert("发送验证码");
}

/**
 * 告知 后台向 指定手机号发送 验证码
 * @returns
 */
function sendVerfiyCodeAction(phone){
	var params = {"phone":phone};
	$.ajax({
		url : 'account/sendVerfiyCode',
		type : 'POST',
		dataType : "json",
		data : params,
		success : function(data) {
			if (data.alibaba_aliqin_fc_sms_num_send_response.result.success) {
				console.log('发送成功');
			} else {
//				alert("发送失败");
			}
		},
		error : function(data) {
			alert("fail");
		}

	});
}
/*发送验证码  end*/

/**
 * 异步判断 手机号是否被使用
 * @returns
 */
function checkPhone() {
	var phone = $('#uname').val();
	var param = {
		'phone' : phone
	};
	if ($('#submit').html() == '注册' && phone !== '') {
		$.ajax({
			url : 'account/check',
			type : 'POST',
			dataType : "json",
			data : param,
			success : function(data) {
				if (data.code == '0') {
					$('.phone').hide();
					$('.usucc').show();
//					console.log('号码可以使用');
					// to do ... ... 发送验证码
				} else {
					$('.usucc').hide();
					$('.phone').show();
//					console.log('号码已被使用');
				}
			},
			error : function(data) {
				alert("fail");
			}

		});
	}

	return false;
}

/**
 * 向后台发送注册或者登陆请求
 * @returns
 */
function loginAndRegister() {

	var phone = $('#uname').val();
	var password = $('#upwd').val();
	var verfiyCode = $("#verify-code").val();
	var param = {"phone":phone,"password":password};
	if (phone != '' && password != '') {

		if ($(this).html() == "登录") {

			$_ajaxAuth('account/login',phone,password).then(function(data){
				if (data.code == '0') {
//					console.log('登录成功');
					var user = data.data;
					userDetailParams.userId = user.USER_ID;
					storage.setItem('account', JSON.stringify(user));
					loginsucc(user.NICKNAME ? user.NICKNAME : 'noName');
					$('#loginR').modal('hide');
				} else {
//					console.log('用户名或密码错误');
					$('.submit').show();
				}
			},function(res){
//				alert("fail");
				$('.submit').show();
			});
			
		} else {
			param.code = verfiyCode;
			$.ajax({
				url : 'account/regist',
				type : 'POST',
				dataType : "json",
				data : param,
				success : function(data) {
					if (data.code == '0') {
//						console.log('注册成功');
						var user = data.data;
						
						userDetailParams.userId = user.USER_ID;
						storage.setItem('account', JSON.stringify(user));
						
						loginsucc(user.NAME ? user.NAME : 'noName');
						
						$(".lsucc").show();
						$('#loginR').modal('hide');
					} else {
						$('.phone').eq(0).text(data.msg);
						$('.phone').show();
					}
				},
				error : function(data) {
					alert("fail");
				}

			});

		}

	}

	return false;

}
