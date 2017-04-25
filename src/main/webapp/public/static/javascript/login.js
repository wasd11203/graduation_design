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
			alert("暂未实现");
			break;
		case '忘记密码':
			alert("暂未实现");
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
	$('#mainlogin h1').html('娱票儿账户登录');
	$('#mainlogin input').eq(2).remove();
	$('#mainlogin p')
			.css('margin-top', '120px')
			.html(
					"<b><a href='#'>忘记账号</a></b><span>|</span> <b><a href='#'>忘记密码</a></b> <span>|</span> <b><a href='javascript:void(0);'>没有账号？去注册</a> </b>")
}

// 点击注册时。弹框内容的修改
function toregister() {
	$('.alert_warning').hide();
	$('.succ').hide();
	$('#mainlogin h1').html('注册娱票儿账号');
	$('#mainlogin input').eq(2).remove();
	$('#mainlogin button').html('注册').before(
			"<input class='form-control' type='text' placeholder='手机验证码'>");
	$('#mainlogin p').css('margin-top', '55px').html(
			"<b><a href='#'>已有账号，去登录</a></b>")
}

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

function loginAndRegister() {

	var phone = $('#uname').val();
	var password = $('#upwd').val();
	var param = {"phone":phone,"passwrod":password};
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
				alert("fail");
			});
			
		} else {

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
