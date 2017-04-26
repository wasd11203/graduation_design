package com.mticket.redis;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.mticket.WebApplicationConfiguration;
import com.mticket.util.redis.RedisRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = WebApplicationConfiguration.class)
@WebAppConfiguration
public class TestRedis {

	@Autowired
	private RedisRepository redisRepository;
	
	@Test
	public void testRedis (){
		redisRepository.saveToRedis("user", "123");
		Object o = redisRepository.getFromRedis("user");
		redisRepository.delFromRedis("user");
		System.out.println(o);
		redisRepository.saveToRedis("verifyCode", "1234", 60L, TimeUnit.SECONDS);
		o = redisRepository.getFromRedis("verifyCode");
		System.out.println(o);
	}
	
	
}
