package com.mticket.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.alibaba.fastjson.JSONObject;
import com.mticket.WebApplicationConfiguration;
import com.mticket.mapper.nav.RegionNavigationMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = WebApplicationConfiguration.class)
@WebAppConfiguration
public class TestRegionMapper {

	@Autowired
	private RegionNavigationMapper navMapper;
	
	@Test
	public void testRegionNav(){
		Object jobj = JSONObject.toJSON(navMapper.loadRegionNavListByResourceTopId(1));
		System.out.println(jobj);
		jobj = JSONObject.toJSON(navMapper.loadSecNavList(1));
		System.out.println(jobj);
		jobj = JSONObject.toJSON(navMapper.loadThirdNavListByResourceTopId(1));
		System.out.println(jobj);
	}
	
}
