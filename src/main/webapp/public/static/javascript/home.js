// 定义一个日历 变量
	var oCal = null;
	
	$(function() {
//		初始化日历插件
		initCalendar();
		// 加载主要轮播广告
		loadMainAdvertisingResourceAction();
		// 加载特惠 特惠专题广告
		loadDiscountResourceAction();
		// 加载最新资讯资源 以及 精彩专题
		loadLatestInfoResourceAction();
		// 加载 各个类别的推荐资源
		loadRoughlyResourceListAction(1,1);
		// 加载场馆列表
		loadVenueRecommendListAction();
		// 加载热销列表
		loadHotSellListAction();
		// 加载近期热门列表
		loadRencentHotResourceListAction();
	});

	/**
	 * 初始化日历插件
	 */
	function initCalendar() {
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

			/**
			 * 非弹出式日历实例
			 * 直接将日历插入到页面指定容器内
			 */
			oCal = new Y.TripCalendar({
				container: '#J_Calendar', //非弹出式日历时指定的容器（必选）
				selectedDate: m_home.selectedDate, //指定日历选择的日期
				count: 1
			});
			//日期点击事件
            oCal.on('dateclick', function() {
                var selectedDate = new Date (this.get('selectedDate'));
//              alert(selectedDate + '\u3010' + this.getDateInfo(selectedDate) + '\u3011');
                m_home.updateSelectedDate(selectedDate);
//                alert("根据点击的时间查询");
                
            })

		})
	}

	/**
	 * 回到顶部
	 */
	function pageScroll() {
		//把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
		window.scrollBy(0, -100);
		//延时递归调用，模拟滚动向上效果
		scrolldelay = setTimeout('pageScroll()', 10);
		var sTop = document.documentElement.scrollTop + document.body.scrollTop;
		//判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
		if(sTop == 0) clearTimeout(scrolldelay);
	}