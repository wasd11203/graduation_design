package com.mticket.test;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.alibaba.fastjson.JSONObject;
import com.mticket.WebApplicationConfiguration;
import com.mticket.entity.OrderInfo;
import com.mticket.mapper.OrderMapper;
import com.mticket.mapper.ResourceDetailMapper;
import com.mticket.mapper.nav.ResourceNavigationMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = WebApplicationConfiguration.class)
@WebAppConfiguration
public class TestOrderMapper {

	@Autowired
	private OrderMapper orderMapper;
	
	@Test
	public void testOrder(){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("ticketId", 1);
		map.put("counts", 1);
		Object jobj = JSONObject.toJSON(orderMapper.getTicketCountsById(1));
		System.out.println(jobj);
		
		jobj = JSONObject.toJSON(orderMapper.updateTicketById(map));
		System.out.println(jobj);
	}
	
	@Test
	public void createOrder() {
		createOrderBaseInfo() ;
		createAssociationOrderWithResource();
		createAssociationOrderWithUser();
	}
	
	@Test
	public void createOrderBaseInfo() {
		OrderInfo order = new OrderInfo();
		Object jobj;
		order.setOrderId(1);
		order.setOrderType(1);
		order.setOrderType(1);
		order.setDisCountCode("1");
		order.setTotal(100.0F);
		order.setBuyerPhone("123465");
		order.setProvince("浙江");
		order.setCity("杭州");
		order.setArea("西湖");
		order.setMore("aa");
		order.setReceiveName("bb");
		order.setReceivePhone("15564");
		order.setIsFinish(0);
		order.setInTime(new Date());
		order.setReceiveType(1);
		jobj = JSONObject.toJSON(orderMapper.createOrderBaseInfo(order));
		System.out.println(jobj);
	}
	
	@Test
	public void createAssociationOrderWithResource(){
		OrderInfo order = new OrderInfo();
		Object jobj;
		order.setOrderId(1);
		order.setResourceId(1);
		order.setRegionThirdId(1);
		order.setVenueId(1);
		order.setSiteId(1);
		order.setTicketId(1);
		order.setTicketCounts(2);
		order.setTicketPrice(100.0F);

		jobj = JSONObject.toJSON(orderMapper.createAssociationOrderWithResource(order));
		System.out.println(jobj);
	}
	
	@Test
	public void createAssociationOrderWithUser(){
		OrderInfo order = new OrderInfo();
		Object jobj;
		order.setOrderId(1);
		order.setUserId(1);

		jobj = JSONObject.toJSON(orderMapper.createAssociationOrderWithUser(order));
		System.out.println(jobj);
	}
	
}
