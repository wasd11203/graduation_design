
function initEvents(){
	$(".nav li").on("click",function(){
//		alert($(this).index());
		
		$(this).find("a").css(
			{"color": "#4acbd6",
		     "font-weight": "700",
			}
		);
		$(this).siblings().find("a").css(
			{"color": "gray",
			"position": "relative",
			"display": "block",
			"padding": "10px 15px",
			"font-weight": "normal"
			}
		);
		
		var index = $(this).index();
		m_u_detail.index = index;
		$(".r-show").eq(index).siblings().hide();
		$(".r-show").eq(index).show();
	});
	
	$(".caption").on("click",function(){
		
		$("#dtl-nav li").eq(2).find("a").css(
			{"color": "#4acbd6",
			"font-weight": "700"
			}
		);
		$("#dtl-nav li").eq(2).siblings().find("a").css(
			{    "color": "gray",
				 "position": "relative",
		    	 "display": "block",
		    	 "padding": "10px 15px",
		    	 "font-weight": "normal"
			}
		);
		
		$(".r-show").eq(2).siblings().hide();
		$(".r-show").eq(2).show();
	});
}

function loadUserDetailInfo(){
	$.ajax({
		url : 'user/detail',
		type : 'POST',
		dataType : "json",
		data:userDetailParams,
		success:function(data){
			console.log(data);
			m_u_detail.updateUser(data);
			
		},
		error:function(data){
			alert("fail");
		}
			
	})
}