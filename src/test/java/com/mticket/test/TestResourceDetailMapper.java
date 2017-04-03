package com.mticket.test;

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
import com.mticket.mapper.ResourceSearchOperationMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = WebApplicationConfiguration.class)
@WebAppConfiguration
public class TestResourceDetailMapper {

	@Autowired
	private ResourceSearchOperationMapper resourceSearchOperationMapper;
	
	@Test
	public void resourceSearchOperation(){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("regionThirdId", 1);
		map.put("resourceTopId", 1);
		map.put("resourceSecId", 1);
		map.put("resourceThirdId", 1001);
//		map.put("minTime", new Date());
//		map.put("maxTime", new Date());
		
		Object jobj = JSONObject.toJSON(resourceSearchOperationMapper.searchResourceByMark(map));
		System.out.println(jobj);
	}
	
	
}
