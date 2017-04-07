package com.mticket.security.service.impl;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mticket.mapper.UserMapper;
import com.mticket.security.service.AccountService;

@Service("accountService")
public class AccountServiceImpl implements AccountService {

	protected final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private UserMapper userMapper;
	
	@Override
	public int createUser(Map<String, Object> map) {
		logger.debug("创建用户：[{}]",map);
		Integer userId = ((Long)System.currentTimeMillis()).intValue();
		map.put("userId", userId);
		map.put("birth", null);
		int counts = 0;
		counts += userMapper.createUserBase(map);
		counts += userMapper.createUserBind(map);
		return counts;
	}

	@Override
	public Map<String, Object> loadUser(Map<String, Object> map) {
		logger.debug("获取用户信息：[{}]",map);
		Map<String, Object> userInfo = userMapper.loadUserInfoByPhone(map);
		return userInfo;
	}

}
