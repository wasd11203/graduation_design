package com.mticket.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.mticket.WebApplicationConfiguration;
import com.mticket.service.UserService;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = WebApplicationConfiguration.class)
@WebAppConfiguration
public class TestDao {

	@Autowired
	private UserService userService;
	
	@Test
	public void test(){
		System.out.println(userService.saveToRedis("aa"));
	}
	
	
}
