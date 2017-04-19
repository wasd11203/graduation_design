package com.mticket.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.mticket.entity.OrderInfo;
import com.mticket.mapper.OrderMapper;
import com.mticket.service.OrderService;

@Service("orderService")
public class OrderServiceImpl implements OrderService {

	protected final Logger logger = LoggerFactory.getLogger(getClass());

	@Autowired
	private OrderMapper orderMapper;

	@Override
	public Map<String, Object> getPreOrderInfo(Map<String, Object> map) {
		logger.debug("SERVICE--获取预订单的信息：[{}]", map);
		return orderMapper.getPreOrderInfo(map);
	}

	@Override
	public int updateTicketById(Map<String, Object> map) {
		logger.debug("SERVICE--修改票种的余票数：[{}]", map);
		return orderMapper.updateTicketById(map);
	}

	@Override
	public Map<String, Object> getTicketCountsById(Integer ticketId) {
		logger.debug("SERVICE--获取指定票种的余票数：[{}]", ticketId);
		return orderMapper.getTicketCountsById(ticketId);
	}

	@Override
	public int createOrder(OrderInfo order) {
		logger.debug("SERVICE--创建订单：[{}]", order);
		Long orderId = System.currentTimeMillis();
		order.setOrderId(orderId.intValue());
		order.setInTime(new Date());
		order.setIsFinish(0);
		orderMapper.createAssociationOrderWithResource(order);
		orderMapper.createOrderBaseInfo(order);
		orderMapper.createAssociationOrderWithUser(order);

		return order.getOrderId();
	}

	@Override
	public Map<String, Object> getOrderTotal(Integer orderId) {
		logger.debug("SERVICE--获取订单总额：[{}]", orderId);
		return orderMapper.getOrderTotal(orderId);
	}

	@Override
	public int updateOrderSta(Map<String, Object> map) {
		logger.debug("SERVICE--修改订单状态:[{}]", map);
		return orderMapper.updateOrderSta(map);
	}

	@Override
	public JSONObject cancelOrder(Map<String, Object> map) {
		logger.debug("SERVICE--取消订单:[{}]", map);
		JSONObject jobj = new JSONObject();
		Integer order = null;
		Map<String, Object> baseInfo = null;
		
		order = (Integer) map.get("orderId");
		
		baseInfo = orderMapper.getOrderBaseInfoByOrderId(order);
		map.put("ticketId", baseInfo.get("TICKET_ID"));
		map.put("counts", baseInfo.get("TICKET_COUNTS"));

		int res = orderMapper.updateTicketById(map);
		if (res > 0) {
			if (baseInfo.get("ISFINISH") != null && (Integer) baseInfo.get("ISFINISH") == 1) {
				logger.debug("退款中... ... ");
			}
			
			map.put("isFinish", 2);
			orderMapper.updateOrderSta(map);
			
			jobj.put("code", 0);
			jobj.put("msg", "取消订单成功");
		} else {
			jobj.put("code", 2);
			jobj.put("msg", "取消订单失败");
		}

		return jobj;
	}

	@Override
	public int delOrder(Map<String, Object> map) {
		logger.debug("SERVICE--删除订单:[{}]", map);
		Integer order = null;
		Map<String, Object> baseInfo = null;
		
		order = (Integer) map.get("orderId");
		
		baseInfo = orderMapper.getOrderBaseInfoByOrderId(order);

		if (baseInfo.get("ISFINISH") == null || (Integer) baseInfo.get("ISFINISH") != 1) {
			map.put("ticketId", baseInfo.get("TICKET_ID"));
			map.put("counts", baseInfo.get("TICKET_COUNTS"));
			int res = orderMapper.updateTicketById(map);
			if(res <= 0){
				return 0;
			}
		}
		map.put("isDel", 1);
		
		return orderMapper.updateOrderSta(map);
	}

	@Override
	public List<Map<String, Object>> loadReceiveType() {
		return orderMapper.loadReciveType();
	}

}
