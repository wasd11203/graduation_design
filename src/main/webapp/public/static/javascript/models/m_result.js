
var minTimeDate = null;
var maxTimeDate = null;

var m_result = {

	cityList:[],
	curCity:null,
	updateCityList:function(cityList){
		this.cityList = cityList;
		this.updateCityListView();
	},
	updateCityListView:function(){
		var $cityList = $("#cityList");
		var $cityList_default = $('<li><a href="javascript:void(0);">全国 </a></li>');
		
		$cityList.empty();
		
		$cityList.append($cityList_default);
		
		if(!postParams.regionThirdId){
			$cityList_default.siblings().find("a").css({"color":"gray"});
			$cityList_default.find("a").css({"color":"#2ed2c1"});
			
			this.curCity = null;
		}
		
		for(var i = 0;i<this.cityList.length;i++){

			var $item_li = $("<li> </li>");
			var $item_li_a = $('<a href="javascript:void(0);"> </a>');
			
			$item_li.data("index",i);
			
			$item_li_a.append(this.cityList[i].thirdName);
			$item_li.append($item_li_a);
			
			if(postParams.regionThirdId && this.cityList[i].thirdId == postParams.regionThirdId){
				$item_li.siblings().find("a").css({"color":"gray"});
				$item_li.find("a").css({"color":"#2ed2c1"});
				
				this.curCity = this.cityList[i];
			}
			
			$cityList.append($item_li);
			
			$item_li.on("click",function(){
				$(this).siblings().find("a").css({"color":"gray"});
				$(this).find("a").css({"color":"#2ed2c1"});
				
				var i = $(this).data("index");
				m_result.curCity = m_result.cityList[i];
				
				postParams.keywords = null;
				postParams.regionThirdId = m_result.curCity.thirdId;
				postParams.curPage = 1;
				
				loadSearchresultList();
				
//				alert("重新搜索");
				return false;
			});
			
		}
		
		$cityList_default.on("click",function(){
			$(this).siblings().find("a").css({"color":"gray"});
			$(this).find("a").css({"color":"#2ed2c1"});
			
			postParams.keywords = null;
			m_result.curCity = null;
			postParams.regionThirdId = null;
			postParams.curPage = 1;
			
			loadSearchresultList();
			
//			alert("重新搜索");
			return false;
		});
	},
	
	resourceCateList:[],
	curResourceSecCate :null,
	updateResourceCateList:function(resourceCateList){
		this.resourceCateList = resourceCateList;
		this.updateResourceCateListView();
	},
	updateResourceCateListView:function (){
		var $resourceSecList = $("#resourceSecList");
		var $resourceSecList_default = $('<li ><a href="javascript:void(0);">全部</a></li>');
		
		$resourceSecList.empty();
		
		if(!postParams.resourceSecId){
			$resourceSecList_default.siblings().find("a").css({"color":"gray"});
			$resourceSecList_default.find("a").css({"color":"#2ed2c1"});
			
			this.curResourceSecCate = null ;
		}
		
		$resourceSecList.append($resourceSecList_default);
		
		for(var i = 0;i<this.resourceCateList.length;i++){
			var $item = $('<li></li>');
			var $item_a = $('<a href="javascript:void(0);">'+this.resourceCateList[i].secName+'</a>');
			
			$item.data("index",i);
			$item.append($item_a);

			if(postParams.resourceSecId && this.resourceCateList[i].secId == postParams.resourceSecId ){
				$item.siblings().find("a").css({"color":"gray"});
				$item.find("a").css({"color":"#2ed2c1"});
				
				this.curResourceSecCate = this.resourceCateList[i] ;
				
				this.curResourceThirdCate = null,
				this.updateResourceThirdCateList(m_result.resourceCateList[i].navThird),
				this.updateResourceThirdCateListView();
			}
			
			$resourceSecList.append($item);
			
			$item.on("click",function(){
				
				var index = $(this).data("index");
				
				$(this).siblings().find("a").css({"color":"gray"});
				$(this).find("a").css({"color":"#2ed2c1"});
				
				m_result.curResourceSecCate = m_result.resourceCateList[index];
				
				m_result.curResourceThirdCate = null,
				m_result.updateResourceThirdCateList(m_result.resourceCateList[index].navThird),
				m_result.updateResourceThirdCateListView();
				
				postParams.keywords = null;
				postParams.resourceSecId = m_result.curResourceSecCate.secId;
				postParams.resourceThirdId = null;
				postParams.curPage = 1;
				
				loadSearchresultList();
				
//				alert("显示三级菜单");
				return false;
				
			});
			
			
		}
		
		$resourceSecList_default.on("click",function(){
			
			$(this).siblings().find("a").css({"color":"gray"});
			$(this).find("a").css({"color":"#2ed2c1"});
			
			m_result.curResourceSecCate = null;
			
			m_result.curResourceThirdCate = null;
			m_result.updateResourceThirdCateList([]);
			m_result.updateResourceThirdCateListView();
			
			postParams.keywords = null;
			postParams.resourceSecId = null;
			postParams.resourceThirdId = null;
			postParams.curPage = 1;
			
			loadSearchresultList();
			
			// 隐藏 三级菜单并清除 参数中的resourceThirdId
			
			return false;
		});
	},
	
	resourceThirdCateList:[],
	curResourceThirdCate:null,
	updateResourceThirdCateList:function(resourceThirdCateList){
		this.resourceThirdCateList = resourceThirdCateList;
		this.updateResourceThirdCateListView();
	},
	updateResourceThirdCateListView:function(){
		var $resourceThirdList = $("#resourceThirdList");
		var $resourceThirdList_default = $('<li><a href="javascript:void(0);">全部</a></li>');
		
		$resourceThirdList.empty();
		
		for(var i = 0;i<this.resourceThirdCateList.length;i++){
			
			if(i == 0){
				
				if(!postParams.resourceThirdId){
					$resourceThirdList_default.siblings().find("a").css({"color":"gray"});
					$resourceThirdList_default.find("a").css({"color":"#2ed2c1"});
					
					this.curResourceThirdCate = null ;
				}
				
				$resourceThirdList.append($resourceThirdList_default);
				
				$resourceThirdList_default.on("click",function(){
//					alert("搜索");
					$(this).siblings().find("a").css({"color":"gray"});
					$(this).find("a").css({"color":"#2ed2c1"});
					
					m_result.curResourceThirdCate = null;
				
					postParams.keywords = null;
					postParams.resourceThirdId = null;
					postParams.curPage = 1;
					
					loadSearchresultList();
					return false;
				});
			}
			
			var $item = $('<li ></li>');
			var $item_a = $('<a href="javascript:void(0);"></a>');
			
			$item.data("index",i);
			
			$item_a.append(this.resourceThirdCateList[i].thirdName);
			$item.append($item_a);
			
			if(postParams.resourceThirdId && this.resourceThirdCateList[i].thirdId == postParams.resourceThirdId){
				$item.siblings().find("a").css({"color":"gray"});
				$item.find("a").css({"color":"#2ed2c1"});
				
				this.curResourceThirdCate = this.resourceThirdCateList[i] ;
			}
			
			$resourceThirdList.append($item);
			$item.on("click",function(){
//				alert("搜索");
				$(this).siblings().find("a").css({"color":"gray"});
				$(this).find("a").css({"color":"#2ed2c1"});
				
				var index = $(this).data("index");
				m_result.curResourceThirdCate = m_result.resourceThirdCateList[index];
				
				postParams.keywords = null;
				postParams.resourceThirdId = m_result.curResourceThirdCate.thirdId;
				postParams.curPage = 1;
				
				loadSearchresultList();
				
				return false;
				
			});
		}
	},
	
	timeList:[],
	curTime:null,
	updateTimeList:function(timeList){
		//timeList:[{id,name,minTime,maxTime}]
		this.timeList = timeList;
		this.updateTimeListView();
	},
	updateTimeListView:function(){
		var $times = $("#times");
		var $times_default = $('<li> <a href="javascript:void(0);">全部</a></li>');

		$times.empty();
		
		if(!postParams.minTime && !postParams.maxTime){
			$times_default.siblings().find("a").css({"color":"gray"});
			$times_default.find("a").css({"color":"#2ed2c1"});
		}
		
		$times.append($times_default);
		for(var i = 0;i<this.timeList.length;i++){
			var $item = $('<li></li>');
			var $item_a = $('<a href="javascript:void(0);"></a>');
			
			$item.data("index",i);
			
			$item_a.append(this.timeList[i].name);
			$item.append($item_a);
			
			$times.append($item);
			
			$item.on("click",function(){
				
				$(this).siblings().find("a").css({"color":"gray"});
				$(this).siblings().find("span").css({"color":"gray"});
				$(this).find("a").css({"color":"#2ed2c1"});
				
//				alert("根据时间查询");
				var index = $(this).data("index");
				
				postParams.keywords = null;
				postParams.minTime = timeOptions[index].minTime;
				postParams.maxTime = timeOptions[index].maxTime;
				postParams.curPage = 1;
				
				loadSearchresultList();
				
				return false;
			});
		}
		
		var $item_self = $('<span style="overflow: hidden;margin: 0 0 20px 15px;font-size: 16px;color: gray;display:inline-block;"></span>');
		var $item_self_span = $('<span style="display:inline-block;margin-top:0px;">自定义</span>');
		var $laydate_min_trigger = $('<input id="minTime" style="width: 173px;" />');
		var $laydate_link = $('<span>至</span>');
		var $laydate_max_trigger = $('<input id="maxTime" style="width: 173px;"/>');
		var $laydate_btn = $('<button type="button" id="by-custom-time">确定</button>');
		
		$item_self.append($item_self_span);
		$item_self.append($laydate_min_trigger);
		$item_self.append($laydate_link);
		$item_self.append($laydate_max_trigger);
		$item_self.append($laydate_btn);
		
		if(postParams.minTime || postParams.maxTime){
			$item_self.siblings().find("a").css({"color":"gray"});
			$item_self.css({"color":"#2ed2c1"});
		}
		
		$times.append($item_self);
		initSearchCalendar('#minTime');
		initSearchCalendar('#maxTime');
		
		$times_default.on("click",function(){
			
			$(this).siblings().find("a").css({"color":"gray"});
			$(this).siblings().find("span").css({"color":"gray"});
			$(this).find("a").css({"color":"#2ed2c1"});
			
			postParams.keywords = null;
			postParams.minTime = null;
			postParams.maxTime = null;
			postParams.curPage = 1;
			
			loadSearchresultList();
			
//			alert("修改时间");
			return false;
		});
		
		$laydate_btn.on("click",function(){
			
			postParams.keywords = null;
			postParams.minTime = minTimeDate.getSelectedDate();
			postParams.maxTime = maxTimeDate.getSelectedDate();
			postParams.curPage = 1;
			
			loadSearchresultList();
			
//			alert("修改时间");
//			return false;
		});
		
		$item_self.on("click",function(){
			$(this).siblings().find("a").css({"color":"gray"});
			$(this).css({"color":"#2ed2c1"});
			
			return false;
			
		});
		
	},
	
	resultList:[],
	updateResultList:function(resultList){
		this.resultList = resultList;
		this.updateResultListView();
	},
	updateResultListView:function(){
		var $result_list = $("#resultList");
		$result_list.empty();
		for(var i = 0;i<this.resultList.length;i++){
			var $item = $("<dl></dl>");
			
			var $item_dt = $("<dt></dt>");
			var $item_dt_img = $('<img src="'+this.resultList[i].RESOURCE_PIC+'" width="176px" height="240px">');
			
			var $item_dd = $("<dd></dd>");
			var $item_dd_title = $('<div class="ddleft"></div>');
			var $item_dd_title_name = $('<p class="mtit"></p>');
			var $item_dd_title_name_a = $('<a href="javascript:void(0);"> ['+this.resultList[i].THIRD_NAME+']'+this.resultList[i].RESOURCE_NAME+' </a>');
			var $item_dd_title_desc = $('<p class="ftit">'+this.resultList[i].RESOURCE_SHORT_DESC+'</p>');
			var $item_dd_title_site = $('<p class="time">'+this.resultList[i].MIN_Time+'</p>');
			var $item_dd_title_venue = $('<p class="place">'+this.resultList[i].VENUE_NAME+'</p>');
			
			var $item_dd_body = $('<div class="ddright flr"></div>');
			var $item_dd_body_span = $('<span class="pre_sale wp-icon-all">预售</span>');
			var $item_dd_body_p = $('<p class="price"></p>');
			var $item_dd_body_p_span = $('<span>'+this.resultList[i].MIN_PRICE+'</span><span style="font-size:12px">元起</span>');
			var $item_dd_body_a = $('<a class="buy_btn" href="javascript:void(0);">立即购买</a>');
			
			$item.data("index",i);
			
			$item_dt.append($item_dt_img);
			
			$item_dd_title_name.append($item_dd_title_name_a);
			$item_dd_title.append($item_dd_title_name);
			$item_dd_title.append($item_dd_title_desc);
			$item_dd_title.append($item_dd_title_site);
			$item_dd_title.append($item_dd_title_venue);
			
			$item_dd_body_p.append($item_dd_body_p_span);
			$item_dd_body.append($item_dd_body_span);
			$item_dd_body.append($item_dd_body_p);
			$item_dd_body.append($item_dd_body_a);
			
			$item_dd.append($item_dd_title);
			$item_dd.append($item_dd_body);
			
			$item.append($item_dt);
			$item.append($item_dd);
			
			$result_list.append($item);
			
			$item.on("click",function(){
//				alert("资源详细");
				var index = $(this).data("index");
				
				var curClick = m_result.resultList[index];
				
				resourceDetailParams.resourceId = curClick.RESOURCE_ID;
				resourceDetailParams.regionThirdId = curClick.THIRD_ID;
				
				// 清空内容页，并导入新页
				loadHtmlByPath("views/resource_detail.html");
				
//				alert("资源详细信息");
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
		

		var $latestInfoAndThematic = $("#resultLatestAndThematic");
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
				
				var curClick = m_result.latestInfoList[index];
				
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
	hotSellList:[],
	updateHotSellList:function(hotSellList){
		this.hotSellList = hotSellList;
		this.updateHotSellListView();
	},
	updateHotSellListView:function(){
		
		var $hotSell_container_ul = $("#resultHotSell");
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
			
			$hotSell_container_li.data("index",i);
			
			$hotSell_container_ul.append($hotSell_container_li);

			$hotSell_container_li.on("click",function(e){
				
				var index = $(this).data("index");
				
				var curClick = m_result.hotSellList[index];
				
				resourceDetailParams.resourceId = curClick.RESOURCE_ID;
				resourceDetailParams.regionThirdId = curClick.THIRD_ID;
				
				// 清空内容页，并导入新页
				loadHtmlByPath("views/resource_detail.html");
				
//				alert("资源详细信息");
				return false;
			});
		}
		
	},
	
};
