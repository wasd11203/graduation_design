
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
		$cityList.empty();
		var $cityList_default = $('<li><a href="javascript:void(0);">全国 </a></li>');
		$cityList.append($cityList_default);
		for(var i = 0;i<this.cityList.length;i++){
			var $item_li = $("<li> </li>");
			var $item_li_a = $('<a href="javascript:void(0);"> </a>');
			
			$item_li_a.append(this.cityList[i].thirdName);
			$item_li.append($item_li_a);
			$cityList.append($item_li);
			$item_li_a.on("click",function(){
				alert("按照城市的规则 搜索");
				return false;
			});
		}
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
			
			$item.append($item_a);
			
			$resourceSecList.append($item);
			$item.on("click",function(){
				alert("显示三级菜单");
			});
		}
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
		
		$resourceThirdList.append($resourceThirdList_default);
		
		for(var i = 0;i<this.resourceThirdCateList.length;i++){
			var $item = $('<li ></li>');
			var $item_a = $('<a href="javascript:void(0);"></a>');
			
			$item_a.append(this.resourceThirdCateList[i].thirdName);
			$item.append($item_a);
			$resourceThirdList.append($item);
			$item.on("click",function(){
				alert("搜索");
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
			
			$item_a.append(this.timeList[i].name);
			$item.append($item_a);
			
			$times.append($item);
			
			$item.on("click",function(){
				alert("根据时间查询");
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
			var $item_dt_img = $('<img src="static/images/concert_1.jpg">');
			
			var $item_dd = $("<dd></dd>");
			var $item_dd_title = $('<div class="ddleft"></div>');
			var $item_dd_title_name = $('<p class="mtit"></p>');
			var $item_dd_title_name_a = $('<a href="javascript:void(0);"> [深圳]2017 COCO李玟18世界巡回演唱会-深圳站（预售） </a>');
			var $item_dd_title_desc = $('<p class="ftit">冠军女神舞台魅力再绽放</p>');
			var $item_dd_title_site = $('<p class="time">2017年5月6日 19:30</p>');
			var $item_dd_title_venue = $('<p class="place">华润深圳湾体育中心"春茧"体育馆</p>');
			
			var $item_dd_body = $('<div class="ddright flr"></div>');
			var $item_dd_body_span = $('<span class="pre_sale wp-icon-all">预售</span>');
			var $item_dd_body_p = $('<p class="price"></p>');
			var $item_dd_body_p_span = $('<span>380</span>元起');
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
		}
		
		var element = $('#paginator');

        var options = {
            bootstrapMajorVersion:3,
            currentPage: 3,
            numberOfPages: 5,
            totalPages:100,
            alignment:'right',
            itemTexts: function (type, page, current) {
                switch (type) {
                case "first":
                    return "首页";
                case "prev":
                    return "上一页";
                case "next":
                    return "下一页";
                case "last":
                    return "末页";
                case "page":
                    return page;
                }
            },
            onPageClicked:function(){
            	alert('点击一页');
            },
            onPageChanged:function(){
            	alert('当前页被修改');
            }
        }

        element.bootstrapPaginator(options);
		
	}
	

};

/**
 * 初始化自定义搜索日期日历插件
 */
function initSearchCalendar(id) {
	/* demo --> var root = 'http://fgm.cc/learn/calendar/trip-calendar/';*/
	YUI({
		modules: {
			'trip-calendar': {
				fullpath: 'static/plugins/javascript/trip-calendar.js',
				type: 'js',
				requires: ['trip-calendar-css']
			},
			'trip-calendar-css': {
				fullpath: 'static/plugins/styles/trip-calendar.css',
				type: 'css'
			}
		}
	}).use('trip-calendar', function(Y) {

		if(id == '#minTime'){
			/**
			 * 非弹出式日历实例
			 * 直接将日历插入到页面指定容器内
			 */
			minTimeDate = new Y.TripCalendar({
				selectedDate: m_home.selectedDate, //指定日历选择的日期
				count: 1,
				triggerNode: id
			});
			//日期点击事件
			minTimeDate.on('dateclick', function() {
//	            var selectedDate = new Date (this.get('selectedDate'));
//	            alert(selectedDate + '\u3010' + this.getDateInfo(selectedDate) + '\u3011');
//	            m_home.updateSelectedDate(selectedDate);
	            alert("修改最小值");
	            
	        })

		}else{
			/**
			 * 弹出式日历实例
			 * 指定触发弹出的节点
			 */
			maxTimeDate = new Y.TripCalendar({
				selectedDate: m_home.selectedDate, //指定日历选择的日期
				count: 1,
				triggerNode: id
			});
			//日期点击事件
			maxTimeDate.on('dateclick', function() {
//	            var selectedDate = new Date (this.get('selectedDate'));
//	            alert(selectedDate + '\u3010' + this.getDateInfo(selectedDate) + '\u3011');
//	            m_home.updateSelectedDate(selectedDate);
	            alert("修改最大值");
	            
	        })
		}
		
		
	})
}
