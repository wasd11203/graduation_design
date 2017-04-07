package com.mticket.security.service.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mticket.mapper.UserMapper;
import com.mticket.security.service.AccountService;

@Service("accountService")
public class AccountServiceImpl implements AccountService {

	@Autowired
	private UserMapper userMapper;
	
	@Override
	public int createUser(Map<String, Object> map) {
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
		Map<String, Object> userInfo = userMapper.loadUserInfoByPhone(map);
		return userInfo;
	}

}
