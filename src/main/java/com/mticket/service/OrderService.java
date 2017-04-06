package com.mticket.service;

import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.mticket.entity.OrderInfo;

/**
 * 订单相关的 的业务层接口
 * @author ganzhigang
 * 时间：2017年4月5日 下午3:33:41
 */
public interface OrderService {
	
	/**
	 * 获取指定票种的余票数
	 * @param ticketId
	 * @return
	 */
	public Map<String, Object> getTicketCountsById(Integer ticketId);
	/**
	 * 修改指定票种的余票数
	 * @param map
	 * @return
	 */
	public int updateTicketById(Map<String, Object> map);
	/**
	 * 生成预订单信息<br />
	 * 注：未生成正式订单
	 * @param map
	 * @return
	 */
	public Map<String, Object> getPreOrderInfo(Map<String, Object> map);
	
	/**
	 * 创建订单
	 * @param map
	 * @return
	 */
	public int createOrder(OrderInfo order);
	
	/**
	 * 获取订单的总额
	 * @param orderId
	 * @return
	 */
	public Map<String, Object> getOrderTotal(Integer orderId);
	
	/**
	 * 更新订单的状态
	 * @param orderId
	 * @return
	 */
	public int updateOrderSta(Map<String, Object> map);
	
	public JSONObject cancelOrder(Map<String, Object> map);
	
	public int delOrder(Map<String, Object> map);
}
