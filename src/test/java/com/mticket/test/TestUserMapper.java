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
import com.mticket.mapper.UserMapper;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = WebApplicationConfiguration.class)
@WebAppConfiguration
public class TestUserMapper {

	@Autowired
	private UserMapper userMapper;
	
	@Test
	public void userDetail (){
		Object jobj ;
		jobj = JSONObject.toJSON(userMapper.getUserDetailInfo(1));
		System.out.println(jobj);
	}
	
	@Test
	public void updateUserInfo (){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("icon", "b");
		map.put("userId", 1);
		map.put("nickname", "wasd");
		map.put("name", "bbc");
		map.put("password", "11111");
		map.put("birth", new Date());
		map.put("gender", 1);
		
		Object jobj ;
		jobj = JSONObject.toJSON(userMapper.updateUserInfo(map));
		System.out.println(jobj);
	}
	
	@Test
	public void createAddress (){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("addressId", 3);
		map.put("userId", 1);
		map.put("province", "wasd");
		map.put("city", "bbc");
		map.put("area", "11111");
		map.put("more", "2");
		map.put("receiveName", "12313");
		map.put("receivePhone","sadf");
		map.put("isDefault", 1);
		
		Object jobj ;
		jobj = JSONObject.toJSON(userMapper.createAddress(map));
		System.out.println(jobj);
	}
	
	@Test
	public void updateAddress (){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("addressId", 2);
		map.put("more", "2");
		
		Object jobj ;
		jobj = JSONObject.toJSON(userMapper.updateAddressByAddressId(map));
		System.out.println(jobj);
	}
	
}
