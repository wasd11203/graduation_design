package com.mticket.service.impl;

import java.util.Date;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		logger.debug("获取预订单的信息：",map);
		return orderMapper.getPreOrderInfo(map);
	}

	@Override
	public int updateTicketById(Map<String, Object> map) {
		logger.debug("修改票种的余票数：",map);
		return orderMapper.updateTicketById(map);
	}

	@Override
	public Map<String, Object> getTicketCountsById(Integer ticketId) {
		logger.debug("获取指定票种的余票数：",ticketId);
		return orderMapper.getTicketCountsById(ticketId);
	}

	@Override
	public int createOrder(OrderInfo order) {
		logger.debug("创建订单：",order);
		Long orderId = System.currentTimeMillis();
		order.setOrderId(orderId.intValue());
		order.setInTime(new Date());
		order.setIsFinish(0);
		orderMapper.createAssociationOrderWithResource(order);
		orderMapper.createOrderBaseInfo(order);
		orderMapper.createAssociationOrderWithUser(order);
		
		return order.getOrderId();
	}

}
