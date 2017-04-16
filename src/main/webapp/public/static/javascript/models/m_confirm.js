
var m_confirm = {
	
	order:{},
	updateOrder:function(order){
		this.order = order;
		this.updateOrderView();
	},
	updateOrderView:function(){
		var $re_img = $("#re_img");
		var $re_name = $("#re_name");
		var $re_venue = $("#re_venue");
		var $re_time = $("#re_time");
		var $re_counts = $("#re_counts");
		var $or_old_price = $("#or_old_price");
		var $reduce_amount = $("#reduce-amount");
		var $or_express = $("#or_express");
		var $or_pay = $("#or_pay");
		
		var $img = $('<img width="120" height="160" class="media-object" src="'+this.order.orderInfo.RESOURCE_PIC+'" />');
		
		$re_img.append($img);
		
		$re_name.text('['+this.order.THIRD_NAME+']'+this.order.orderInfo.RESOURCE_NAME);
		$re_venue.text(this.order.orderInfo.VENUE_NAME);
		$re_time.text(this.order.orderInfo.SITE_TIME);
		$re_counts.text(this.order.orderInfo.TICKET_REAL_COUNTS);
		$or_old_price.text(this.order.orderInfo.TOTAL_PRICE+"元");
		$reduce_amount.text("0元");
		$or_express.text("0元");
		$or_pay.text(this.order.orderInfo.TOTAL_PRICE);
	},

	receiveTypes:[],
	curReceiveType:null,
	updateReceiveTypes:function(receiveTypes){
		this.receiveTypes = receiveTypes;
		this.updateReceiveTypesView();
	},
	updateReceiveTypesView:function(){
		var $receive_types = $("#receive_types");
		$receive_types.empty();
		
		for(var i = 0;i<this.receiveTypes.length;i++){
			var $item = $('<div class="col-md-4 way3" id="receive_types"></div>');
			var $item_img = $('<img class="deliveryMethod" id="delivery-method-pic-3" value="3" src="static/images/sign/way3.png">');
			$item.append($item_img);
			
			$receive_types.append($item);
			if(!this.curReceiveType){
				this.curReceiveType = this.receiveTypes[0];
			}
		}
	},
	
	provinces:[],
	updataProvinces:function(provinces){
		this.provinces = provinces;
		this.updateProvincesView();
	},
	updateProvincesView:function(){
		
		var $province = $("#province");
		var $default = $('<option selected>省/市直辖市</option>');
		
		$province.empty();
		
		$province.append($default);
		
		for(var i = 0;i<this.provinces.length;i++){
			var $item = $('<option value="'+this.provinces[i].prov_value+'">'+this.provinces[i].prov_name+'</option>');
			$province.append($item);
		}
		
		$('#province').selectpicker({});

	},
	
	citys:[],
	updataCitys:function(citys){
		this.citys = citys;
		this.updateCitysView();
	},
	updateCitysView:function(){
		
		var $citys = $("#city");
		var $default = $('<option selected>城市</option>');
		
		$citys.empty();
		
		$citys.append($default);
		
		for(var i = 0;i<this.provinces.length;i++){
			var $item = $('<option value="'+this.citys[i].city_value+'">'+this.citys[i].city_name+'</option>');
			$province.append($item);
		}
		
		$('#city').selectpicker({});

	},
	
	areas:[],
	updataAreas:function(areas){
		this.area = area;
		this.updateAreaView();
	},
	updateAreaView:function(){
		
		var $area = $("#area");
		var $default = $('<option selected>区/县</option>');
		
		$area.empty();
		
		$area.append($default);
		
		for(var i = 0;i<this.areas.length;i++){
			var $item = $('<option value="'+this.areas[i].area_value+'">'+this.areas[i].area_name+'</option>');
			$area.append($item);
		}
		
		$('#city').selectpicker({});

	}	
};
