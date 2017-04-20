var m_u_detail = {
		
	index : '',
		
	user:{},
	updateUser:function(user){
		this.user = user;
		this.updateUserView();
	},
	updateUserView:function(){
		var $icon = $("#icon");
		if(this.user.icon){
			$icon.attr("src",this.user.icon);
		}else{
			$icon.attr("src","static/images/defaultpic.gif");
		}
		
		if(!this.index){
			this.index = 0;
		}
		
		// 制作一个包含当前用户基本信息以及绑定信息的对象
		var use_baseInfoAndBindInfo = {};
		use_baseInfoAndBindInfo.bindInfo = this.user.bindInfo;
		use_baseInfoAndBindInfo.birth = this.user.birth;
		use_baseInfoAndBindInfo.gender = this.user.gender ;
		use_baseInfoAndBindInfo.icon = this.user.icon;
		use_baseInfoAndBindInfo.name = this.user.name;
		use_baseInfoAndBindInfo.nickname = this.user.nickname;
		use_baseInfoAndBindInfo.password = this.user.password;
		use_baseInfoAndBindInfo.userId = this.user.userId;
		
		// to do ... ... 渲染视图 
		this.updateOrders(this.user.orders);
		this.updateConcerns(this.user.concerns);
		this.updateBaseAndBindInfo(use_baseInfoAndBindInfo);
		this.updateAddre(this.user.addresses);
		
		$("#dtl-nav  li").eq(this.index).trigger("click");
	},
	
	addresses:[],
	curAddr:null,
	updateAddre:function(addresses){
		this.addresses = addresses;
		this.updateAddreView();
	},
	updateAddreView:function(){
		
		var $address_containter = $("#address").parent();

		$(".tbd .adr_item").remove();
		
		for(var i = 0;i<this.addresses.length;i++){
		
			if(!this.addresses[i].addressId){
				continue;
			}
			
			var $adr_item_tr = $('<tr class="adr_item" data-id="47520b9d12ec42279756af177dc6e58e" data-isdefault="1" data-proid="1" data-cityid="0" data-disid="17" data-addr="120"></tr>');
			var $item_name = $('<td>'+this.addresses[i].receiveName+'</td>');
			var $item_phone = $('<td>'+this.addresses[i].receivePhone+'</td>');
			var $item_location = $('<td>'+this.addresses[i].province+'(省/直辖市)'+this.addresses[i].city+'(市)'+this.addresses[i].area+'(区/县)'+this.addresses[i].more+'</td>');
			var $item_optoin = $('<td></td>');
			var $option_default = $('<span class="label label-success">默认收货地址<i></i></span>');
			var $option_update = $('<span class="update-btn bluet">修改<i></i></span> ');
			var $option_del = $('<span class="remove-btn bluet">删除</span>');
			
			$option_update.data("index",i);
			$option_del.data("index",i);
			
			if(this.addresses[i].isDefault == 1){
				$item_optoin.append($option_default);
			}
			$item_optoin.append($option_update);
			$item_optoin.append($option_del);
			
			$adr_item_tr.append($item_name);
			$adr_item_tr.append($item_phone);
			$adr_item_tr.append($item_location);
			$adr_item_tr.append($item_optoin);
			
			$address_containter.append($adr_item_tr);
			
			$option_update.on("click",function(){
				alert("弹出修改框");
				
				return false;
			});
			$option_del.on("click",function(){
//				alert("删除");
				var index = $(this).data("index");
				var addressId = m_u_detail.addresses[index].addressId;
				delAddressAction(addressId);
				return false;
			});
			
		}
		
		initProvinceSelectOptions();
		
	},
	
	baseAndBindInfo:{},
	updateBaseAndBindInfo:function(baseAndBindInfo){
		this.baseAndBindInfo = baseAndBindInfo;
		this.updateBaseAndBindInfoView();
	},
	updateBaseAndBindInfoView:function(){
		var $nickname = $("#nickname");
		var $name = $("#name");
		
		$nickname.val(this.baseAndBindInfo.nickname);
		$name.val(this.baseAndBindInfo.name);
		
		baseAndBindParams = {
			userId:this.user.userId,
			password:this.user.password,
			nickname:this.user.nickname,
			name:this.user.name,
			birth:new Date(this.user.birth),
			gender:this.user.gender,
			icon:this.user.icon
		};
		
		initBirthSelect(this.baseAndBindInfo.birth);
		
		if(this.baseAndBindInfo.gender == 0){
			$("#female").attr("checked","");
		}else{
			$("#male").attr("checked","");
		}
	},
	
	concerns:[],
	curConcerns:null,
	updateConcerns:function(concerns){
		this.concerns = concerns;
		this.updateConcernsView();
	},
	updateConcernsView:function(){
		console.log("渲染关注视图");
		for(var i = 0 ;i<this.concerns.length;i++){
			
			if(!this.concerns[i].concernId){
				continue;
			}
		}
	},
	
	orders:[],
	curOrder:null,
	updateOrders:function(orders){
		this.orders = orders;
		this.updateOrdersView();
	},
	updateOrdersView:function(){
		var $orders = $("#orders");
		$orders.empty();
		
		for(var i = 0;i<this.orders.length;i++){
			if(!this.orders[i].orderId){
				continue;
			}
			
			var $item = $("<li></li>");
			
			// 订单 头部 
			var $order_header = $('<div class="row info_header"></div>');
			
			var $header_div0 = $('<div class="col-md-3"></div>');
			var $header_div0_p = $('<p>订单编号：</p>');
			var $header_div0_p_span = $('<span>'+(0-this.orders[i].orderId >0?(0-this.orders[i].orderId):this.orders[i].orderId )+'</span>');
			
			var $header_div1 = $('<div class="col-md-3"></div>');
			var $header_div1_p = $('<p>时间：</p>');
			var $header_div1_p_span = $('<span>'+this.orders[i].inTime+'</span>');
			
			var $header_div2 = $('<div class="col-md-2"></div>');
			var $header_div2_p = $('<p>取票类型：</p>');
			var $header_div2_p_span = $('<span>快递</span>');
			
			var $header_div3 = $('<div class="col-md-2 uploadCard"></div>');
			
			var $header_div4 = $('<div class="col-md-2 stu"></div>');
			var $header_div4_p = $('<p>状态：</p>');
			var $header_div4_p_span = $('<span>待支付</span>');
			
			if(this.orders[i].isFinish == 1){
				$header_div4_p_span = $('<span>已支付</span>');
			}else if(this.orders[i].isFinish == 2){
				// to do ... 其他状态
				$header_div4_p_span = $('<span>已取消</span>');
			}
			
			// 订单相关信息
			var $order_info = $('<div class="row order_info"></div>');
			// 订单中购买的资源信息
			var $info_resource_div = $('<div class="col-md-8 o_i_des"></div>');
			
			var $resource_dl = $('<dl></dl>');
			
			var $resource_dl_dt = $('<dt></dt>');
			var $resource_dl_dt_img = $('<img src="http://static.show.wepiao.com/thumb/auto/120/160/http://static.show.wepiao.com/upload/9/1cc/fbea1/91cc8fbea1beb164bd6e1ab601ba0892.jpg?v=cd221" alt=""/>');
			
			var $resource_dl_dd = $('<dd></dd>');
			var $resource_dl_dd_name = $('<p class="t n">['+this.orders[i].resources[0].regionThirdName+']'+this.orders[i].resources[0].resourceName+'</p>');
			var $resource_dl_dd_venue = $('<p class="t p">'+this.orders[i].resources[0].venueName+'</p>');
			var $resource_dl_dd_time = $('<p class="t t">'+this.orders[i].resources[0].siteTime+'</p>');
			
			var $resource_dl_dd_div = $('<div class="t s clearfix"></div>');
			var $resource_dl_dd_div_counts = $('<p class="l"><span>数量：</span><span>'+this.orders[i].resources[0].ticketCounts+'</span>张</p>');
			var $resource_dl_dd_div_total = $('<p class="r"><label>订单金额：</label><span>'+this.orders[i].total+'</span>元</p>');
			
			var $resource_dl_dd_clearfix = $('<ul class="arealist clearfix"><li></li></ul>');
			
			// 购买者的信息
			var $order_buyer_info = $('<div class="col-md-4 o_i_piao"></div>');
			
			var $buyer_info = $('<ul></ul>');
			var $buyer_info_phone = $('<li>手机号码：<label>'+this.orders[i].buyerPhone+'</label></li>');
			var $buyer_info_receiveName = $('<li>收票人姓名：<label>'+this.orders[i].receiveName+'</label></li>');
			var $buyer_info_receivePhone = $('<li>收票人手机：<label>'+this.orders[i].receivePhone+'</label></li>');
			var $buyer_info_receiveAddress = $('<li><label>地址：</label>'+this.orders[i].province+"(省/直辖市)"+this.orders[i].city+"(市)"+this.orders[i].area+'(区/县)</li>');
			
			var $option = $('<div class="op"></div>');
			
			var $option_isCancel = $('<a class="opbtn cancel" href="javascript:void(0);" data-he="user_me_qxdd">订单已取消</a>');
			var $option_cancel = $('<a class="opbtn cancel" href="javascript:void(0);" data-he="user_me_qxdd">取消订单</a>'); 	
			var $option_continue = $('<a class="opbtn pay" href="javascript:void(0);" data-he="user_me_gobuy">继续付款 <b id="time_container_0"> </b></a>');
			var $option_finish = $('<a class="opbtn pay" href="javascript:void(0);" data-he="user_me_gobuy">已完成订单 <b id="time_container_0"> </b></a>');
			
			if(this.orders[i].isFinish == 0){
				
				$option_cancel = $option_cancel;
				$option_continue = $option_continue;
				
				$option_cancel.data("index",i);
				$option_continue.data("index",i);
				
				$option_cancel.on("click",function(){
					var index = $(this).data("index");
					var params = {"orderId":m_u_detail.orders[index].orderId};
					
					cancelOrderAction (params);
					
					return false;
				});
				
				$option_continue.on("click",function(){
					var index = $(this).data("index");
					var params = {"orderId":m_u_detail.orders[index].orderId};
					continuePayAction(params);
					
					return false;
				});
				
			}else if(this.orders[i].isFinish == 1){
				$option_cancel = '';
				$option_continue = $option_finish;
				
			}else if(this.orders[i].isFinish == 2){
//				alert("订单已取消");
				$option_cancel = $option_isCancel;
				$option_continue = '';
			}
			
			// 头部
			$header_div0_p.append($header_div0_p_span);
			$header_div0.append($header_div0_p);
			
			$header_div1_p.append($header_div1_p_span);
			$header_div1.append($header_div1_p);
			
			$header_div2_p.append($header_div2_p_span);
			$header_div2.append($header_div2_p);
			
			$header_div4_p.append($header_div4_p_span);
			$header_div4.append($header_div4_p);
			
			$order_header.append($header_div0);
			$order_header.append($header_div1);
			$order_header.append($header_div2);
			$order_header.append($header_div3);
			$order_header.append($header_div4);
			
			// 订购资源信息
			$resource_dl_dt.append($resource_dl_dt_img);
			
			$resource_dl_dd_div.append($resource_dl_dd_div_counts);
			$resource_dl_dd_div.append($resource_dl_dd_div_total);
			
			$resource_dl_dd.append($resource_dl_dd_name);
			$resource_dl_dd.append($resource_dl_dd_venue);
			$resource_dl_dd.append($resource_dl_dd_time);
			$resource_dl_dd.append($resource_dl_dd_div);
			$resource_dl_dd.append($resource_dl_dd_clearfix);
			
			$resource_dl.append($resource_dl_dt);
			$resource_dl.append($resource_dl_dd);
			
			$info_resource_div.append($resource_dl);
			
			// 购买者信息
			$buyer_info.append($buyer_info_phone);
			$buyer_info.append($buyer_info_receiveName);
			$buyer_info.append($buyer_info_receivePhone);
			$buyer_info.append($buyer_info_receiveAddress);
			
			$option.append($option_cancel);
			$option.append($option_continue);
			
			$order_buyer_info.append($buyer_info);
			$order_buyer_info.append($option);
			
			// 组合页面
			$order_info.append($info_resource_div);
			$order_info.append($order_buyer_info);
			
			$item.append($order_header);
			$item.append($order_info);
			$orders.append($item);
		}
	}
		
};