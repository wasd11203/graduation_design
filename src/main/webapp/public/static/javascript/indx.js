$(function() {
	loadResourceTopNavAction();
	loadMainAdvertisingResourceAction();
	loadDiscountResourceAction();
	$("#maincontent").load("views/maincontent.html");
});

function loadResourceTopNavAction() {
	$.ajax({
		url : 'nav/resource_top',
		type : 'POST',
		dataType : "json",
		data:{},
		success:function(data){
			console.log(data);
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
			console.log(data);
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
			console.log(data);
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
			console.log(data);
//			m_maincontent.updateAdvertising(data);
		},
		error:function(data){
			alert("fail");
		}
			
	})
}

