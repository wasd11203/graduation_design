var m_home = {
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
				$advs_main_div_item.data("i",mainadv_counts);
				var $advs_main_div_item_a = $('<a href="javascript:void(0);"></a>');
				var $advs_main_div_item_a_img = $('<img src='+this.advertisingList[i].ADV_PIC+' alt="" />');
				
				$advs_main_div_item_a.append($advs_main_div_item_a_img);
				$advs_main_div_item.append($advs_main_div_item_a);
				$advs_main_div.append($advs_main_div_item);
				
				$advs_main_div_item.on("click",function(){
					
					var index = $(this).data("index");
					var i = $(this).data("i");
					
					m_home.curAdvertising = m_home.advertisingList[index];
					m_home.curAdvertising.index = i;
					resourceDetailParams.resourceId = m_home.curAdvertising.RESOURCE_ID;
					resourceDetailParams.regionThirdId = m_home.curAdvertising.THIRD_ID;
					
					// 清空内容页，并导入新页
					loadHtmlByPath("views/resource_detail.html");
					
					//alert("点击主要广告 搜索");
					return false;
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
					var index = $(this).data("index");
					
					m_home.curAdvertising = m_home.advertisingList[index];
					
					resourceDetailParams.resourceId = m_home.curAdvertising.RESOURCE_ID;
					resourceDetailParams.regionThirdId = m_home.curAdvertising.THIRD_ID;
					
					// 清空内容页，并导入新页
					loadHtmlByPath("views/resource_detail.html");
					
//					alert("点击辅助广告 搜索");
					return false;
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
				
				$ad_right_discount_top_a.data("index",i);
				$ad_right_discount_top_name_a.data("index",i);
				
				$ad_right_discount_top_a.append($ad_right_discount_top_a_img);
				
				$ad_right_discount_top_name_a.append($ad_right_discount_top_name_a_span);
				$ad_right_discount_top_name_a.append(this.discountList[i].RESOURCE_NAME);
				
				$ad_right_discount_top.append($ad_right_discount_top_h2);
				$ad_right_discount_top.append($ad_right_discount_top_a);
				$ad_right_discount_top.append( $("<p></p>") );
				$ad_right_discount_top.append($ad_right_discount_top_name_a);
				
				$ad_right_discount_top_a.on("click",function(){
					
					var index = $(this).data("index");
					
					var curClick = m_home.discountList[index];
					
					resourceDetailParams.resourceId = curClick.RESOURCE_ID;
					resourceDetailParams.regionThirdId = curClick.THIRD_ID;
					
					// 清空内容页，并导入新页
					loadHtmlByPath("views/resource_detail.html");
					
//					alert("特惠看--Top 搜索 ----图片 触发 搜索");
					return false;
				});
				
				$ad_right_discount_top_name_a.on("click",function(){
					
					var index = $(this).data("index");
					
					var curClick = m_home.discountList[index];
					
					resourceDetailParams.resourceId = curClick.RESOURCE_ID;
					resourceDetailParams.regionThirdId = curClick.THIRD_ID;
					
					// 清空内容页，并导入新页
					loadHtmlByPath("views/resource_detail.html");
					
//					alert("特惠看--Top 搜索 ----名称  触发 搜索");
					return false;
				});
				
			}else{
				
				var $ad_right_discount_bottom_ul_li = $('<li></li>');
				var $ad_right_discount_bottom_ul_li_a = $('<a href="javascript:void(0);"></a>');
				
				$ad_right_discount_bottom_ul_li.data("index",i);
				
				$ad_right_discount_bottom_ul_li_a.append('['+this.discountList[i].THIRD_NAME+']'+this.discountList[i].RESOURCE_NAME);
				$ad_right_discount_bottom_ul_li.append($ad_right_discount_bottom_ul_li_a);
				$ad_right_discount_bottom_ul.append($ad_right_discount_bottom_ul_li);
				
				$ad_right_discount_bottom_ul_li.on("click",function(){
					
					var index = $(this).data("index");
					
					var curClick = m_home.discountList[index];
					
					resourceDetailParams.resourceId = curClick.RESOURCE_ID;
					resourceDetailParams.regionThirdId = curClick.THIRD_ID;
					
					// 清空内容页，并导入新页
					loadHtmlByPath("views/resource_detail.html");
					
//					alert("特惠看--Bottom 搜索 ---- 名称 触发搜索");
					return false;
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
		for(var i = 0;i<this.recentHotList.length;i++){
			$hotList_item = $('<div class="col-md-3 col-xs-6"></div>');
			
			$hotList_item_a = $('<a href="javascript:void(0);"></a>');
			$hotList_item_a_img = $('<img width="190" src="'+this.recentHotList[i].RESOURCE_PIC+'" alt="">'); 
			
			$hotList_item_div = $('<div></div>');
			$hotList_item_div_a = $('<a href="javascript:void(0);">['+this.recentHotList[i].THIRD_NAME+']'+this.recentHotList[i].RESOURCE_NAME+'</a>');
			
			$hotList_item.data("index",i);
			
			$hotList_item_a.append($hotList_item_a_img);
			$hotList_item_div.append($hotList_item_div_a);
			
			$hotList_item.append($hotList_item_a);
			$hotList_item.append($hotList_item_div);
			$hotList.append($hotList_item);
			$hotList_item.on("click",function(){
				
				var index = $(this).data("index");
				
				var curClick = m_home.recentHotList[index];
				
				resourceDetailParams.resourceId = curClick.RESOURCE_ID;
				resourceDetailParams.regionThirdId = curClick.THIRD_ID;
				
				// 清空内容页，并导入新页
				loadHtmlByPath("views/resource_detail.html");
				
//				alert("近期热门  点击资源触发 搜索查看信息内容");
				return false;
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
		
		var latest_first = 0;
		var thematic_first = 0;
		
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
			
			var $item = $('<li></li>');
			var $item_a = $('<a href="javascript:void(0);"></a>');
			var $item_a_img = $('<img class="img-responsive" src="'+this.latestInfoList[i].LATEST_PIC+'" alt="">');
			var $item_a_div = $('<div>['+this.latestInfoList[i].THIRD_NAME+']'+this.latestInfoList[i].RESOURCE_NAME+'</div>');
			
			$item.data("index",i);
			
			if(this.latestInfoList[i].TYPE == 1){
				
				/**
				 * 在最新资讯列表中只有第一个资源有图
				 */
				if(latest_first==0){
					$item_a.append($item_a_img);
				}
				
				$item_a.append($item_a_div);
				$item.append($item_a);
				
				$latestInfo_ul.append($item);
				latest_first ++;
			}else{
				/**
				 * 在 精彩专题列表 中只有第一个资源有图
				 */
				if(thematic_first==0){
					$item_a.append($item_a_img);
				}
				
				$item_a.append($item_a_div);
				$item.append($item_a);
				
				$thematic_ul.append($item);
				thematic_first ++;
			}
			$item.on("click",function(){
				
				var index = $(this).data("index");
				
				var curClick = m_home.latestInfoList[index];
				
				resourceDetailParams.resourceId = curClick.RESOURCE_ID;
				resourceDetailParams.regionThirdId = curClick.THIRD_ID;
				
				// 清空内容页，并导入新页
				loadHtmlByPath("views/resource_detail.html");
				
//				alert("精彩资讯--点击资源触发 搜索查看信息内容");
				return false;
			});
			
		}

		$latestInfoAndThematic_div.append($latestInfo_ul);
		$latestInfoAndThematic_div.append($thematic_ul);
		
		$latestInfoAndThematic.append($latestInfoAndThematic_ul);
		$latestInfoAndThematic.append($latestInfoAndThematic_div);
	},
	
	resourceSecNav:[],
	curResourceSec:null,
	updateResourceSecNav:function(resourceSecNav){
		this.resourceSecNav = resourceSecNav;
		this.updateResourceSecNavView();
	},
	updateResourceSecNavView:function(){
		
		var $cateListContainer_bar = $('#resourceSecNavBar');
		var $cateListContainer_bar_containter = $('<div class="container"></div>');
		var $cateListContainer_bar_containter_ul = $('<ul class="venuebar nav navbar-nav navbar-left"></ul>');
		
		$cateListContainer_bar.empty();
		
		$cateListContainer_bar_containter.append($cateListContainer_bar_containter_ul);
		$cateListContainer_bar.append($cateListContainer_bar_containter);
		
		for(var i = 0;i<this.resourceSecNav.length;i++){
			var $cateListContainer_bar_containter_ul_li = $('<li></li>');
			var $cateListContainer_bar_containter_ul_li_a = $('<a href="javascript:void(0);">'+this.resourceSecNav[i].secName+'</a>');
			
			$cateListContainer_bar_containter_ul_li.data("index",i);
			
			if(this.curResourceSec){
				if(this.resourceSecNav[i].secId == this.curResourceSec.secId){
					$cateListContainer_bar_containter_ul_li.addClass("active").siblings().removeClass("active");
				}
			}else{
				if(i == 0){
					$cateListContainer_bar_containter_ul_li.addClass("active").siblings().removeClass("active");
					this.curResourceSec = this.resourceSecNav[i];
				}
			}

			$cateListContainer_bar_containter_ul_li.append($cateListContainer_bar_containter_ul_li_a);
			$cateListContainer_bar_containter_ul.append($cateListContainer_bar_containter_ul_li);
			
			$cateListContainer_bar_containter_ul_li.on("click",function(){
//				alert("搜索前8个资源");
				var index = $(this).data("index");
				
				m_home.curResourceSec = m_home.resourceSecNav[index];
				m_home.updateResourceSecNavView();
				
			});
		}
		
		$cateListContainer_bar_containter_ul.append("<li>a</li>");
		$cateListContainer_bar_containter.append($cateListContainer_bar_containter_ul);
		$cateListContainer_bar.append($cateListContainer_bar_containter);
		
		/**
		 * 每次切换 二级类别时刷新 资源列表
		 */
		loadRoughlyResourceListAction(m_header.curResourceNavTop.TOP_ID,m_home.curResourceSec.secId)
	},
	
	cateList:[],
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
			
			var $item_div_dl_a_img = $('<img class="img-responsive" src="'+this.cateList[i].RESOURCE_PIC+'" />');
			var $item_div_dl_a_div = $('<div class="buy-btn">立即购买</div>');
			var $item_div_dl_a_dt = $('<dt>['+this.cateList[i].THIRD_NAME+']'+this.cateList[i].RESOURCE_NAME+'</dt>');
			var $item_div_dl_a_dd = $('<dd></dd>');
			var $item_div_dl_a_dd_p = $('<p></p>');
			var $item_div_dl_a_dd_p_span = $('<span class="price">'+this.cateList[i].MIN_PRICE+'</span><span>元起</span>');
			
			$item_div.data("index",i);
			
			$item_div_dl_a_dd_p.append($item_div_dl_a_dd_p_span);
			$item_div_dl_a_dd.append($item_div_dl_a_dd_p);

			$item_div_dl_a.append($item_div_dl_a_img);
			$item_div_dl_a.append($item_div_dl_a_div);
			$item_div_dl_a.append($item_div_dl_a_dt);
			$item_div_dl_a.append($item_div_dl_a_dd);
			
			$item_div_dl.append($item_div_dl_a);
			$item_div.append($item_div_dl);
			
			$cateListContainer_cate_div.append($item_div);
			
			$item_div.on('mouseenter',function () {
//				alert("滑入");
		        $(this).find('.buy-btn').fadeIn(500).siblings().find('.buy-btn').fadeOut(500);
		    });
			$item_div.on('mouseleave',function () {
//				alert("滑出");
				$(this).find('.buy-btn').fadeOut(500).siblings().find('.buy-btn').fadeOut(500);
		    });
			
//			$item_div_dl_a_div.on("click",function(){
//				alert("立即购买");
//				
//				return false;
//			});
			$item_div.on("click",function(){
				var index = $(this).data("index");
				
				var curClick = m_home.cateList[index];
				
				resourceDetailParams.resourceId = curClick.RESOURCE_ID;
				resourceDetailParams.regionThirdId = curClick.THIRD_ID;
				
				// 清空内容页，并导入新页
				loadHtmlByPath("views/resource_detail.html");
				
//				alert("查看详细");
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
				
				$item_resource.data("i",i);
				$item_resource.data("j",j);
				
				$item_resource.append($item_resource_a);
				
				$item_div_venue_resource_container.append($item_resource);
				
				$item_resource.on("click",function(){

					var i = $(this).data("i");
					var j = $(this).data("j");
					
					var curClick = m_home.venueList[i].resourceList[j];
					
					resourceDetailParams.resourceId = curClick.RESOURCE_ID;
					resourceDetailParams.regionThirdId = curClick.THIRD_ID;
					
					// 清空内容页，并导入新页
					loadHtmlByPath("views/resource_detail.html");
					
//					alert("资源详细信息");
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
			
			$item_div_venue.on('mouseover',function () {
				$(this).find(".venue-detail-container").animate({bottom:'0px'},{ queue: false });
			});
			$item_div_venue.on('mouseout',function () {
				$(this).find(".venue-detail-container").animate({bottom:'-56px'},{ queue: false });
			});
			
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
			
			$hotSell_container_li.data("index",i);
			
			if(i==0){
				$hotSell_container_li.addClass("cd");
				var $li_first = $('<a href="javascript:void(0);"></a>');
				var $li_first_div = $('<div class="row "></div>');
				
				var $li_first_div_div = $('<div class="pic col-md-3 "></div>');
				var $li_first_div_div_img = $('<img src="'+this.hotSellList[i].RESOURCE_PIC+' " width="79px" height="108px" />');
				
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
//				alert("资源详细");
				var index = $(this).data("index");
				
				var curClick = m_home.hotSellList[index];
				
				resourceDetailParams.resourceId = curClick.RESOURCE_ID;
				resourceDetailParams.regionThirdId = curClick.THIRD_ID;
				
				// 清空内容页，并导入新页
				loadHtmlByPath("views/resource_detail.html");
				
//				alert("资源详细信息");
				return false;
			});
		}
		
	},
	
	calendarList:[],
	selectedDate:new Date(),
	updateCalendarList:function(calendarList){
		this.calendarList = calendarList;
		this.updateCalendarListView();
	},
	updateCalendarListView:function(){
		var $listTotal = $("#totalCounts"); 
		var $list_all = $listTotal.parent();
		
		$list_all.find(".data-items").remove();
		
		for(var i = 0;i<this.calendarList.length;i++){
			var $list_item = $('<li class="data-items row"></li>');
			
			var $list_item_a = $('<a href="javascript:void(0);" class="col-xs-4"></a>');
			var $list_item_a_img = $('<img src="'+this.calendarList[i].RESOURCE_PIC+'" alt="" width="80px" height="106px">');
			
			var $list_item_ul = $('<ul class="col-xs-8"></ul>');
			var $list_item_ul_li_name = $('<li></li>');
			var $list_item_ul_li_name_a = $('<a href="javascript:void(0);">['+this.calendarList[i].THIRD_NAME+']'+this.calendarList[i].RESOURCE_NAME+'</a>');
			
			var $list_item_ul_li_time = $('<li>'+this.calendarList[i].MIN_Time+'</li>');
			var $list_item_ul_li_venue = $('<li>'+this.calendarList[i].VENUE_NAME+'</li>');
			var $list_item_ul_li_price = $('<li><span>'+this.calendarList[i].MIN_PRICE+'</span>元起</li>');
			
			$list_item.data("index",i);
			
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
				var index = $(this).data("index");
				
				var curClick = m_home.calendarList[index];
				
				resourceDetailParams.resourceId = curClick.RESOURCE_ID;
				resourceDetailParams.regionThirdId = curClick.THIRD_ID;
				
				// 清空内容页，并导入新页
				loadHtmlByPath("views/resource_detail.html");
				
//				alert("资源详细信息");
				return false;
			});
		}
		
	},
	updateSelectedDate:function(selectedDate){
		this.selectedDate = selectedDate;
		var minTime = new Date(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),this.selectedDate.getDate(),0,0,0);
        var maxTime = new Date(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),this.selectedDate.getDate(),23,59,59);
        loadResourceByTime(minTime,maxTime);
	}
	
};




