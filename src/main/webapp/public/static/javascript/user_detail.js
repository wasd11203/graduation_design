function initEvents() {
	
	$(".my_center_sidenav .nav li").on("click", function() {
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

	$("#password-change-button").on("click",function(){
		alert("修改密码");
		
		return false;
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

	$("#update_user_base_bind").on("click", function() {

		var account = JSON.parse(storage.account);

		var nickname = $("#username").val();
		var name = $("#name").val();

		var year = $("#birth_year").val();
		var month = $("#birth_month").val() - 1;
		var day = $("#birth_day").val();

		var birth = new Date(year, month, day);

		baseAndBindParams.userId = account.USER_ID;
		baseAndBindParams.nickname = nickname;
		baseAndBindParams.name = name;
		baseAndBindParams.birth = birth;
		if($(this).prop('checked')){
			baseAndBindParams.gender = 1;
		}else{
			baseAndBindParams.gender = 0;
		}
		updateUserBaseAndBindAction();

		return false;
	});
	
	$("#addr_pro").on("change",function(){
		var pro_value = $("#addr_pro").val();
		var cityList = getCityOptionList(pro_value);
		provinceSelectChange(cityList);
		
		return false;
	});
	
	$("#addr_city").on("change",function(){
		var pro_value = $("#addr_pro").val();
		var city_value = $("#addr_city").val();
		
		var areaList = getCityOptionList(pro_value,city_value);
		citySelectChange(areaList);
		
		return false;
	});
	
	$("#addr_area").on("change",function(){
		var pro_value = $("#addr_pro").val();
		var city_value = $("#addr_city").val();
		var area_value = $("#addr_area").val();
		
		getCityOptionList(pro_value,city_value,area_value);
		
		return false;
	});
	
	$("#addr_confirm").on("click",function(){
		var account = JSON.parse(storage.account);
		var more = $("#addr_more").val();
		var receiveName = $("#addr_receiveName").val();
		var receivePhone = $("#addr_receivePhone").val();
		var isDefault = $("#setDefault").prop("checked")?1:0;
		
		addressParams.userId = account.USER_ID;
		addressParams.more = more;
		addressParams.receiveName = receiveName;
		addressParams.receivePhone = receivePhone;
		addressParams.isDefault = isDefault;
		
		addAddressAction();
		
		return false;
	});

}

/**
 * 加载 个人详细信息
 * @returns
 */
function loadUserDetailInfo() {

	var userId = JSON.parse(storage.account).USER_ID;
	userDetailParams.userId = userId;
	$.ajax({
		url : 'user/detail',
		type : 'POST',
		dataType : "json",
		data : userDetailParams,
		success : function(data) {
			console.log(data);
			m_u_detail.updateUser(data);

		},
		error : function(data) {
			alert("fail");
		}

	})
}

/**
 * 更新用户的基础信息以及绑定信息
 * @returns
 */
function updateUserBaseAndBindAction() {
	$.ajax({
		url : 'user/update',
		type : 'POST',
		dataType : 'JSON',
		data : baseAndBindParams,
		success : function(data) {
//			console.log(data);
			if(data.code == 0){
//				alert("成功");
				loadHtmlByPath("views/user_detail.html");
			}else{
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
 * @returns
 */
function addAddressAction(){
	$.ajax({
		url : 'user/createAddress',
		type : 'POST',
		dataType : 'JSON',
		data : addressParams,
		success : function(data) {
//			console.log(data);
			if(data.code == 0){
//				alert("成功");
				loadHtmlByPath("views/user_detail.html");
			}else{
				alert("新增失败");
			}
		},
		error : function(res) {
			console.log(res);
		}
	});
}

function updateAddressAction(){
	
}

/**
 * 删除指定的 收货地址
 * @param addressId
 * @returns
 */
function delAddressAction(addressId){
	var params = {"addressId":addressId};
	$.ajax({
		url : 'user/del',
		type : 'POST',
		dataType : 'JSON',
		data : params,
		success : function(data) {
//			console.log(data);
			if(data.code == 0){
				alert("成功");
				loadHtmlByPath("views/user_detail.html");
			}else{
				alert("新增失败");
			}
		},
		error : function(res) {
			console.log(res);
		}
	});
}

/*个人用户 的生日下拉列表控制  start */
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
/*个人用户 的生日下拉列表控制  end */

/* 用户自定义的收货地址 下拉列表种植 start */
function initProvinceSelectOptions(){
	
	var $addr_pro = $("#addr_pro");
	var $addr_city = $("#addr_city");
	var $addr_area = $("#addr_area");
	
	var $pro_default = $('<option value="" selected>省/市直辖市</option>');
	var $city_default = $('<option value="" selected>选择城市</option>');
	var $area_default = $('<option value="" selected>区/县</option>');
	
	$addr_pro.empty();
	$addr_city.empty();
	$addr_area.empty();

	$addr_pro.append($pro_default);
	$addr_city.append($city_default);
	$addr_area.append($area_default);
	
	for(var i = 0;i<cityList.length;i++){

		var $item = $('<option value="' + cityList[i].prov_value
				+ '">' + cityList[i].prov_name + '</option>');
		$addr_pro.append($item);
	}
}

function provinceSelectChange(cityList){
	var $addr_city = $("#addr_city");
	var $addr_area = $("#addr_area");
	
	var $city_default = $('<option value="" selected>选择城市</option>');
	var $area_default = $('<option value="" selected>区/县</option>');
	
	$addr_city.empty();
	$addr_area.empty();
	
	$addr_city.append($city_default);
	$addr_area.append($area_default);
	
	for(var i = 0; i < cityList.length; i++){
		var $item = $('<option value="' + cityList[i].city_value + '">'
				+ cityList[i].city_name + '</option>');
		$addr_city.append($item);
	}
	
}

function citySelectChange(areaList){
	var $addr_area = $("#addr_area");
	
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
/* 用户自定义的收货地址 下拉列表种植 end */

