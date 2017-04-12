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
		var $ad_right_discount_bottom_ul = $('<ul></ul>');
		
		$ad_right_discount.empty();
		for(var i = 0;i<this.discountList.length;i++){
			
			if(this.discountList[i].DISCOUNT_PIC){
				var $ad_right_discount_top_h2 = $('<h2>特惠看</h2>');
				var $ad_right_discount_top_a = $('<a href="javascript:void(0);"></a>');
				var $ad_right_discount_top_a_img = $('<img class="img-responsive" src="'+this.discountList[i].DISCOUNT_PIC+'">');
				
				var $ad_right_discount_top_name_a = $('<a href="javascript:void(0);"></a>');
				var $ad_right_discount_top_name_a_span = $('<span></span>');
				
				$ad_right_discount_top_a.append($ad_right_discount_top_a_img);
				
				$ad_right_discount_top_name_a.append($ad_right_discount_top_name_a_span);
				$ad_right_discount_top_name_a.append(this.discountList[i].RESOURCE_NAME);
				
				$ad_right_discount_top.append($ad_right_discount_top_h2);
				$ad_right_discount_top.append($ad_right_discount_top_a);
				$ad_right_discount_top.append( $("<p></p>") );
				$ad_right_discount_top.append($ad_right_discount_top_name_a);
				
				$ad_right_discount_top_a.on("click",function(){
					alert("特惠看--Top 搜索");
				});
				$ad_right_discount_top_name_a.on("click",function(){
					alert("特惠看--Top_a 搜索");
				});
				
			}else{
				
				var $ad_right_discount_bottom_ul_li = $('<li></li>');
				var $ad_right_discount_bottom_ul_li_a = $('<a href="javascript:void(0);"></a>');
				
				$ad_right_discount_bottom_ul_li_a.append('['+this.discountList[i].THIRD_NAME+']'+this.discountList[i].RESOURCE_NAME);
				$ad_right_discount_bottom_ul_li.append($ad_right_discount_bottom_ul_li_a);
				$ad_right_discount_bottom_ul.append($ad_right_discount_bottom_ul_li);
				
				$ad_right_discount_bottom_ul_li.on("click",function(){
					alert("特惠看--Bottom 搜索");
				});
			}
		}
		
		$ad_right_discount_bottom.append($ad_right_discount_bottom_ul);
		
		$ad_right_discount.append($ad_right_discount_top);
		$ad_right_discount.append($("<hr>"));
		$ad_right_discount.append($ad_right_discount_bottom);
	},
	
	recentHotList:[],
	updateRecentHotList:function(recentHotList){
		this.recentHotList = recentHotList;
		this.updateRecentHotListView();
	},
	updateRecentHotListView:function(){
		var $hotList = $("#hotsort");
		$hotList.empty();
		for(var i = 0;i<4;i++){
			$hotList_item = $('<div class="col-md-3 col-xs-6"></div>');
			
			$hotList_item_a = $('<a href="javascript:void(0);"></a>');
			$hotList_item_a_img = $('<img width="190" src="static/images/hot_1.jpg" alt="">'); 
			
			$hotList_item_div = $('<div></div>');
			$hotList_item_div_a = $('<a href="javascript:void(0);">[上海]两只狗的生活意见</a>');
			
			$hotList_item_a.append($hotList_item_a_img);
			$hotList_item_div.append($hotList_item_div_a);
			
			$hotList_item.append($hotList_item_a);
			$hotList_item.append($hotList_item_div);
			$hotList.append($hotList_item);
			$hotList_item.on("click",function(){
				alert("查看详细内容");
			});
		}
		
	},
	
	latestInfoList:[],
	updateLatestInfoList:function(latestInfoList){
		this.latestInfoList = latestInfoList;
		this.updateLatestInfoListView();
	},
	updateLatestInfoListView:function(){
		
		var $latestInfoAndThematic = $("#latestInfoAndThematic");
		var $latestInfoAndThematic_ul = $('<ul class="row"></ul>');
		var $latestInfoAndThematic_div = $('<div class="news"></div>');
		var $latestInfo_ul = $("<ul></ul>");
		var $thematic_ul = $('<ul class="unchoseed"></ul>');
		
		$latestInfoAndThematic.empty();
		
		for(var i = 0 ;i < 2 ;i++){
			
			var $latestInfoAndThematic_ul_li = $('<li class="col-md-6 col-xs-12"></li>');
			var $latestInfoAndThematic_ul_li_a = $('<a href="javascript:void(0);"></a>');
			
			if(i == 0){
				$latestInfoAndThematic_ul_li_a.append("最新资讯");
			}else{
				$latestInfoAndThematic_ul_li_a.append("精彩专题");
			}
			$latestInfoAndThematic_ul_li.data("index",i);
			$latestInfoAndThematic_ul_li.append($latestInfoAndThematic_ul_li_a);
			$latestInfoAndThematic_ul.append($latestInfoAndThematic_ul_li);
			
			$latestInfoAndThematic_ul_li.on("click",function(e){
				e.preventDefault();
		        var i=$(this).data("index");
		        $('.news>ul').eq(i).show().siblings().hide();
			});
		}
		
		for(var i = 0;i<this.latestInfoList.length;i++){
			var $latestInfo_ul_li = $('<li></li>');
			var $latestInfo_ul_li_a = $('<a href="javascript:void(0);"></a>');
			var $latestInfo_ul_li_a_img = $('<img class="img-responsive" src="'+this.latestInfoList[i].LATEST_PIC+'" alt="">');
			var $latestInfo_ul_li_a_div = $('<div>['+this.latestInfoList[i].THIRD_NAME+']'+this.latestInfoList[i].RESOURCE_NAME+'</div>');
			
			$latestInfo_ul_li_a.append($latestInfo_ul_li_a_img);
			$latestInfo_ul_li_a.append($latestInfo_ul_li_a_div);
			$latestInfo_ul_li.append($latestInfo_ul_li_a);
			
			$latestInfo_ul.append($latestInfo_ul_li);
			$latestInfo_ul_li.on("click",function(){
				alert("最新资讯搜索");
			});
		}
		
		$thematic_ul.append($('<li>'+
							  '	<a href="javascript:void(0);">'+
							  '		<img class="img-responsive" src="static/images/yanchanghui.jpg" alt="">'+
						      '		<div>到乌镇，邂逅文艺</div>'+
							  ' </a>'+
							  '</li>'));
		
		$latestInfoAndThematic_div.append($latestInfo_ul);
		$latestInfoAndThematic_div.append($thematic_ul);
		
		$latestInfoAndThematic.append($latestInfoAndThematic_ul);
		$latestInfoAndThematic.append($latestInfoAndThematic_div);
	},
	
	resourceSecNav:[],
	updateResourceSecNav:function(resourceSecNav){
		this.resourceSecNav = resourceSecNav;
		this.updateResourceSecNavView();
	},
	updateResourceSecNavView:function(){
		
		var $cateListContainer_bar = $('#resourceSecNavBar');
		var $cateListContainer_bar_containter = $('<div class="container"></div>');
		var $cateListContainer_bar_containter_ul = $('<ul class="venuebar nav navbar-nav navbar-left"></ul>');
		
		$cateListContainer_bar_containter.append($cateListContainer_bar_containter_ul);
		$cateListContainer_bar.append($cateListContainer_bar_containter);
		
		for(var i = 0;i<this.resourceSecNav.length;i++){
			var $cateListContainer_bar_containter_ul_li = $('<li></li>');
			var $cateListContainer_bar_containter_ul_li_a = $('<a href="javascript:void(0);">'+this.resourceSecNav[i].secName+'</a>');
			
			if(this.currCate){
				if(ResourceSecNav[i].secId = this.currCate.secId){
					$cateListContainer_bar_containter_ul_li.addClass("active").siblings().removeClass("active");
				}
			}else{
				if(i == 0){
					$cateListContainer_bar_containter_ul_li.addClass("active").siblings().removeClass("active");
				}
			}

			$cateListContainer_bar_containter_ul_li.append($cateListContainer_bar_containter_ul_li_a);
			$cateListContainer_bar_containter_ul.append($cateListContainer_bar_containter_ul_li);
			
			$cateListContainer_bar_containter_ul_li.on("click",function(){
				alert("查询 前8个资源");
			});
		}
		$cateListContainer_bar_containter.append($cateListContainer_bar_containter_ul);
		$cateListContainer_bar.append($cateListContainer_bar_containter);
		
	},
	
	cateList:[],
	currCate:null,
	updateCateList:function(cateList){
		this.cateList = cateList;
		this.updateCateListView();
	},
	updateCateListView:function(){
		
		var $cateListContainer_cate_div = $('#cate-item-list-container');
		
		$cateListContainer_cate_div.empty();
		
		for(var i = 0 ;i<this.cateList.length;i++){
			var $item_div = $('<div class="col-md-3 col-sm-3 col-xs-12"></div>');
			var $item_div_dl = $('<dl></dl>');
			var $item_div_dl_a = $('<a href="javascript:void(0);"></a>');
			
			var $item_div_dl_a_img = $('<img class="img-responsive" src="static/images/sing_1.jpg" />');
			var $item_div_dl_a_div = $('<div class="buy-btn">立即购买</div>');
			var $item_div_dl_a_dt = $('<dt>[上海]2016 JZ Festival第十二届爵士上海音乐节</dt>');
			var $item_div_dl_a_dd = $('<dd></dd>');
			var $item_div_dl_a_dd_p = $('<p></p>');
			var $item_div_dl_a_dd_p_span = $('<span class="price">260</span><span>元起</span>');
			
			$item_div_dl_a_dd_p.append($item_div_dl_a_dd_p_span);
			$item_div_dl_a_dd.append($item_div_dl_a_dd_p);

			$item_div_dl_a.append($item_div_dl_a_img);
			$item_div_dl_a.append($item_div_dl_a_div);
			$item_div_dl_a.append($item_div_dl_a_dt);
			$item_div_dl_a.append($item_div_dl_a_dd);
			
			$item_div_dl.append($item_div_dl_a);
			$item_div.append($item_div_dl);
			
			$cateListContainer_cate_div.append($item_div);
			
			$item_div_dl_a_div.on("click",function(){
				alert("立即购买");
				
				return false;
			});
			$item_div.on("click",function(){
				alert("查看详细");
				
				return false;
			});
			
		}
	},
	
	venueList : [],
	updateVenueList:function(venueList){
		this.venueList = venueList;
		this.updateVenueListView();
	},
	updateVenueListView:function(){
		var $venue_item_container = $("#venue-item-list-container");
		var $venue_item_container_div = $('<div class="col-md-12"></div>');
		var $venue_item_container_div_div = $('<div class="row"></div>');
		
		var $venue_item_container_bar = $('<div class="col-xs-12"></div>');
		var $venue_item_container_bar_ul = $('<ul class="place"></ul>');
		var $venue_item_container_bar_ul_li_title = $('<li>场馆推荐</li>');
		var $venue_item_container_bar_ul_li_link = $('<li><a href="javascript:void(0);">全部场馆&gt;&gt;</a></li>');
		
		var $venue_item_container_items = $('<div class="col-xs-12"></div>');
		var $venue_item_container_items_div = $('<div id="hall" class="row "></div>');
		
		$venue_item_container.empty();
		
		/**
		 * 推荐场馆的标题
		 */
		$venue_item_container_bar_ul.append($venue_item_container_bar_ul_li_title);
		$venue_item_container_bar_ul.append($venue_item_container_bar_ul_li_link);
		$venue_item_container_bar.append($venue_item_container_bar_ul);
		
		$venue_item_container_bar_ul_li_link.on("click",function(){
			alert("查看全部场馆");
		});
		
		for(var i = 0;i<this.venueList.length;i++){
			
			var $item = $('<div class="col-md-6 col-xs-12 "></div>');
			var $item_div_venue = $('<div class="where"></div>');
			var $item_div_venue_img = $('<a href="javascript:void(0);"><img src="static/images/place_2.jpg " /></a>');
			var $item_div_venue_info = $('<div class="venue-detail-container"></div>');
			var $item_div_venue_info_name = $('<div class="venue-title">'+this.venueList[i].VENUE_NAME+'</div>');
			var $item_div_venue_info_address = $('<div>地址：'+this.venueList[i].VENUE_ADDRESS+'</div>');
			var $item_div_venue_info_phone = $('<div>电话：'+this.venueList[i].VENUE_PHONE+'</div>');
			
			var $item_div_venue_resource_container = $('<div class="text"></div>');
			var $item_div_venue_resource_container_title = $('<p>近期演出</p>');
			
			$item_div_venue_resource_container.append($item_div_venue_resource_container_title);
			
			for(var j = 0 ;j<this.venueList[i].resourceList.length;j++){
				var $item_resource = $('<p></p>');
				var $item_resource_a = $('<a href="javascript:void(0);">['+this.venueList[i].resourceList[j].THIRD_NAME+']'+this.venueList[i].resourceList[j].RESOURCE_NAME+'</a>');
				
				$item_resource.append($item_resource_a);
				
				$item_div_venue_resource_container.append($item_resource);
				
				$item_resource.on("click",function(){
					alert("资源详细信息");
					
					return false;
				});
				
			}
			
			$item_div_venue_info.append($item_div_venue_info_name);
			$item_div_venue_info.append($item_div_venue_info_address);
			$item_div_venue_info.append($item_div_venue_info_phone);
			
			$item_div_venue.append($item_div_venue_img);
			$item_div_venue.append($item_div_venue_info);
			
			$item.append($item_div_venue);
			$item.append($item_div_venue_resource_container);
			
			$venue_item_container_items_div.append($item);
			
			$item_div_venue_img.on("click",function(){
				alert("查看场馆");
				return false;
			});
		}
		
		$venue_item_container_items.append($venue_item_container_items_div);
		
		$venue_item_container_div_div.append($venue_item_container_bar);
		$venue_item_container_div_div.append($venue_item_container_items);
		
		$venue_item_container_div.append($venue_item_container_div_div);
		$venue_item_container.append($venue_item_container_div);
		
	},
	
	hotSellList:[],
	updateHotSellList:function(hotSellList){
		this.hotSellList = hotSellList;
		this.updateHotSellListView();
	},
	updateHotSellListView:function(){
		
		var $hotSell_container_ul = $("#hotSell");
		var $hotSell_container_title = $('<li class="hot col-xs-12">热销榜单</li>');
		
		$hotSell_container_ul.empty();
		
		$hotSell_container_ul.append($hotSell_container_title);
		
		for(var i = 0;i<this.hotSellList.length;i++){
			
			var $hotSell_container_li = $('<li class="all col-xs-12" ></li>');
			
			if(i==0){
				$hotSell_container_li.addClass("cd");
				var $li_first = $('<a href="javascript:void(0);"></a>');
				var $li_first_div = $('<div class="row "></div>');
				
				var $li_first_div_div = $('<div class="pic col-md-3 "></div>');
				var $li_first_div_div_img = $('<img src="'+this.hotSellList[i].RESOURCE_PIC+' " />');
				
				var $li_first_info = $('<div class="col-md-9 hidden-xs"></div>');
				var $li_first_info_name = $('<p>['+this.hotSellList[i].THIRD_NAME+']'+this.hotSellList[i].RESOURCE_NAME+'</p>');
				var $li_first_info_playTime = $('<p>'+this.hotSellList[i].SITE_TIME+'</p>');
				var $li_first_info_venue = $('<p>'+this.hotSellList[i].VENUE_NAME+'</p>');
				var $li_first_info_price = $('<p><span class="num">'+this.hotSellList[i].MIN_PRICE+'</span><span>元起</span></p>');
				
				$li_first_info.append($li_first_info_name);
				$li_first_info.append($li_first_info_playTime);
				$li_first_info.append($li_first_info_venue);
				$li_first_info.append($li_first_info_price);
				
				$li_first_div_div.append($li_first_div_div_img);
				
				$li_first_div.append($li_first_div_div);
				$li_first_div.append($li_first_info);
				
				$li_first.append($li_first_div);
				
				$hotSell_container_li.append($li_first);
				
			}else{
				var $hotSell_container_li_a = $('<a href="javascript:void(0);">['+this.hotSellList[i].THIRD_NAME+']'+this.hotSellList[i].RESOURCE_NAME+'</a>');
				$hotSell_container_li.append($hotSell_container_li_a);
			}
			
			$hotSell_container_ul.append($hotSell_container_li);

			$hotSell_container_li.on("click",function(e){
				alert("资源详细");
				
				return false;
			});
		}
		
	},
	
	calendarList:[],
	updateCalendarList:function(calendarList){
		this.calendarList = calendarList;
		this.updateCalendarListView();
	},
	updateCalendarListView:function(){
		var $listTotal = $("#totalCounts"); 
		var $list_all = $listTotal.parent();
		
		$list_all.find(".data-items").remove();
		
		for(var i = 0;i<4;i++){
			var $list_item = $('<li class="data-items row"></li>');
			
			var $list_item_a = $('<a href="javascript:void(0);" class="col-xs-4"></a>');
			var $list_item_a_img = $('<img src="static/images/hot_2.jpg" alt="">');
			
			var $list_item_ul = $('<ul class="col-xs-8"></ul>');
			var $list_item_ul_li_name = $('<li></li>');
			var $list_item_ul_li_name_a = $('<a href="javascript:void(0);">[上海]大鸭软陶屋</a>');
			
			var $list_item_ul_li_time = $('<li>2016年8月22日~2018年4月30日</li>');
			var $list_item_ul_li_venue = $('<li>【大鸭软陶屋静安寺店】</li>');
			var $list_item_ul_li_price = $('<li><span>39</span>元起</li>');
			
			$list_item_a.append($list_item_a_img);
			
			$list_item_ul_li_name.append($list_item_ul_li_name_a);
			
			$list_item_ul.append($list_item_ul_li_name);
			$list_item_ul.append($list_item_ul_li_time);
			$list_item_ul.append($list_item_ul_li_venue);
			$list_item_ul.append($list_item_ul_li_price);
			
			$list_item.append($list_item_a);
			$list_item.append($list_item_ul);
			
			$list_all.append($list_item);
			$list_item.on("click",function(){
				alert("查看详细");
			});
		}
		
	}
	
	
};




