$(function() {
	
	loadResourceTopNavAction();
	loadHtmlByPath("views/home.html");
});

function loadResourceTopNavAction() {
	$.ajax({
		url : 'nav/resource_top',
		type : 'POST',
		dataType : "json",
		data:{},
		success:function(data){
//			console.log(data);
			m_header.updateResourceNavTop(data);
			
		},
		error:function(data){
			alert("fail");
		}
			
	})
}

function listResourceSecNavAction(resourceTopId){
//	console.log(resourceTopId);
	var param = {"resourceTopId":resourceTopId};

	$.ajax({
		url : 'nav/resource_nav',
		type : 'POST',
		dataType : "json",
		data:param,
		success:function(data){
//			console.log(data);
			m_header.updateResourceNavSecAndThird(data);
		},
		error:function(data){
			alert("fail");
		}
			
	})
}

function loadRegionSecAndThirdAction(resourceTopId){
//	console.log(resourceTopId);
	var param = {"resourceTopId":resourceTopId};

	$.ajax({
		url : 'nav/region',
		type : 'POST',
		dataType : "json",
		data:param,
		success:function(data){
//			console.log(data);
			m_header.updateRegionNavSecAndThird(data);
		},
		error:function(data){
			alert("fail");
		}
			
	})

}

function loadMainAdvertisingResourceAction(){
	$.ajax({
		url : 'list/adv',
		type : 'POST',
		dataType : "json",
		data:{},
		success:function(data){
//			console.log(data);
			m_home.updateAdvertising(data);
		},
		error:function(data){
			alert("fail");
		}
			
	})
}

function loadDiscountResourceAction(){
	$.ajax({
		url : 'list/discount',
		type : 'POST',
		dataType : "json",
		data:{},
		success:function(data){
//			console.log(data);
			m_home.updateDiscountList(data);
		},
		error:function(data){
			alert("fail");
		}
			
	})
}

function loadRencentHotResourceListAction(){
	$.ajax({
		url : 'list/recent',
		type : 'POST',
		dataType : "json",
		data:{},
		success:function(data){
//			console.log(data);
			m_home.updateRecentHotList(data);
		},
		error:function(data){
			alert("fail");
		}
			
	})
	
}

function loadLatestInfoResourceAction(){
	$.ajax({
		url : 'list/latestInfo',
		type : 'POST',
		dataType : "json",
		data:{},
		success:function(data){
//			console.log(data);
			m_home.updateLatestInfoList(data);
		},
		error:function(data){
			alert("fail");
		}
			
	})
}

function loadRoughlyResourceListAction(resourceTopId,resourceSecId){
	
	var params = {"resourceTopId":resourceTopId,"resourceSecId":resourceSecId};
	$.ajax({
		url : 'resource/roughlyList',
		type : 'POST',
		dataType : "json",
		data:params,
		success:function(data){
//			console.log(data.data);
			m_home.updateCateList(data.data);
		},
		error:function(data){
			alert("fail");
		}
			
	})
}

function loadVenueRecommendListAction(){
	$.ajax({
		url : 'list/recommendList',
		type : 'POST',
		dataType : "json",
		data:{},
		success:function(data){
//			console.log(data);
			m_home.updateVenueList(data);
		},
		error:function(data){
			alert("fail");
		}
			
	})
}

function loadHotSellListAction(){
	$.ajax({
		url : 'list/hostSell',
		type : 'POST',
		dataType : "json",
		data:{},
		success:function(data){
//			console.log(data);
			m_home.updateHotSellList(data);
		},
		error:function(data){
			alert("fail");
		}
			
	})
}

function loadResourceByTime(minTime,maxTime){
	var params = {"minTime":minTime,"maxTime":maxTime};
	$.ajax({
		url : 'resource/searchByMark',
		type : 'POST',
		dataType : "json",
		data:params,
		success:function(data){
//			console.log(data);
			m_home.updateCalendarList(data.resourceList);
		},
		error:function(data){
			alert("fail");
		}
			
	})
	

}

function loadHtmlByPath(templatePath){
	$("#maincontent").empty();
	$("#maincontent").load(templatePath);
}
