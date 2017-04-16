var m_header = {
	resourceNavTop : [],
	curResourceNavTop:null,
	updateResourceNavTop : function(resourceNavTop) {
		this.resourceNavTop = resourceNavTop;
		this.updateResourceNavTopView();
	},
	updateResourceNavTopView:function(){
		var $resourceNavTop = $("#resourceNavTop");
		$resourceNavTop.empty();
		for(var i = 0;i<this.resourceNavTop.length;i++){
			var $li = $('<li></li>');
			var $a = $('<a href="javascript:void(0);"></a>');
			
			$li.data("index",i);
			$a.append(this.resourceNavTop[i].TOP_NAME);
			$li.append($a);
			$resourceNavTop.append($li);
			
			$li.click(function(){
				
				$li.addClass("active").siblings().removeClass("active");
				var index = $(this).data('index');
				m_header.curResourceNavTop = m_header.resourceNavTop[index];
				
				m_header.updateResourceNavTopView();
				
				return false;
			});
			
			if( this.curResourceNavTop){
				if(this.resourceNavTop[i].TOP_ID == this.curResourceNavTop.TOP_ID ){
					$li.addClass("active").siblings().removeClass("active");
				}
			}else{
				if(i == 0){
					$li.addClass("active").siblings().removeClass("active");
					this.curResourceNavTop = this.resourceNavTop[i];
				}
			}
			
		}
		
		listResourceSecNavAction(m_header.curResourceNavTop.TOP_ID);
		loadRegionSecAndThirdAction(m_header.curResourceNavTop.TOP_ID);
	},
	
	resourceNavSecAndThird:[],
	curResourceNavSec:null,
	updateResourceNavSecAndThird:function(resourceNavSecAndThird){
		this.resourceNavSecAndThird = resourceNavSecAndThird;
		// 在触发更新资源的二级菜单时，同时需要更新 maincontent 中的资源概览导航
		m_home.updateResourceSecNav(this.resourceNavSecAndThird);
		
		this.updateResourceNavSecAndThirdView();
	},
	updateResourceNavSecAndThirdView:function(){
		var $mainnav = $("#mainnav");
		$mainnav.empty();
		var $main_li = $('<li class="togglenav"></li>');
		var $main_a = $('<a href="javascript:void(0);"></a>');
		var $title = $('<b class="hamburger"></b>');
		$main_a.append($title);
		$main_a.append("全部演出分类");
		$main_li.append($main_a);
		
		var $resourceNavSecAndThird = $('<div class="dropnav"></div>');
		var $resourceNavThird = $('<div class="sort-right"></div>');
		var $sec_div = $('<div class="icon_sort"></div>');
		var $sec_ul = $('<ul></ul>');
		
		$resourceNavSecAndThird.append($sec_div);
		
		for(var i = 0;i<this.resourceNavSecAndThird.length;i++){
			
			if(this.resourceNavSecAndThird[i].isBar == 1){

				var $main_bar_li = $('<li></li>');
				var $main_bar_li_a = $('<a href="javascript:void(0);"></a>');
				
				$main_bar_li.data("index",i);
				$main_bar_li_a.append(this.resourceNavSecAndThird[i].secName);
				$main_bar_li.append($main_bar_li_a);
				
				$mainnav.append($main_bar_li);
				$main_bar_li.on("click",function(){
					var index = $(this).data("index");
					postParams = {};
					
					m_header.curResourceNavSec = m_header.resourceNavSecAndThird[index];
					if(m_header.curRegionThird){
						postParams.regionThirdId = m_header.curRegionThird.thirdId;
					}
					postParams.resourceTopId = m_header.curResourceNavTop.TOP_ID;
					postParams.resourceSecId = m_header.curResourceNavSec.secId;
					postParams.curPage = 1;
					// 清空内容页，并导入新页
					loadHtmlByPath("views/result.html");
					return false;
				});
			}
			
			var $sec_li = $('<li></li>');
			var $sec_a = $('<a href="javascript:void(0);"></a>');
			var $sec_span = $('<span></span>');
			
			$sec_li.data('index',i);

			$sec_a.append($sec_span);
			$sec_a.append(this.resourceNavSecAndThird[i].secName);
			$sec_li.append($sec_a);
			$sec_ul.append($sec_li);
			
			var $third_div = $('<div class="third"></div>');
			var $third_lf_div = $('<div class="lf"></div>');
			var $third_rt_div = $('<div class="rt"></div>');
			
			for(var j = 0;j<this.resourceNavSecAndThird[i].navThird.length;j++){
				var $third_lf_div_a = $('<a href="javascript:void(0);"></a>');
				
				$third_lf_div_a.data("i",i);
				$third_lf_div_a.data('j',j);
				
				$third_lf_div_a.append(this.resourceNavSecAndThird[i].navThird[j].thirdName);
				$third_lf_div.css({"background-image":"url(static/images/head/concert.jpg)"});
				$third_lf_div.append($third_lf_div_a);
				
				$third_lf_div_a.on("click",function(){
					var i = $(this).data("i");
					var j = $(this).data('j');
					var resourceSec = m_header.resourceNavSecAndThird[i];
					var resourceThird = m_header.resourceNavSecAndThird[i].navThird[j];
					
					postParams = {};
					if(m_header.curRegionThird){
						postParams.regionThirdId = m_header.curRegionThird.thirdId;
					}
					postParams.resourceTopId = m_header.curResourceNavTop.TOP_ID;
					postParams.resourceSecId = resourceSec.secId;
					postParams.resourceThirdId =resourceThird.thirdId;
					postParams.curPage = 1;
					
					// 清空内容页，并导入新页
					loadHtmlByPath("views/result.html");
//					alert("三级级资源去搜索");
					
					return false;
				});
			}
			
			$third_div.append($third_lf_div);
			$third_div.append($third_rt_div);
			
			$resourceNavThird.append($third_div);
			
			$sec_li.on("mouseover",function(){
				var index =$(this).data('index');
				$resourceNavThird.find(".third").eq(index).show().siblings().hide();
			});
			
			$sec_li.on("click",function(){
//				alert("二级资源去搜索");
				var index = $(this).data("index");
				var resourceSec = m_header.resourceNavSecAndThird[index];
				
				postParams = {};
				if(m_header.curRegionThird){
					postParams.regionThirdId = m_header.curRegionThird.thirdId;
				}
				postParams.resourceTopId = m_header.curResourceNavTop.TOP_ID;
				postParams.resourceSecId = resourceSec.secId;
				postParams.curPage = 1;
				
				// 清空内容页，并导入新页
				loadHtmlByPath("views/result.html");
				
				return false;
			});
		}
		
		$resourceNavSecAndThird.append($sec_ul);
		$resourceNavSecAndThird.append($resourceNavThird);
		$main_li.append($resourceNavSecAndThird);
		
		$mainnav.prepend($main_li);
	},
	
	regionNavSecAndThird:[],
	curRegionThird:null,
	updateRegionNavSecAndThird:function(regionNavSecAndThird){
		this.regionNavSecAndThird = regionNavSecAndThird;
		this.updateRegionNavSecAndThirdView();
	},
	updateRegionNavSecAndThirdView:function(){
		var $region = $("#regionSecAndThird");
		
		var $curRegion_a = $('<a href="javascript:void(0);"></a>');
		var $curRegion_a_span = $('<span class="caret"></span>');
		
		var $region_list = $('<div class="location"></div>');
		var $region_list_panel = $('<div class="panel panel-default">');
		
		var $region_list_panel_title_div = $('<div class="panel-heading">当前</div>');
		var $region_list_panel_title_div_a = $('<a href="javascript:void(0);">全国</a>');
		
		var $region_list_panel_body = $('<div class="panel-body"></div>');
		
		$region.empty();
		
		if(this.curRegionThird){
			$curRegion_a.append(this.curRegionThird.thirdName);
		}else{
			$curRegion_a.append('全国');
		}
		
		for(var i = 0;i<this.regionNavSecAndThird.length;i++){
			
			for(var j = 0 ;j<this.regionNavSecAndThird[i].navSec.length;j++){
			
				var $region_list_body_item = $('<div id="place"></div>');
				var $region_list_body_item_span = $('<span>'+this.regionNavSecAndThird[i].navSec[j].secName+'</span>');
				var $region_list_body_item_ul = $('<ul></ul>');
				
				for(var k = 0 ;k<this.regionNavSecAndThird[i].navSec[j].navThird.length;k++){
					var $region_list_body_item_ul_li = $('<li></li>');
					var $region_list_boty_item_ul_li_a = $('<a href="javascript:void(0);">'+this.regionNavSecAndThird[i].navSec[j].navThird[k].thirdName+'(152)</a>');
					
					$region_list_body_item_ul_li.data('i',i);
					$region_list_body_item_ul_li.data('j',j);
					$region_list_body_item_ul_li.data('k',k);
					
					$region_list_body_item_ul_li.append($region_list_boty_item_ul_li_a);
					$region_list_body_item_ul.append($region_list_body_item_ul_li);
					$region_list_body_item_ul_li.on("click",function(e){
						
						var top = $(this).data('i');
						var sec = $(this).data('j');
						var third = $(this).data('k');
						
						m_header.curRegionThird = m_header.regionNavSecAndThird[top].navSec[sec].navThird[third];
						
//						alert("搜索");

						postParams = {};
						postParams.resourceTopId = m_header.curResourceNavTop.TOP_ID;
						postParams.regionThirdId = m_header.curRegionThird.thirdId;
						postParams.curPage = 1;
						
						// 清空内容页，并导入新页
						loadHtmlByPath("views/result.html");
						
						m_header.updateRegionNavSecAndThirdView();
						e.preventDefault();
						$region_list.toggle(false);
					});
					
				}
				
				$region_list_body_item.append($region_list_body_item_span);
				$region_list_body_item.append($region_list_body_item_ul);
				
				$region_list_panel_body.append($region_list_body_item);

			}
		}
		
		$curRegion_a.append($curRegion_a_span);
		
		$region_list_panel_title_div.append($region_list_panel_title_div_a);
		$region_list_panel_title_div.append('共有<span>1403</span>场演出，城市后数字代表演出场次');
		
		$region_list_panel.append($region_list_panel_title_div);
		$region_list_panel.append($region_list_panel_body);
		
		$region_list.append($region_list_panel);
		
		$region.append($curRegion_a);
		$region.append($region_list);
		
		$region_list_panel_title_div_a.on("click",function(e){
			m_header.curRegionThird = null;
			
			alert("搜索");
			
			postParams = {};
			if(m_header.curRegionThird){
				postParams.regionThirdId = m_header.curRegionThird.thirdId;
			}
			postParams.resourceTopId = m_header.curResourceNavTop.TOP_ID;
			postParams.curPage = 1;
			
			// 清空内容页，并导入新页
			loadHtmlByPath("views/result.html");
			
			m_header.updateRegionNavSecAndThirdView();
			e.preventDefault();
			$region_list.toggle(false);
		});
		
		$curRegion_a.on("click",function(e){
//			alert("地区信息");
			e.preventDefault();
			$region_list.toggle(100);
		});
	}
};



