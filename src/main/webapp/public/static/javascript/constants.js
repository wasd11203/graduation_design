var timeOptions = [
		{"id":1,"name":"今天","minTime":parseDate(1,true),"maxTime":parseDate(1,false)},
		{"id":2,"name":"明天","minTime":parseDate(2,true),"maxTime":parseDate(2,false)},
		{"id":3,"name":"本周内","minTime":parseDate(3,true),"maxTime":parseDate(3,false)},
		{"id":4,"name":"本周末","minTime":parseDate(4,true),"maxTime":parseDate(4,false)},
		{"id":5,"name":"一个月内","minTime":parseDate(5,true),"maxTime":parseDate(5,false)}
	];



var postParams = {
	keywords:'',
	regionThirdId:'',
	vanueId:'',
	resourceTopId:'',
	resourceSecId:'',
	resourceThirdId:'',
	minTime:'',
	maxTime:''
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