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
	}
	
	// to do... ... 列出相关搜索条件
	
	
};