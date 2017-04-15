
var minTimeDate = null;
var maxTimeDate = null;

var m_resoult = {

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
		
		for(var i = 0;i<this.cityList.length;i++){
			var $item_li = $("<li> </li>");
			var $item_li_a = $('<a href="javascript:void(0);"> </a>');
			
			$item_li.data("index",i);
			
			$item_li_a.append(this.cityList[i].thirdName);
			$item_li.append($item_li_a);
			$cityList.append($item_li);
			
			$item_li.on("click",function(){
				$(this).siblings().find("a").css({"color":"gray"});
				$(this).find("a").css({"color":"#2ed2c1"});
				
				var i = $(this).data("index");
				m_resoult.curCity = m_resoult.cityList[i];
				postParams.regionThirdId = m_resoult.curCity.thirdId;
				postParams.curPage = 1;
				
				loadSearchResoultList();
				
//				alert("重新搜索");
				return false;
			});
		}
		
		$cityList_default.on("click",function(){
			$(this).siblings().find("a").css({"color":"gray"});
			$(this).find("a").css({"color":"#2ed2c1"});
			
			m_resoult.curCity = null;
			postParams.regionThirdId = null;
			postParams.curPage = 1;
			
			loadSearchResoultList();
			
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
		
		$resourceSecList.append($resourceSecList_default);
		
		for(var i = 0;i<this.resourceCateList.length;i++){
			var $item = $('<li></li>');
			var $item_a = $('<a href="javascript:void(0);">'+this.resourceCateList[i].secName+'</a>');
			
			$item.data("index",i);
			$item.append($item_a);
			
			$resourceSecList.append($item);
			$item.on("click",function(){
				
				var index = $(this).data("index");
				
				$(this).siblings().find("a").css({"color":"gray"});
				$(this).find("a").css({"color":"#2ed2c1"});
				
				m_resoult.curResourceSecCate = m_resoult.resourceCateList[index];
				
				m_resoult.curResourceThirdCate = null,
				m_resoult.updateResourceThirdCateList(m_resoult.resourceCateList[index].navThird),
				m_resoult.updateResourceThirdCateListView();
				
				postParams.resourceSecId = m_resoult.curResourceSecCate.secId;
				postParams.resourceThirdId = null;
				postParams.curPage = 1;
				
				loadSearchResoultList();
				
//				alert("显示三级菜单");
				return false;
				
			});
		}
		
		$resourceSecList_default.on("click",function(){
			
			$(this).siblings().find("a").css({"color":"gray"});
			$(this).find("a").css({"color":"#2ed2c1"});
			
			m_resoult.curResourceSecCate = null;
			
			m_resoult.curResourceThirdCate = null;
			m_resoult.updateResourceThirdCateList([]);
			m_resoult.updateResourceThirdCateListView();
			
			postParams.resourceSecId = null;
			postParams.resourceThirdId = null;
			postParams.curPage = 1;
			
			loadSearchResoultList();
			
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
				$resourceThirdList.append($resourceThirdList_default);
				
				$resourceThirdList_default.on("click",function(){
//					alert("搜索");
					$(this).siblings().find("a").css({"color":"gray"});
					$(this).find("a").css({"color":"#2ed2c1"});
					
					m_resoult.curResourceThirdCate = null;
					
					postParams.resourceThirdId = null;
					postParams.curPage = 1;
					
					loadSearchResoultList();
					return false;
				});
			}
			
			var $item = $('<li ></li>');
			var $item_a = $('<a href="javascript:void(0);"></a>');
			
			$item.data("index",i);
			
			$item_a.append(this.resourceThirdCateList[i].thirdName);
			$item.append($item_a);
			$resourceThirdList.append($item);
			$item.on("click",function(){
//				alert("搜索");
				$(this).siblings().find("a").css({"color":"gray"});
				$(this).find("a").css({"color":"#2ed2c1"});
				
				var index = $(this).data("index");
				m_resoult.curResourceThirdCate = m_resoult.resourceThirdCateList[index];
				
				postParams.resourceThirdId = m_resoult.curResourceThirdCate.thirdId;
				postParams.curPage = 1;
				
				loadSearchResoultList();
				
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
				postParams.minTime = timeOptions[index].minTime;
				postParams.maxTime = timeOptions[index].maxTime;
				postParams.curPage = 1;
				
				loadSearchResoultList();
				
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
		
		$times.append($item_self);
		initSearchCalendar('#minTime');
		initSearchCalendar('#maxTime');
		
		$times_default.on("click",function(){
			
			$(this).siblings().find("a").css({"color":"gray"});
			$(this).siblings().find("span").css({"color":"gray"});
			$(this).find("a").css({"color":"#2ed2c1"});
			
			postParams.minTime = null;
			postParams.maxTime = null;
			postParams.curPage = 1;
			
			loadSearchResoultList();
			
//			alert("修改时间");
			return false;
		});
		
		$laydate_btn.on("click",function(){
			postParams.minTime = minTimeDate.getSelectedDate();
			postParams.maxTime = maxTimeDate.getSelectedDate();
			postParams.curPage = 1;
			
			loadSearchResoultList();
			
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
			
			$item_dd_title_name.on("click",function(){
				alert("详细");
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
		
		var $latestInfoAndThematic = $("#resoultLatestAndThematic");
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
			
			/**
			 * 在最新资讯列表中只有第一个资源有图
			 */
			if(i==0){
				$latestInfo_ul_li_a.append($latestInfo_ul_li_a_img);
			}
			
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
	hotSellList:[],
	updateHotSellList:function(hotSellList){
		this.hotSellList = hotSellList;
		this.updateHotSellListView();
	},
	updateHotSellListView:function(){
		
		var $hotSell_container_ul = $("#resoultHotSell");
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
			
			$hotSell_container_ul.append($hotSell_container_li);

			$hotSell_container_li.on("click",function(e){
				alert("资源详细");
				
				return false;
			});
		}
		
	},
	
};
