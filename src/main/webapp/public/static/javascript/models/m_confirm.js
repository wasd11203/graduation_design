var m_confirm = {

	order : {},
	updateOrder : function(order) {
		
		createOrderParams.userId = user.USER_ID;
		createOrderParams.resourceId = order.orderInfo.RESOURCE_ID;
		createOrderParams.resourceName = order.orderInfo.RESOURCE_NAME;
		createOrderParams.isEnable = order.orderInfo.ISENABLE;
		createOrderParams.regionThirdId = order.orderInfo.THIRD_ID;
		createOrderParams.regionThirdName = order.orderInfo.THIRD_NAME;
		createOrderParams.venueId = order.orderInfo.VENUE_ID;
		createOrderParams.siteId = order.orderInfo.SITE_ID;
		createOrderParams.ticketId = order.orderInfo.TICKET_ID;
		createOrderParams.ticketCounts = order.orderInfo.TICKET_COUNTS;
		createOrderParams.ticketPrice = order.orderInfo.TICKET_PRICE;
		createOrderParams.total = order.orderInfo.TOTAL_PRICE;
		
		this.order = order;
		this.updateOrderView();
	},
	updateOrderView : function() {
		var $re_img = $("#re_img");
		var $re_name = $("#re_name");
		var $re_venue = $("#re_venue");
		var $re_time = $("#re_time");
		var $re_counts = $("#re_counts");
		var $or_old_price = $("#or_old_price");
		var $reduce_amount = $("#reduce-amount");
		var $or_express = $("#or_express");
		var $or_pay = $("#or_pay");

		var $img = $('<img width="120" height="160" class="media-object" src="'
				+ this.order.orderInfo.RESOURCE_PIC + '" />');

		$re_img.append($img);

		$re_name.text('[' + this.order.THIRD_NAME + ']'
				+ this.order.orderInfo.RESOURCE_NAME);
		$re_venue.text(this.order.orderInfo.VENUE_NAME);
		$re_time.text(this.order.orderInfo.SITE_TIME);
		$re_counts.text(this.order.orderInfo.TICKET_REAL_COUNTS);
		$or_old_price.text(this.order.orderInfo.TOTAL_PRICE + "元");
		$reduce_amount.text("0元");
		$or_express.text("0元");
		$or_pay.text(this.order.orderInfo.TOTAL_PRICE);
		
		this.updateReceiveTypes(this.order.receiveType);
	},

	receiveTypes : [],
	curReceiveType : null,
	updateReceiveTypes : function(receiveTypes) {
		this.receiveTypes = receiveTypes;
		this.updateReceiveTypesView();
	},
	updateReceiveTypesView : function() {
		var $receive_types = $("#receive_types");
		$receive_types.empty();

		for (var i = 0; i < this.receiveTypes.length; i++) {
			var $item = $('<div class="col-md-4 way3" id="receive_types"></div>');
			var $item_img = $('<img class="deliveryMethod" id="delivery-method-pic-3" value="3" src="static/images/sign/way3.png">');
			$item.append($item_img);

			$receive_types.append($item);
			if (!this.curReceiveType) {
				this.curReceiveType = this.receiveTypes[0];
			}
		}
	},

	provinces : [],
	curPro:null,
	updataProvinces : function(provinces) {
		this.provinces = provinces;
		this.updateProvincesView();
	},
	updateProvincesView : function() {

		var $province = $("#province");
		var $default = $('<option value="" selected>省/市直辖市</option>');

		$province.empty();

		$province.append($default);

		for (var i = 0; i < this.provinces.length; i++) {
			var $item = $('<option value="' + this.provinces[i].prov_value
					+ '">' + this.provinces[i].prov_name + '</option>');
			$province.append($item);
		}

		this.curPro = null;
		this.curCity = null;
		this.curArea = null;
		
		$('#province').selectpicker({});

	},

	citys : [],
	curCity:null,
	updataCitys : function(citys) {
		this.citys = citys;
		this.updateCitysView();
	},
	updateCitysView : function() {

		var $citys = $("#city");
		var $default = $('<option selected>城市</option>');

		$citys.empty();

		$citys.append($default);

		for (var i = 0; i < this.citys.length; i++) {
			var $item = $('<option value="' + this.citys[i].city_value + '">'
					+ this.citys[i].city_name + '</option>');
			$citys.append($item);
		}
		
		this.curCity = null;
		this.curArea = null;
		
		$('#city').selectpicker({});

	},

	areas : [],
	curArea:null,
	updateAreas : function(areas) {
		this.areas = areas;
		this.updateAreaView();
	},
	updateAreaView : function() {

		var $area = $("#area");
		var $default = $('<option selected>区/县</option>');

		$area.empty();

		$area.append($default);

		for (var i = 0; i < this.areas.length; i++) {
			var $item = $('<option value="' + this.areas[i].area_value + '">'
					+ this.areas[i].area_name + '</option>');
			$area.append($item);
		}

		this.curArea = null;
		$('#area').selectpicker({});

	},

	getOptionList : function(topValue, secValue, thirdValue) {

		var curPro = null;
		var curCity = null;
		var curArea = null;
		
		for (var i = 0; i < this.provinces.length; i++) {
			if (topValue == this.provinces[i].prov_value) {
				curPro = this.provinces[i];
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

					this.curPro = curPro;
					this.curCity = curCity;
					this.curArea = curArea;
					
					createOrderParams.province = this.curPro.prov_name;
					createOrderParams.city = this.curCity.city_name;
					createOrderParams.area = this.curArea.area_name;
					
					return curArea;
				} else {
					
					this.curPro = curPro;
					this.curCity = curCity;
					this.curArea = null;
					
					createOrderParams.province = this.curPro.prov_name;
					createOrderParams.city = this.curCity.city_name;
					createOrderParams.area = null;
					
					return curCity.areaList;
				}
				
			} else {
				this.curPro = curPro;
				this.curCity = null;
				this.curArea = null;
				
				createOrderParams.province = this.curPro.prov_name;
				createOrderParams.city = null;
				createOrderParams.area = null;
				
				return curPro.cityList;
			}
			
		} else {
			
			this.curPro = null;
			this.curCity = null;
			this.curArea = null;
			
			createOrderParams.province = null;
			createOrderParams.city = null;
			createOrderParams.area = null;
			
			return [];
		}

	}
};
