function initEvents() {

	$("#dtl-nav  li").on("click", function() {
		// alert($(this).index());

		$(this).find("a").css({
			"color" : "#4acbd6",
			"font-weight" : "700",
		});
		$(this).siblings().find("a").css({
			"color" : "gray",
			"position" : "relative",
			"display" : "block",
			"padding" : "10px 15px",
			"font-weight" : "normal"
		});

		var index = $(this).index();
		m_u_detail.index = index;
		$(".r-show").eq(index).siblings().hide();
		$(".r-show").eq(index).show();
	});

	$(".caption").on("click", function() {

		$("#dtl-nav li").eq(2).find("a").css({
			"color" : "#4acbd6",
			"font-weight" : "700"
		});
		$("#dtl-nav li").eq(2).siblings().find("a").css({
			"color" : "gray",
			"position" : "relative",
			"display" : "block",
			"padding" : "10px 15px",
			"font-weight" : "normal"
		});

		$(".r-show").eq(2).siblings().hide();
		$(".r-show").eq(2).show();
	});

	$("#birth_year").on("change", function() {
		var curYear = $("#birth_year").val();
		// alert(curYear);
		changeBirthYear(curYear);

		return false;
	});

	$("#birth_month").on("change", function() {
		var curYear = $("#birth_year").val();
		var curMonth = $("#birth_month").val();
		// alert(curMonth);
		changeBirthMonth(curYear, curMonth);

		return false;
	});

	$("#birth_day").on("change", function() {
		var curYear = $("#birth_year").val();
		var curMonth = $("#birth_month").val();
		var curDay = $("#birth_day").val();
		// alert(curDay);
		changeBirthDate(curYear, curMonth, curDay);

		return false;
	});

	$("#update_user_base_bind").on("click", updateUserBaseOrBindInfo);

	$("#addr_pro").on("change", function() {
		var pro_value = $("#addr_pro").val();
		var cityList = getCityOptionList(pro_value);
		provinceSelectChange($("#addr_city"), $("#addr_area"), cityList);

		return false;
	});

	$("#addr_city").on("change", function() {
		var pro_value = $("#addr_pro").val();
		var city_value = $("#addr_city").val();

		var areaList = getCityOptionList(pro_value, city_value);
		citySelectChange($("#addr_area"), areaList);

		return false;
	});

	$("#addr_area").on("change", function() {
		var pro_value = $("#addr_pro").val();
		var city_value = $("#addr_city").val();
		var area_value = $("#addr_area").val();

		getCityOptionList(pro_value, city_value, area_value);

		return false;
	});

	$("#addr_confirm").on("click", createAddress);

	$("#up_addr_pro").on("change", function() {
		var pro_value = $("#up_addr_pro").val();
		var cityList = getCityOptionList(pro_value);
		provinceSelectChange($("#up_addr_city"), $("#up_addr_area"), cityList);

		return false;
	});

	$("#up_addr_city").on("change", function() {
		var pro_value = $("#up_addr_pro").val();
		var city_value = $("#up_addr_city").val();

		var areaList = getCityOptionList(pro_value, city_value);
		citySelectChange($("#up_addr_area"), areaList);

		return false;
	});

	$("#up_addr_area").on("change", function() {
		var pro_value = $("#up_addr_pro").val();
		var city_value = $("#up_addr_city").val();
		var area_value = $("#up_addr_area").val();

		getCityOptionList(pro_value, city_value, area_value);

		return false;
	});

	$("#confirm-up-address").on("click", function() {
		$("#update-address").modal('hide');
	});

	$('#new-password-again').bind('input propertychange', function() {
		var newpwd = $("#new-password").val();
		var checkpwd = $("#new-password-again").val();
		if (checkpwd != '' && newpwd == checkpwd) {
			$(".suc").show();
			$(".err").hide();
		} else if (checkpwd != '' && newpwd != checkpwd) {
			$(".suc").hide();
			$(".err").show();
		} else {
			$(".suc").hide();
			$(".err").hide();
		}
		return false;
	});

	$("#submit-change-password").on("click", function() {

		baseAndBindParams.password = $("#new-password-again").val();
		$("#update-password").modal('hide');

	});

	$('#update-password').on('hidden.bs.modal', function() {
		updateUserBaseAndBindAction();
	})
	$('#update-address').on('hidden.bs.modal', function() {
		updateAddressAction();
	})
	
	$("#up-icon").on('hidden.bs.modal',function(){
		updateUserBaseAndBindAction();
	})

}
var upload = null;
function initUploadPlugin() {
	upload = $("#fileuploader").uploadFile(
		{
			url : "upload",
			/**
			 * post file 时使用文件对应的参数名称
			 */
			fileName : "picFileMpf",
			method : "POST",
			dragDropStr : "<span><b>拖放文件</b></span>",
			abortStr : "取消",
			cancelStr : "中止",
			doneStr : "完成",
			multiDragErrorStr : "上传多文件出错",
			extErrorStr : "不允许的文件",
			sizeErrorStr : "超出了文件大小限制：",
			uploadErrorStr : "上传失败",
			uploadStr : "选择文件",
			returnType : "json",
			showPreview:true,
			previewHeight: "100px",
			previewWidth: "100px",
			acceptFiles:"image/*",
			maxFileSize:2000*1024,
			showDone:true,
			
			onLoad : function(obj) {
//				alert("init");
			},
			onSubmit : function(files) {
//				alert("submit");
				
			},
			onSuccess : function(files, data, xhr, pd) {
//				alert("success");
//				console.log(data);
				baseAndBindParams.icon = data.fileName;
			},
			afterUploadAll : function(obj) {
//				alert("uploadAll");
				alert("更新完成");
				$("#up-icon").modal("hide");
				upload.reset();
			},
			onError : function(files, status, errMsg, pd) {
//				alert("uploadError");
			},
			onCancel : function(files, pd) {
//				alert("uploadCancel");
			}
		});
}

