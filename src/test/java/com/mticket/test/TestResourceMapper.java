package com.mticket.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.alibaba.fastjson.JSONObject;
import com.mticket.WebApplicationConfiguration;
import com.mticket.mapper.ResourceDetailMapper;
import com.mticket.mapper.nav.ResourceNavigationMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = WebApplicationConfiguration.class)
@WebAppConfiguration
public class TestResourceMapper {

	@Autowired
	private ResourceDetailMapper resourceDetailMapper;
	
	@Test
	public void testResourceDetail(){
		Object jobj = JSONObject.toJSON(resourceDetailMapper.selectResourceDetail(8));
		System.out.println(jobj);

	}
	
}
