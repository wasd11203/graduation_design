
/**
 * 用于 在需要初始化搜索条件时 时使用
 * @returns
 */
function loadSearchNav(){

	$.ajax({
		url : 'resource/searchByMark',
		type : 'POST',
		dataType : "json",
		data:postParams,
		success:function(data){
			console.log(data);
			m_resoult.updateCityList(data.cityList);
			m_resoult.updateResourceCateList(data.resourceNav);
			m_resoult.updateTimeList(timeOptions);
			m_resoult.updateResultList(data.resourceList);
			
			if(data.totalPage > 0){
				options.currentPage = postParams.curPage;
				options.totalPages = data.totalPage;
				initPaginator(options);
			}else{
				$('#paginator').empty();
			}
			
		},
		error:function(data){
			alert("fail");
		}
			
	})
	
}

/**
 * 不需要初始化 搜索条件时使用
 * @returns
 */
function loadSearchResoultList(){

	$.ajax({
		url : 'resource/searchByMark',
		type : 'POST',
		dataType : "json",
		data:postParams,
		success:function(data){
			console.log(data);
			m_resoult.updateResultList(data.resourceList);
			
			if(data.totalPage > 0){
				options.currentPage = postParams.curPage;
				options.totalPages = data.totalPage;
				initPaginator(options);
			}else{
				$('#paginator').empty();
			}
			
		},
		error:function(data){
			alert("fail");
		}
	})
	
}

function loadLatestAndThematicAndHotSell(){
	m_resoult.updateLatestInfoList(m_home.latestInfoList);
	m_resoult.updateHotSellList(m_home.hotSellList);
}

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
				selectedDate: postParams.minTime, //指定日历选择的日期
				count: 1,
				triggerNode: id
			});
			//日期点击事件
//			minTimeDate.on('dateclick', function() {
//	            var selectedDate = new Date (this.get('selectedDate'));
//	            alert(selectedDate + '\u3010' + this.getDateInfo(selectedDate) + '\u3011');
//	            m_home.updateSelectedDate(selectedDate);
//	            alert("修改最小值");
//	        })

		}else{
			/**
			 * 弹出式日历实例
			 * 指定触发弹出的节点
			 */
			maxTimeDate = new Y.TripCalendar({
				selectedDate: postParams.maxTime, //指定日历选择的日期
				count: 1,
				triggerNode: id
			});
			//日期点击事件
//			maxTimeDate.on('dateclick', function() {
//	            var selectedDate = new Date (this.get('selectedDate'));
//	            alert(selectedDate + '\u3010' + this.getDateInfo(selectedDate) + '\u3011');
//	            m_home.updateSelectedDate(selectedDate);
//	            alert("修改最大值");
//	        })
		}
		
	})
}

//分页插件 配置 -- 开始
var options = {
	    bootstrapMajorVersion:3,
	    currentPage: 1,
	    numberOfPages: 5,
	    totalPages:10,
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
	    onPageChanged:function(e,oldPage,newPage){
	    	
//	    	alert('当前页被修改 --> old: '+oldPage+' new: '+newPage);
	    	postParams.curPage = newPage;
	    	loadSearchResoultList();
	    },
	    pageUrl: function(type, page, current){

	        return "javascript:void(0);";

	    }
	}

function initPaginator(options){
	// element 不能使用传递参数的方式传入此方法
	var element = $('#paginator');
	element.bootstrapPaginator(options);
}
//  分页插件 配置 -- 结束