/**
 * 更新 用户的 基础信息或者绑定信息 -- 点击事件
 * 
 * @returns
 */
function updateUserBaseOrBindInfo() {
	var account = JSON.parse(storage.account);

	var nickname = $("#nickname").val();
	var name = $("#name").val();

	var year = $("#birth_year").val();
	var month = $("#birth_month").val() - 1;
	var day = $("#birth_day").val();

	var birth = new Date(year, month, day);

	baseAndBindParams.userId = account.USER_ID;
	baseAndBindParams.nickname = nickname;
	baseAndBindParams.name = name;
	baseAndBindParams.birth = birth;
	if ($("#male").prop('checked')) {
		baseAndBindParams.gender = 1;
	} else {
		baseAndBindParams.gender = 0;
	}
	updateUserBaseAndBindAction();

	return false;
}

/**
 * 用户新增 收货地址 -- 点击事件
 * 
 * @returns
 */
function createAddress() {
	var account = JSON.parse(storage.account);
	var more = $("#addr_more").val();
	var receiveName = $("#addr_receiveName").val();
	var receivePhone = $("#addr_receivePhone").val();
	var isDefault = $("#setDefault").prop("checked") ? 1 : 0;

	addressParams.userId = account.USER_ID;
	addressParams.more = more;
	addressParams.receiveName = receiveName;
	addressParams.receivePhone = receivePhone;
	addressParams.isDefault = isDefault;

	addAddressAction();

	return false;
}

/**
 * 加载 个人详细信息
 * 
 * @returns
 */
function loadUserDetailInfo() {

	var user = JSON.parse(storage.account);
	var userId = user.USER_ID;
	userDetailParams.userId = userId;
	$.ajax({
		url : 'user/detail',
		type : 'POST',
		dataType : "json",
		data : userDetailParams,
		success : function(data) {
			console.log(data);
			m_u_detail.updateUser(data);
			loginsucc(user.NICKNAME ? user.NICKNAME : 'noName');
		},
		error : function(data) {
			alert("fail");
		}

	})
}

/**
 * 继续支付
 * 
 * @param params
 * @returns
 */
function continuePayAction(params) {
	$.ajax({
		url : 'order/pay',
		type : 'POST',
		dataType : 'JSON',
		data : params,
		success : function(data) {
			alert("支付订单成功");
			// to do ... ... 去支付页面
			loadHtmlByPath("views/user_detail.html");
		},
		error : function(res) {
			console.log(res);
		}
	});
}

/**
 * 取消订单
 * 
 * @param params
 * @returns
 */
function cancelOrderAction(params) {
	$.ajax({
		url : 'order/cancel',
		type : 'POST',
		dataType : 'JSON',
		data : params,
		success : function(data) {
			alert("取消订单成功");
			loadHtmlByPath("views/user_detail.html");
		},
		error : function(res) {
			console.log(res);
		}
	});
}

/**
 * 更新用户的基础信息以及绑定信息
 * 
 * @returns
 */
function updateUserBaseAndBindAction() {
	$.ajax({
		url : 'user/update',
		type : 'POST',
		dataType : 'JSON',
		data : baseAndBindParams,
		success : function(data) {
			// console.log(data);
			if (data.code == 0) {
				// alert("成功");
				var user = JSON.parse(storage.account);
				user.NICKNAME = baseAndBindParams.nickname;
				storage.setItem("account", JSON.stringify(user));
				loadHtmlByPath("views/user_detail.html");

			} else {
				alert("新增失败");
			}
		},
		error : function(res) {
			console.log(res);
		}
	});
}

/**
 * 创建 收货地址
 * 
 * @returns
 */
