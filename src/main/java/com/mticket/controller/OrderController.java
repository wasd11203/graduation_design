package com.mticket.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mticket.entity.paramsobj.ParamsOfOrder;
import com.mticket.service.OrderService;

@Controller
@RequestMapping("/order")
public class OrderController extends BasicController {

	@Autowired
	private OrderService orderService;

	@RequestMapping("/confirm")
	@ResponseBody
	public JSONObject confirmOrder(String thirdId, String venueId, String siteId, String ticketId, String resourceId,
			String counts) {
		logger.debug("确认预订单:", thirdId,venueId,siteId,ticketId,resourceId,counts);
		Integer buyCounts = null;
		Integer realBuyCounts = null;
		Integer suitCounts = null;
		Float ticketPrice = null;
		Float payMoney = null;
		Map<String, Object> preOrderInfo = null;
		JSONObject jobj = new JSONObject();

		if (counts != null && !counts.trim().isEmpty()) {
			buyCounts = new Integer(counts);
		}

		Map<String, Object> map = transforArgs(thirdId, venueId, siteId, ticketId, resourceId);

		int allCounts = (Integer) orderService.getTicketCountsById((Integer) map.get("ticketId")).get("TICKET_COUNTS");
		if (allCounts >= buyCounts) {
			map.put("counts", buyCounts*(-1));
			int update_res = orderService.updateTicketById(map);
			if (update_res > 0) {
				preOrderInfo = orderService.getPreOrderInfo(map);

				if (preOrderInfo != null) {
					suitCounts = ((Long)preOrderInfo.get("TICKET_COUNTS")).intValue();
					realBuyCounts = suitCounts * buyCounts;
					ticketPrice = (Float) preOrderInfo.get("TICKET_PRICE");
					payMoney = ticketPrice* buyCounts;
					preOrderInfo.put("TICKET_COUNTS", buyCounts);
					preOrderInfo.put("TICKET_REAL_COUNTS", realBuyCounts);
					preOrderInfo.put("TOTAL_PRICE", payMoney);
					
					jobj.put("code", 0);
					jobj.put("data", preOrderInfo);
				}
			}

		} else {
			jobj.put("code", 1);
			jobj.put("msg", "下单失败，请重试");
			logger.debug("确认订单失败:", thirdId,venueId,siteId,ticketId,resourceId,counts);
		}

		return jobj;
	}

	@RequestMapping("/exitConfirm")
	@ResponseBody
	public JSONObject exitConfirmOrder(String ticketId,String counts){
		
		logger.debug("取消预订单:", ticketId,counts);
		
		JSONObject jobj = new JSONObject();
		Integer buyCounts = null;
		Integer ticket = null;
		if (counts != null && !counts.trim().isEmpty()) {
			buyCounts = new Integer(counts);
		}
		if (ticketId != null && !ticketId.trim().isEmpty()) {
			ticket = new Integer(ticketId);
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("ticketId", ticket);
		map.put("counts", buyCounts);
		int update_res = orderService.updateTicketById(map);
		if(update_res > 0){
			jobj.put("code", 0);
		}else{
			jobj.put("code", 1);
		}
		
		return jobj;
	}
	
	private Map<String, Object> transforArgs(String thirdId, String venueId, String siteId, String ticketId,
			String resourceId) {
		
		logger.debug("参数转换",thirdId, venueId,siteId,ticketId);
		
		Map<String, Object> map = new HashMap<String, Object>();
		Integer third = null;
		Integer venue = null;
		Integer site = null;
		Integer ticket = null;
		Integer resource = null;

		if (thirdId != null && !thirdId.trim().isEmpty()) {
			third = new Integer(thirdId);
		}
		if (venueId != null && !venueId.trim().isEmpty()) {
			venue = new Integer(venueId);
		}
		if (siteId != null && !siteId.trim().isEmpty()) {
			site = new Integer(siteId);
		}
		if (resourceId != null && !resourceId.trim().isEmpty()) {
			resource = new Integer(resourceId);
		}
		if (ticketId != null && !ticketId.trim().isEmpty()) {
			ticket = new Integer(ticketId);
		}

		map.put("thirdId", third);
		map.put("venueId", venue);
		map.put("siteId", site);
		map.put("resourceId", resource);
		map.put("ticketId", ticket);

		return map;
	}

	@RequestMapping("/create")
	@ResponseBody
	public JSONObject createOrder(ParamsOfOrder order){
		
		logger.debug("创建订单:",order);
		
		JSONObject jobj = new JSONObject();
		int orderId = orderService.createOrder(order);
		String regionThirdName = order.getRegionThirdName();
		String resourceName = order.getResourceName();
		Integer isEnable = order.getIsEnable();
		jobj.put("code", 0);
		jobj.put("orderId", orderId);
		jobj.put("regionThirdName", regionThirdName);
		jobj.put("resourceName", resourceName);
		jobj.put("isEnable", isEnable);
		return jobj;
	}
}
