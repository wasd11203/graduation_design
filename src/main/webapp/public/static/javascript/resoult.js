
function loadSearchNav(){

	$.ajax({
		url : 'resource/searchByMark',
		type : 'POST',
		dataType : "json",
		data:postParams,
		success:function(data){
			console.log(data);
			m_resoult.updateCityList(data.cityList);
			m_resoult.updateResourceCateList(data.resourceNav);
			m_resoult.updateTimeList(timeOptions);
			m_resoult.updateResultList(data.resourceList);
		},
		error:function(data){
			alert("fail");
		}
			
	})
	
}