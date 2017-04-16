
function loadResourceDetailAction(){
	$.ajax({
		url : 'detail/resource',
		type : 'POST',
		dataType : "json",
		data:resourceDetailParams,
		success:function(data){
			console.log(data);
			m_r_detail.updateResource(data);
		},
		error:function(data){
			alert("fail");
		}
			
	});
	
}

function loadHotSellAction(){
	m_r_detail.updateHotSellList(m_home.hotSellList);
}

function toConfirmOrder(){
	alert("去确认订单");
	loadHtmlByPath("views/confirm.html")
	
	return false;
}

function changeTicketCounts(counts){
	var $ticketCounts = $("#counts");
	var toCounts = parseInt($ticketCounts.text());
	
	toCounts+=counts;
	$ticketCounts.text(toCounts);
	
	confirmOrderParams.counts = parseInt($ticketCounts.text());
	
	m_r_detail.calculate();
	
}
