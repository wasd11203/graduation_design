$(function() {
	
	loadResourceTopNavAction();
	$("#maincontent").load("views/maincontent.html");
});

function loadResourceTopNavAction() {
	$.ajax({
		url : 'nav/resource_top',
		type : 'POST',
		dataType : "json",
		data:{},
		success:function(data){
//			console.log(data);
			m_home.updateResourceNavTop(data);
		},
		error:function(data){
			alert("fail");
		}
			
	})
}

function listResourceSecNavAction(resourceTopId){
	console.log(resourceTopId);
	var param = {"resourceTopId":resourceTopId};

	$.ajax({
		url : 'nav/resource_nav',
		type : 'POST',
		dataType : "json",
		data:param,
		success:function(data){
//			console.log(data);
			m_home.updateResourceNavSecAndThird(data);
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
			m_maincontent.updateAdvertising(data);
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
			m_maincontent.updateDiscountList(data);
		},
		error:function(data){
			alert("fail");
		}
			
	})
}

function loadRencentHotResourceListAction(){
	m_maincontent.updateRecentHotList();
}

function loadLatestInfoResourceAction(){
	$.ajax({
		url : 'list/latestInfo',
		type : 'POST',
		dataType : "json",
		data:{},
		success:function(data){
//			console.log(data);
			m_maincontent.updateLatestInfoList(data);
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
			m_maincontent.updateCateList(data.data);
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
			m_maincontent.updateVenueList(data);
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
			console.log(data);
			m_maincontent.updateHotSellList(data);
		},
		error:function(data){
			alert("fail");
		}
			
	})
}

function loadResourceByTime(){
	m_maincontent.updateCalendarList();
}


