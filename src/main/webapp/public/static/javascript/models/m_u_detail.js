var m_u_detail = {
		
	index : '',
		
	user:{},
	updateUser:function(user){
		this.user = user;
		this.updateUserView();
	},
	updateUserView:function(){
		var $icon = $("#icon");
		if(user.icon){
			$icon.attr("src",user.icon);
		}else{
			$icon.attr("src","static/images/defaultpic.gif");
		}
		
		if(!this.index){
			this.index = 0;
		}
		
		// to do ... ... 渲染视图 
		
		$(".r-show").eq(this.index).show();
		$(".r-show").eq(this.index).siblings().hide();
	},
	
	addresses:[],
	curAddr:null,
	updateAddre:function(address){
		this.address = address;
		this.updateAddreView();
	},
	updateAddreView:function(){
		
	},
	
	bindInfo:{},
	updateBind:function(bindInfo){
		this.bindInfo = bindInfo;
		this.updateBindInfoView();
	},
	updateBindInfoView:function(){
		// 需要将user 的基础信息也更新
	},
	
	concerns:[],
	curConcerns:null,
	updateConcerns:function(concerns){
		this.concerns = concerns;
		this.updateConcernsView();
	},
	updateConcernsView:function(){
		
	},
	
	orders:[],
	curOrder:null,
	updateOrders:function(orders){
		this.orders = orders;
		this.updateOrdersView();
	},
	updateOrdersView:function(){
		
	}
		
};