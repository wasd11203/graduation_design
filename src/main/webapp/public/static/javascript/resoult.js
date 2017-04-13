
function loadSearchNav(){

	$.ajax({
		url : 'resource/searchByMark',
		type : 'POST',
		dataType : "json",
		data:postParams,
		success:function(data){
			console.log(data);
			m_resoult.updateCityList(data.cityList);
		},
		error:function(data){
			alert("fail");
		}
			
	})
	
}