function addAddressAction() {
	$.ajax({
		url : 'user/createAddress',
		type : 'POST',
		dataType : 'JSON',
		data : addressParams,
		success : function(data) {
			// console.log(data);
			if (data.code == 0) {
				// alert("成功");
				loadHtmlByPath("views/user_detail.html");
			} else {
				alert("新增失败");
			}
		},
		error : function(res) {
			console.log(res);
		}
	});
}

/**
 * 更新 收货地址
 * 
 * @returns
 */
function updateAddressAction() {
	var more = $("#up_addr_more").val();
	var receiveName = $("#up_addr_receiveName").val();
	var receivePhone = $("#up_addr_receivePhone").val();
	var isDefault = $("#up_setDefault").prop("checked") ? 1 : 0;

	addressParams.more = more;
	addressParams.receiveName = receiveName;
	addressParams.receivePhone = receivePhone;
	addressParams.isDefault = isDefault;

	$.ajax({
		url : 'user/updateAddress',
		type : 'POST',
		dataType : 'JSON',
		data : addressParams,
		success : function(data) {
			// console.log(data);
			if (data.code == 0) {
				// alert("成功");
				loadHtmlByPath("views/user_detail.html");
			} else {
				alert("修改失败");
			}
		},
		error : function(res) {
			console.log(res);
		}
	});
}

/**
 * 删除指定的 收货地址
 * 
 * @param addressId
 * @returns
 */
function delAddressAction(addressId) {
	var params = {
		"addressId" : addressId
	};
	$.ajax({
		url : 'user/del',
		type : 'POST',
		dataType : 'JSON',
		data : params,
		success : function(data) {
			// console.log(data);
			if (data.code == 0) {
				alert("成功");
				loadHtmlByPath("views/user_detail.html");
			} else {
				alert("新增失败");
			}
		},
		error : function(res) {
			console.log(res);
		}
	});
}

/* 个人用户 的生日下拉列表控制 start */
function initBirthSelect(birth) {
	birth = new Date(birth);
	var $birth_year = $("#birth_year");
	var $birth_month = $("#birth_month");
	var $birth_day = $("#birth_day");

	$birth_year.empty();
	$birth_month.empty();
	$birth_day.empty();

	var minYear;
	var maxYear;
	var minMonth;
	var maxMonth;
	var minDay;
	var maxDay;

	var now = new Date();
	var u_birth_year = now.getFullYear();
	var u_birth_month = now.getMonth();
	var u_birth_date = now.getDate();

	if (birth) {
		u_birth_year = birth.getFullYear();
		u_birth_month = birth.getMonth();
		u_birth_date = birth.getDate();
	}

	minYear = u_birth_year - 30;
	maxYear = u_birth_year + 30;

	minMonth = 1;
	maxMonth = 12;

	minDay = 1;
	// 可以获取到指定月份的最大值
	maxDay = new Date(u_birth_year, u_birth_month, 0).getDate();

	for (var i = minYear; i <= maxYear; i++) {
		var $op = $('<option value="' + i + '">' + i + '</option>');

		if (i == u_birth_year) {
			$op.attr("selected", "");
		}
		$birth_year.append($op);
	}

	for (var i = minMonth; i <= maxMonth; i++) {
		var $op = $('<option value="' + i + '">' + i + '</option>');

		if (i == (u_birth_month + 1)) {
			$op.attr("selected", "");
		}
		$birth_month.append($op);
	}

	for (var i = minDay; i <= maxDay; i++) {
		var $op = $('<option value="' + i + '">' + i + '</option>');

		if (i == u_birth_date) {
			$op.attr("selected", "");
		}
		$birth_day.append($op);
	}
}

function changeBirthYear(curYear) {
	var $birth_month = $("#birth_month");
	var $birth_day = $("#birth_day");

	var minMonth;
	var maxMonth;
	var minDay;
	var maxDay;

	$birth_month.empty();
	$birth_day.empty();

	minMonth = 1;
	maxMonth = 12;

	minDay = 1;
	// 可以获取到指定月份的最大值
	maxDay = new Date(curYear, 1, 0).getDate();

	for (var i = minMonth; i <= maxMonth; i++) {
		var $op = $('<option value="' + i + '">' + i + '</option>');

		if (i == 1) {
			$op.attr("selected", "");
		}
		$birth_month.append($op);
	}

	for (var i = minDay; i <= maxDay; i++) {
		var $op = $('<option value="' + i + '">' + i + '</option>');

		if (i == 1) {
			$op.attr("selected", "");
		}
		$birth_day.append($op);
	}

	return false;

}

