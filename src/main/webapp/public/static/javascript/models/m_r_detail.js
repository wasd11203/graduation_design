var m_r_detail = {
	
	curRegion:null,
		
	resource:{},
	updateResource:function(resource){
		this.resource = resource;
		this.updateResourceView();
	},
	updateResourceView:function(){
		var $r_pic = $("#r_pic");
		var $r_name = $("#r_name");
		var $r_short_desc = $("#r_short_desc");
		var $r_time = $("#r_time");
		var $r_min_price = $("#r_min_price");
		
		$r_pic.empty();
		$r_name.empty();
		$r_short_desc.empty();
		$r_time.empty();
		$r_min_price.empty();
		
		var $r_img = $('<img src="'+this.resource.resourcePic+'" alt="">');
		for(i = 0 ;i<this.resource.thirdRegions.length;i++){
			if(resourceDetailParams.regionThirdId == this.resource.thirdRegions[i].regionThirdId){
				
				/**
				 * 每次刷新详情页时 默认选择 参数中指定的城市，第一个演出场馆，第一场演出
				 */
				this.curRegion = this.resource.thirdRegions[i];
				this.updateCurVenue(this.curRegion.venues[0]);
				this.updateSites(this.curVenue.sites);

				$r_pic.append($r_img);
				$r_name.text('['+this.resource.thirdRegions[i].regionName+']'+this.resource.resourceName);
				$r_short_desc.text(this.resource.resourceShortDesc);
				
				var venue = this.curVenue;
				var minPrice = this.curSite.tickets[0].ticketPrice;
				var siteTime = this.curSite.siteTime;
				
				confirmOrderParams.thirdId = this.curRegion.regionThirdId;
				confirmOrderParams.venueId = this.curVenue.venueId;
				confirmOrderParams.siteId = this.curSite.siteId;
				confirmOrderParams.resourceId = this.resource.resourceId;
				
				for(var j = 1;j<venue.sites.length;j++){
					if(minPrice > venue.sites[0].tickets[j].ticketPrice){
						minPrice = venue.sites[0].tickets[j].ticketPrice;
					}
				}
				
				$r_time.text(siteTime);
				$r_min_price.text(minPrice);
				
				break;
			}
		}
		
	},
	
	curVenue:null,
	updateCurVenue:function(curVenue){
		this.curVenue = curVenue;
		this.updateCurVenueView();
	},
	updateCurVenueView:function(){
		var $venue = $("#venue");
		var $venue_img = $(' <a href="javascript:void(0);"><img width="240" height="240" src="'+this.curVenue.venuePic+'"></a>');
		var $venue_caption = $('<div class="caption"></div>');
		
		var $venue_caption_span = $('<span></span>');
		var $venue_caption_span_a = $('<a href="javascript:void(0);" target="_blank">'+this.curVenue.venueName+'</a>');
		var $venue_caption_p = $('<p></p>');
		
		$venue.empty();
		
		$venue_caption_span.append($venue_caption_span_a);
		$venue_caption_p.html(' 地址：'+this.curVenue.venueAddress+'<br>电话:'+this.curVenue.venuePhone);
		
		$venue_caption.append($venue_caption_span);
		$venue_caption.append($venue_caption_p);
		
		$venue.append($venue_img);
		$venue.append($venue_caption);
		
		$venue.on("click",function(){
			alert("场馆详情");
			return false;
		});

	},
	
	sites:[],
	curSite:null,
	updateSites:function(sites){
		this.sites = sites;
		this.updateSitesView();
	},
	updateSitesView:function(){
		var $sites = $("#sites");
		$sites.empty();
		var selectSiteIndex = 0;
		
		for(var i = 0;i<this.sites.length;i++){
			var $item = $('<li class="col-md-2"></li>');
			var $item_a = $('<a href="javascript:void(0);" ></a>');
			
			$item.data("index",i);
			
			$item_a.append(this.sites[i].siteTime);
			$item.append($item_a);
			
			$sites.append($item);
			if(this.curSite){
				$item.addClass("active").siblings().removeClass("active");
				
				this.updateTickets(this.curSite.tickets);
				
			}else{
				if(i == selectSiteIndex){
					
					var site = this.sites[i];
					var j = 0;
					for(j = 0;j<site.tickets.length;j++){
						if(site.tickets[j].ticketCounts > 0){
							break;
						}
					}
					
					if(j < site.tickets.length){
						
						this.curSite = this.sites[i];
						$item.addClass("active").siblings().removeClass("active");
						
						this.updateTickets(this.curSite.tickets);
						
					}else{
						selectSiteIndex ++;
						// 当发现 此场次 没有票可售 时的操作在此处修改
						$item.css({"background": "#f1f1f1"}).removeClass("active");
					}
				}
			}
			
			$item.on("click",function(){
//				alert("刷新 票种列表");
				var index = $(this).data("index");
				m_r_detail.curSite = m_r_detail.sites[index];
				m_r_detail.updateTicket(m_r_detail.curSite.tickets);
				
				confirmOrderParams.siteId = m_r_detail.curSite.siteId;
				
				return false;
			});
		}
		
	}, 
	
	tickets:[],
	curTicket:null,
	updateTickets:function(tickets){		
		this.tickets = tickets;
		this.updateTicketsView();
	},
	updateTicketsView:function(){
		var $tickets = $("#tickets");
		
		for(var i = 0;i<this.tickets.length;i++){
			var $item = $('<li class="col-md-2"></li>');
			var $item_a = $('<a href="javascript:void(0);">'+this.tickets[i].ticketPrice +'元</a>');
			
			$item.data("index",i);
			
			$item.append($item_a);
			$tickets.append($item);
			
			if(this.curTicket){
				if(this.tickets[i].ticketId == this.curTicket.ticketId){
					$item.addClass("active").siblings().removeClass("active");
				}
			}
			$item.on("click",function(){
//				alert("调出数量插件");

				var index = $(this).data("index");
				m_r_detail.curTicket = m_r_detail.tickets[index] ;
				$(this).addClass("active").siblings().removeClass("active");
				
				confirmOrderParams.ticketId = m_r_detail.curTicket.ticketId;
				
				m_r_detail.updateBuyTicketPluginsView();
				$(".ticked_own").show();
			});
		}
	},
	
	updateBuyTicketPluginsView:function(){
		var $siteTime = $('#siteTime');
		var $ticketPrice = $('#ticketPrice');
		var $ticketCounts = $("#counts");
		var $ticketSubTotalPrice = $("#subtotalPrice");

		$siteTime.text(this.curSite.siteTime);
		$ticketPrice.text(this.curTicket.ticketPrice);
		$ticketCounts.text(1);
		
		confirmOrderParams.counts = parseInt($ticketCounts.text());
		
		this.calculate();
		
	},
	
	calculate :function (){
		var $ticketPrice = $('#ticketPrice');
		var $ticketCounts = $("#counts");
		var $ticketSubTotalPrice = $("#subtotalPrice");
		var $ticketTotalPrice = $("#total-price");
		
		var floatPrice = 0;
		var intCounts = 0;
		
		floatPrice = parseFloat($ticketPrice.text()).toFixed(2)
		intCounts = parseInt($ticketCounts.text());
		
		$ticketSubTotalPrice.text(floatPrice*intCounts);
		$ticketTotalPrice.text(floatPrice*intCounts);
	},
	
	hotSellList:[],
	updateHotSellList:function(hotSellList){
		this.hotSellList = hotSellList;
		this.updateHotSellListView();
	},
	updateHotSellListView:function(){
		
		var $hotSell_container_div = $("#hotSell");
		
		var $hotSell_container_ul = $("<ul></ul>");
		
		$hotSell_container_div.empty();
		
		for(var i = 0;i<this.hotSellList.length;i++){
			
			if(i==0){
				
				var $first_item = $('<dl class="media hot_top_one"></dl>');
				
				var $first_item_dt = $('<dt class="media-left"></dt>');
				var $first_item_dt_a = $('<a href="javascript:void(0);"></a>');
				var $first_item_dt_a_img = $('<img width="82" height="108" src="'+this.hotSellList[i].RESOURCE_PIC+'" data-he="ad_rxbd_img">');
				
				var $first_item_dd = $('<dd class="media-body txt"></dd>');
				var $first_item_dd_name = $('<p class="tt"><a href="javascript:void(0);">['+this.hotSellList[i].THIRD_NAME+']'+this.hotSellList[i].RESOURCE_NAME+'</a></p>');
				var $first_item_dd_time = $(' <p class="ti f12">'+this.hotSellList[i].SITE_TIME+'</p>');
				var $first_item_dd_venue = $('<p class="pl f12">'+this.hotSellList[i].VENUE_NAME+'</p>');
				var $first_item_dd_minPrice = $('<p class="pr f12"><big class="green">'+this.hotSellList[i].MIN_PRICE+'</big>元起</p>');
			
				$first_item.data("index",i);
				
				$first_item_dd.append($first_item_dd_name);
				$first_item_dd.append($first_item_dd_time);
				$first_item_dd.append($first_item_dd_venue);
				$first_item_dd.append($first_item_dd_minPrice);
				
				$first_item_dt_a.append($first_item_dt_a_img);
				$first_item_dt.append($first_item_dt_a);
				
				$first_item.append($first_item_dt);
				$first_item.append($first_item_dd);
			
				$hotSell_container_div.append($first_item);
				
				$first_item.on("click",function(){
					var index = $(this).data("index");
					
					var curClick = m_r_detail.hotSellList[index];
					
					resourceDetailParams.resourceId = curClick.RESOURCE_ID;
					resourceDetailParams.regionThirdId = curClick.THIRD_ID;
					
					// 清空内容页，并导入新页
					loadHtmlByPath("views/resource_detail.html");
					
//					alert("资源详细信息");
					return false;
				});
				
			}else{
				
				var $hotSell_container_li = $('<li class="clearfix" ></li>');
				
				$hotSell_container_li.data("index",i);
				
				var $hotSell_container_li_a = $('<a href="javascript:void(0);">['+this.hotSellList[i].THIRD_NAME+']'+this.hotSellList[i].RESOURCE_NAME+'</a>');
				$hotSell_container_li.append($hotSell_container_li_a);
				
				$hotSell_container_ul.append($hotSell_container_li);

				$hotSell_container_div.append($hotSell_container_ul);
				
				$hotSell_container_li.on("click",function(e){
//					alert("资源详细");
					var index = $(this).data("index");
					
					var curClick = m_r_detail.hotSellList[index];
					
					resourceDetailParams.resourceId = curClick.RESOURCE_ID;
					resourceDetailParams.regionThirdId = curClick.THIRD_ID;
					
					// 清空内容页，并导入新页
					loadHtmlByPath("views/resource_detail.html");
					
//					alert("资源详细信息");
					return false;
				});
			}
		}
	},
};
