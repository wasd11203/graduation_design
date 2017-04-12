var m_home = {
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
				m_home.curResourceNavTop = m_home.resourceNavTop[index];
				
				m_home.updateResourceNavTopView();
				listResourceSecNavAction(m_home.curResourceNavTop.TOP_ID);
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
	},
	
	resourceNavSecAndThird:[],
	curResourceNavSec:null,
	updateResourceNavSecAndThird:function(resourceNavSecAndThird){
		this.resourceNavSecAndThird = resourceNavSecAndThird;
		
		m_maincontent.updateResourceSecNav(this.resourceNavSecAndThird);
		
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
					alert("Top Bar 二级资源搜索");
					return false;
				});
			}
			
			var $sec_li = $('<li></li>');
			$sec_li.data('index',i);
			var $sec_a = $('<a href="javascript:void(0);"></a>');
			var $sec_span = $('<span></span>');
			$sec_a.append($sec_span);
			$sec_a.append(this.resourceNavSecAndThird[i].secName);
			$sec_li.append($sec_a);
			$sec_ul.append($sec_li);
			
			var $third_div = $('<div class="third"></div>');
			var $third_lf_div = $('<div class="lf"></div>');
			var $third_rt_div = $('<div class="rt"></div>');
			
			for(var j = 0;j<this.resourceNavSecAndThird[i].navThird.length;j++){
				var $third_lf_div_a = $('<a href="javascript:void(0);"></a>');
				$third_lf_div_a.data('index',j);
				$third_lf_div_a.append(this.resourceNavSecAndThird[i].navThird[j].thirdName);
				$third_lf_div.css({"background-image":"url(static/images/head/concert.jpg)"});
				$third_lf_div.append($third_lf_div_a);
				
				$third_lf_div_a.on("click",function(){
					alert("三级级资源去搜索");
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
				alert("二级资源去搜索");
				
				return false;
			});
		}
		
		$resourceNavSecAndThird.append($sec_ul);
		$resourceNavSecAndThird.append($resourceNavThird);
		$main_li.append($resourceNavSecAndThird);
		
		$mainnav.prepend($main_li);
	},
	
	regionNavSecAndThird:[],
	curResourceNavSec:null,
	updateRegionNavSecAndThird:function(regionNavSecAndThird){
		this.regionNavSecAndThird = regionNavSecAndThird;
		this.updateRegionNavSecAndThird();
	},
	updateRegionNavSecAndThird:function(){
		var $region = $("#regionSecAndThird");
		
		var $curRegion_a = $('<a href="#">全国</a>');
		var $curRegion_a_span = $('<span class="caret"></span>');
		
		var $region_list = $('<div class="location"></div>');
		var $region_list_panel = $('<div class="panel panel-default">');
		
		var $region_list_panel_title_div = $('div class="panel-heading">当前</div>');
		var $region_list_panel_title_div_a = $('<a href="javascript:void(0);">全国</a>共有<span>1403</span>场演出，城市后数字代表演出场次');
		
		var $region_list_panel_body = $('<div class="panel-body"></div>');
		
		for(var i=0;i<this.regionNavSecAndThird.length;i++){
			var $region_list_body_item = $('<div id="place"></div>');
			var $region_list_body_item_span = $('<span>华东</span>');
			var $region_list_body_item_ul = $('<ul></ul>');
			
			for(var j= 0 ;j<this.regionNavSecAndThird[i].third.length;j++){
				var $region_list_body_item_ul_li = $('<li></li>');
				var $region_list_boty_item_ul_li_a = $('<a href="javascript:void(0);">北京(152)</a>');
				
				$region_list_body_item_ul_li.append($region_list_boty_item_ul_li_a);
				$region_list_body_item_ul.append($region_list_body_item_ul_li);
			}
			
			$region_list_body_item.append($region_list_body_item_span);
			$region_list_body_item.append($region_list_body_item_ul);
			
			$region_list_panel_body.append($region_list_body_item);
			
		}
		
		$curRegion_a.append($curRegion_a_span);
		
		$region_list_panel_title_div.append($region_list_panel_title_div_a);
		
		$region_list_panel.append($region_list_panel_title_div);
		$region_list_panel.append($region_list_panel_body);
		
		$region_list.append($region_list_panel);
		
		$region.append($curRegion_a);
		$region.append($region_list);
		
	}
};



