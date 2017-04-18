
$(function() {
	// todo 判断是否已经登录
	var account = storage.account;
    if(account){
        loginsucc(JSON.parse(account).NICKNAME ? JSON.parse(account).NICKNAME : 'noName');
    }
	loadResourceTopNavAction();
	loadHtmlByPath("views/home.html");
	initAlertDialog();
	
	// todo 登陆后下拉小块
    $("body").on('mouseover','#user-nav',function () {
        $(".myul").show();
    }).on('mouseout',function () {
        $('.myul').hide();
    }).on('click','.exit a',function (e) {
        e.preventDefault();
        var storage=window.sessionStorage;
        userDetailParams.userId = null;
        storage.clear();
        window.location.href='index.html';
    });
	
});

// todo 搜索按钮添加跳转
$('body').on('click','.searchBtn',function (e) {
	e.preventDefault();
    var kw =$(".inputbox").val();
    
    postParams = {};
    postParams.keywords = kw;
    postParams.curPage = 1;
    loadHtmlByPath("views/result.html");
})

// todo 登录后的样式
function loginsucc(name) {
    var html;
    html='<div id="user-nav">'+
		 '	    <a href="javascript:void(0);">欢迎回来'+name+'<span class="caret"></span></a>'+
		 '	    <ul class="myul">'+
		 '	        <li class="info-detail"><a href="javascript:void(0);">我的娱票儿</a></li>'+
		 '	        <li class="info-order"><a href="javascript:void(0);">我的订单</a></li>'+
		 '	        <li class="info-concerns"><a href="javascript:void(0);">我的关注</a></li>'+
		 '	        <li class="info-base"><a href="javascript:void(0);">个人信息</a></li>'+
		 '	        <li class="info-address"><a href="javascript:void(0);">收货地址</a></li>'+
		 '	        <li class="exit"><a href="javascript:void(0);">退出</a></li>'+
		 '	    </ul>'+
		 '   </div>';
    $('.user').html(html);
    
    $(".info-detail").on("click",function(){
    	loadHtmlByPath("views/user_detail.html");
    	m_u_detail.index = 0;
    });
    
    $(".info-order").on("click",function(){
    	loadHtmlByPath("views/user_detail.html");
    	m_u_detail.index = 0;
    });
    
    $(".info-concerns").on("click",function(){
    	loadHtmlByPath("views/user_detail.html");
    	m_u_detail.index = 1;
    });
    
    $(".info-base").on("click",function(){
    	loadHtmlByPath("views/user_detail.html");
    	m_u_detail.index = 2;
    });
    
    $(".info-address").on("click",function(){
    	loadHtmlByPath("views/user_detail.html");
    	m_u_detail.index = 3;
    });
}

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

/**
 * 在index.html 中 #maincontent 处导入指定的html文件
 * @param templatePath
 * @returns
 */
function loadHtmlByPath(templatePath){
	$("#maincontent").empty();
	$("#maincontent").load(templatePath);
}