function changeBirthMonth(curYear, curMonth) {
	var $birth_day = $("#birth_day");

	var minDay;
	var maxDay;

	$birth_day.empty();

	minDay = 1;
	// 可以获取到指定月份的最大值
	maxDay = new Date(curYear, curMonth, 0).getDate();

	for (var i = minDay; i <= maxDay; i++) {
		var $op = $('<option value="' + i + '">' + i + '</option>');

		if (i == 1) {
			$op.attr("selected", "");
		}
		$birth_day.append($op);
	}

	return false;
}

function changeBirthDate(curYear, curMonth, curDate) {

	return false;
}
/* 个人用户 的生日下拉列表控制 end */

/* 用户自定义的收货地址 下拉列表 start */
function initProvinceSelectOptions($addr_pro, $addr_city, $addr_area, top, sec,
		third) {

	var $pro_default = $('<option value="" >省/市直辖市</option>');
	var $city_default = $('<option value="" >选择城市</option>');
	var $area_default = $('<option value="" >区/县</option>');

	$addr_pro.empty();
	$addr_city.empty();
	$addr_area.empty();

	if (!top) {
		$pro_default.attr("selected", true);
	}
	if (!sec) {
		$city_default.attr("selected", true);
	}
	if (!third) {
		$area_default.attr("selected", true);
	}

	$addr_pro.append($pro_default);
	$addr_city.append($city_default);
	$addr_area.append($area_default);

	var pro = null;
	var city = null;
	var area = null;

	for (var i = 0; i < cityList.length; i++) {

		var $item = $('<option value="' + cityList[i].prov_value + '">'
				+ cityList[i].prov_name + '</option>');

		if (cityList[i].prov_name == top) {
			$item.attr("selected", true);
			pro = cityList[i];
		}

		$addr_pro.append($item);
	}

	if (pro) {
		for (var i = 0; i < pro.cityList.length; i++) {

			var $item = $('<option value="' + pro.cityList[i].city_value + '">'
					+ pro.cityList[i].city_name + '</option>');

			if (pro.cityList[i].city_name == sec) {
				$item.attr("selected", true);
				city = pro.cityList[i];
			}

			$addr_city.append($item);
		}
	}

	if (city) {
		for (var i = 0; i < city.areaList.length; i++) {

			var $item = $('<option value="' + city.areaList[i].area_value
					+ '">' + city.areaList[i].area_name + '</option>');

			if (city.areaList[i].area_name == third) {
				$item.attr("selected", true);
				area = city.areaList[i];
			}

			$addr_area.append($item);
		}
	}

}

function provinceSelectChange($addr_city, $addr_area, cityList) {

	var $city_default = $('<option value="" selected>选择城市</option>');
	var $area_default = $('<option value="" selected>区/县</option>');

	$addr_city.empty();
	$addr_area.empty();

	$addr_city.append($city_default);
	$addr_area.append($area_default);

	for (var i = 0; i < cityList.length; i++) {
		var $item = $('<option value="' + cityList[i].city_value + '">'
				+ cityList[i].city_name + '</option>');
		$addr_city.append($item);
	}

}

function citySelectChange($addr_area, areaList) {

	var $area_default = $('<option value="" selected>区/县</option>');

	$addr_area.empty();

	$addr_area.append($area_default);

	for (var i = 0; i < areaList.length; i++) {
		var $item = $('<option value="' + areaList[i].area_value + '">'
				+ areaList[i].area_name + '</option>');
		$addr_area.append($item);
	}

}

function getCityOptionList(topValue, secValue, thirdValue) {

	var curPro = null;
	var curCity = null;
	var curArea = null;

	for (var i = 0; i < cityList.length; i++) {
		if (topValue == cityList[i].prov_value) {
			curPro = cityList[i];
			break;
		}
	}

	if (curPro) {
		for (var i = 0; i < curPro.cityList.length; i++) {
			if (secValue == curPro.cityList[i].city_value) {
				curCity = curPro.cityList[i];
				break;
			}
		}

		if (curCity) {
			for (var i = 0; i < curCity.areaList.length; i++) {
				if (thirdValue == curCity.areaList[i].area_value) {
					curArea = curCity.areaList[i];
					break;
				}
			}
			if (curArea) {

				addressParams.province = curPro.prov_name;
				addressParams.city = curCity.city_name;
				addressParams.area = curArea.area_name;

				return curArea;
			} else {
				addressParams.province = curPro.prov_name;
				addressParams.city = curCity.city_name;
				addressParams.area = '';
				return curCity.areaList;
			}
		} else if (secValue == '') {
			addressParams.province = curPro.prov_name;
			addressParams.city = '';
			addressParams.area = '';
			return [];
		} else {
			addressParams.province = curPro.prov_name;
			addressParams.city = '';
			addressParams.area = '';
			return curPro.cityList;
		}

	} else {
		addressParams.province = '';
		addressParams.city = '';
		addressParams.area = '';

		return [];
	}

}
/* 用户自定义的收货地址 下拉列表 end */

