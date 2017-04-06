package com.mticket.mapper;

import java.util.Map;

import com.mticket.entity.OrderInfo;

/**
 * 订单的持久层
 * @author ganzhigang
 * 时间：2017年4月5日 下午4:05:04
 */
public interface OrderMapper {
 
	/**
	 * 获取根据条件生成 预订单的信息<br />
	 * 注：此时并未生成订单
	 * @param map
	 * @return
	 */
	public Map<String, Object> getPreOrderInfo(Map<String, Object> map);
	
	/**
	 * 修改指定票种的 余票数
	 * @param map
	 * @return
	 */
	public int updateTicketById(Map<String, Object> map);
	/**
	 * 获取指定票种的 余票数
	 * @param ticketId
	 * @return
	 */
	public Map<String, Object> getTicketCountsById(Integer ticketId);
	
	/**
	 * 生成 订单的基本信息
	 * @param order
	 * @return
	 */
	public int createOrderBaseInfo(OrderInfo order);
	/**
	 * 创建订单与资源的关系
	 * @param order
	 * @return
	 */
	public int createAssociationOrderWithResource(OrderInfo order);
	/**
	 * 创建 订单与用户的关系
	 * @param order
	 * @return
	 */
	public int createAssociationOrderWithUser(OrderInfo order);
	
	/**
	 * 根据 订单id 获取订单的总额
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
	
	public Map<String, Object> getOrderBaseInfoByOrderId(Integer orderId);
	
}
