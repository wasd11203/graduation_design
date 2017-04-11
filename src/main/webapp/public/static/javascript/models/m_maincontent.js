var m_maincontent = {
	advertisingList:[],
	curAdvertising:null,
	updateAdvertising:function(advertisingList){		
		this.advertisingList = advertisingList;
		this.updateAdvertisingView();
	},
	updateAdvertisingView:function(){
		
		var $advs_main = $("#advs");
		var $advs_main_div = $('<div class="carousel-inner"></div>');
		
		var $adv_isNotTop = $("#adv_isNotTop");
		
		$adv_isNotTop.empty();
		$advs_main.empty();
		var mainadv_counts = 0;
		for(var i = 0;i<this.advertisingList.length;i++){
			
			if(this.advertisingList[i].ISTOP == 1){
				var $advs_main_div_item = $('<div class="item"></div>');
				$advs_main_div_item.data("index",i);
				var $advs_main_div_item_a = $('<a href="javascript:void(0);"></a>');
				var $advs_main_div_item_a_img = $('<img src='+this.advertisingList[i].ADV_PIC+' alt="" />');
				
				$advs_main_div_item_a.append($advs_main_div_item_a_img);
				$advs_main_div_item.append($advs_main_div_item_a);
				$advs_main_div.append($advs_main_div_item);
				
				$advs_main_div_item.on("click",function(){
					alert("点击主要广告 搜索");
				});
				
				if(this.curAdvertising){
					if(this.advertisingList[i].ADV_ID = this.curAdvertising.ADV_ID){
						$advs_main_div_item.addClass("active").siblings().removeClass("active");
					}
				}else{
					if(mainadv_counts==0){
						this.curAdvertising = this.advertisingList[0];
						this.curAdvertising.index = 0;
						$advs_main_div_item.addClass("active").siblings().removeClass("active");
					}
				}
				
				mainadv_counts ++;
			}else{
				var $adv_isNotTop_a = $('<a href="javascript:void(0);"></a>');
				$adv_isNotTop_a.data("index",i);
				var $adv_isNotTop_a_img = $('<img class="img-responsive" src='+this.advertisingList[i].ADV_PIC+' alt="" />');
				
				$adv_isNotTop_a.append($adv_isNotTop_a_img);
				$adv_isNotTop.append($adv_isNotTop_a);
				
				$adv_isNotTop_a.on("click",function(){
					alert("点击辅助广告 搜索");
				});
			}
			
		}
		
		var $preBtn = $('<a data-slide="prev" class="carousel-control left" href="#advs"></a>');
		var $preBtn_span = $('<span class="glyphicon glyphicon-chevron-left"></span>');
		$preBtn.append($preBtn_span);
		
		var $nextBtn = $('<a data-slide="next" class="carousel-control right" href="#advs"></a>');
		var $nextBtn_span = $('<span class="glyphicon glyphicon-chevron-right" ></span>');
		$nextBtn.append($nextBtn_span);
		
		var $carousel_indicators = $('<ul class="carousel-indicators"></ul>');
		var index = this.curAdvertising.index;
		
		for(var i = 0;i<mainadv_counts;i++){
			var $carousel_indicators_li = $('<li data-slide-to="'+i+'" data-target="#advs"></li>');
			if(i == index){
				$carousel_indicators_li.addClass("active").siblings().removeClass("active");
			}
			$carousel_indicators.append($carousel_indicators_li);
			
		}
		
		$advs_main.append($advs_main_div);
		$advs_main.append($preBtn);
		$advs_main.append($nextBtn);
		$advs_main.append($carousel_indicators);
		
	},
	
	discountList:[],
	updateDiscountList:function(discountList){
		this.discountList = discountList;
		this.updateDiscountListView();
	},
	updateDiscountListView:function(){
		var $ad_right_discount=$("#ad-container-right");
		var $ad_right_discount_top = $('<div class="adv-right-top"></div>');
		var $ad_right_discount_bottom = $('<div class="adv-right-bottom"></div>');
		
		for(var i = 0;i<this.discountList.length;i++){
			
			if(this.discountList[i].DISCOUNT_PIC){
				var $ad_right_discount_top_h2 = $('<h2>特惠看</h2>');
				var $ad_right_discount_top_a = $('<a href="javascript:void(0);"></a>');
				var $ad_right_discount_top_a_img = $('<img class="img-responsive" src="'+this.discountList[i].DISCOUNT_PIC+'">');
				$ad_right_discount_top_a.on("click",function(){
					alert("特惠看 搜索");
				});
				
				var $ad_right_discount_top_name_a = $('<a href="javascript:void(0);"></a>');
				var $ad_right_discount_top_name_a_span = $('<span></span>');
				
				$ad_right_discount_top_name_a.append($ad_right_discount_top_name_a_span);
				$ad_right_discount_top_name_a.append(this.discountList[i].RESOURCE_NAME);
				
				$ad_right_discount_top.append($ad_right_discount_top_h2);
				$ad_right_discount_top_a.append($ad_right_discount_top_a_img);
				$ad_right_discount_top.append($ad_right_discount_top_a);
				$ad_right_discount_top.append( $("<p></p>") );
				$ad_right_discount_top.append($ad_right_discount_top_name_a);
			}else{
				// todo discount bottom ... ...  
			}
			
		}
	
	}
	
};




