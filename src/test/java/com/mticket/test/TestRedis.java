package com.mticket.test;

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
	public void test(){
		
//		redisRepository.saveToRedis("a", "b");
//		redisRepository.saveToRedis("a", "c", 60L, TimeUnit.SECONDS);
		redisRepository.saveToRedis("a", new Object());
	}
	
	
}
