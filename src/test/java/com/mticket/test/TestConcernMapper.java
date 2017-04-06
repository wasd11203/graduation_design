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
import com.mticket.mapper.ConcernMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = WebApplicationConfiguration.class)
@WebAppConfiguration
public class TestConcernMapper {

	@Autowired
	private ConcernMapper concernMapper;
	
	@Test
	public void updateConcern (){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("concernId", 1);
		map.put("isDel", "1");
		
		Object jobj ;
		jobj = JSONObject.toJSON(concernMapper.updateUserConcernByConcernId(map));
		System.out.println(jobj);
	}
	
	@Test
	public void createConcern (){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("concernId", 2);
		map.put("userId", 1);
		map.put("resourceId", 1);
		map.put("regionId", 1);
		map.put("venueId", 1);
		map.put("siteId", 1);
		map.put("ticketId", 1);
		map.put("inTime", new Date());
		map.put("isDel", 0);
		
		Object jobj ;
		jobj = JSONObject.toJSON(concernMapper.createConcernByUserId(map));
		System.out.println(jobj);
	}
}
