var storage=window.sessionStorage;
var user = storage.user;

var timeOptions = [
		{"id":1,"name":"今天","minTime":parseDate(1,true),"maxTime":parseDate(1,false)},
		{"id":2,"name":"明天","minTime":parseDate(2,true),"maxTime":parseDate(2,false)},
		{"id":3,"name":"本周内","minTime":parseDate(3,true),"maxTime":parseDate(3,false)},
		{"id":4,"name":"本周末","minTime":parseDate(4,true),"maxTime":parseDate(4,false)},
		{"id":5,"name":"一个月内","minTime":parseDate(5,true),"maxTime":parseDate(5,false)}
	];

/**
 * 搜索资源时向后台发送的参数
 */
var postParams = {
	keywords:'',
	regionThirdId:'',
	vanueId:'',
	resourceTopId:'',
	resourceSecId:'',
	resourceThirdId:'',
	minTime:'',
	maxTime:'',
	curPage:''
};

var resourceDetailParams = {
	resourceId : '',
	regionThirdId:''
}

/**
 * 去确认订单时向后台发送的参数
 */
var confirmOrderParams = {
	thirdId:'',
	venueId:'',
	siteId:'',
	ticketId:'',
	resourceId:'',
	counts:''
};

var createOrderParams = {
		userId:'',
		orderType:1,
		receiveType:1,
		resourceId:'',
		resourceName:'',
		isEnable:'',
		regionThirdId:'',
		regionThirdName:'',
		venueId:'',
		siteId:'',
		ticketId:'',
		ticketCounts:'',
		ticketPrice:'',
		total:'',
		buyerPhone:'',
		province:'',
		city:'',
		area:'',
		more:'',
		receiveName:'',
		receivePhone:'',
		disCountCode:''
};

var confirmOrderCityList = [
	{
		"prov_name":'北京市',
		"prov_value":'1',
		"cityList":[{
			"city_name":'北京市',
			"city_value":'1',
			"areaList":[
				{
					'area_name':'东城区',
					'area_value':'1'
				},
				{
					'area_name':'西城区',
					'area_value':'2'
				},{
					'area_name':'崇文区',
					'area_value':'3'
				}]
		}]
	},
	{
		"prov_name":'天津市',
		"prov_value":'2',
		"cityList":[{
			"city_name":'天津市',
			"city_value":'1',
			"areaList":[
				{
					'area_name':'和平区',
					'area_value':'1'
				},
				{
					'area_name':'河东区',
					'area_value':'2'
				},{
					'area_name':'河西区',
					'area_value':'3'
				}]
		}]
	}
];

var userDetailParams = {
	userId:''
};

function parseDate(type,minFlag){
	var now = new Date();
	var temp = null;
	var target = null;
	var offset = null;
	
	switch(type){
		case 1 :
			if(minFlag){
				temp = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0);
			}else{
				temp = new Date(now.getFullYear(),now.getMonth(),now.getDate(),23,59,59);
			}
			break;
		case 2 : 
			offset = 1
			if(minFlag){
				temp = new Date(now.getFullYear(),now.getMonth(),now.getDate()+offset,0,0,0);
			}else{
				temp = new Date(now.getFullYear(),now.getMonth(),now.getDate()+offset,23,59,59);
			}
			break;
		case 3 :
			
			if(minFlag){
				offset = 1;
				temp = new Date(now.getFullYear(),now.getMonth(),now.getDate()+offset,0,0,0);
			}else{
				offset = 7-now.getDay();
				temp = new Date(now.getFullYear(),now.getMonth(),now.getDate()+offset,23,59,59);
			}
			break;
		case 4 :
			if(minFlag){
				offset = (5-now.getDay())>0?(5-now.getDay()):0;
				temp = new Date(now.getFullYear(),now.getMonth(),now.getDate()+offset,0,0,0);
			}else{
				offset = 7-now.getDay();
				temp = new Date(now.getFullYear(),now.getMonth(),now.getDate()+offset,23,59,59);
			}
			break;
		case 5 :
			if(minFlag){
				temp = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0);
			}else{
				offset = 30;
				temp = new Date(now.getFullYear(),now.getMonth(),now.getDate()+offset,23,59,59);
			}
			break;
	}
	
	return temp;
	
}

