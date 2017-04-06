package com.mticket.service.impl;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mticket.entity.UserDetail;
import com.mticket.mapper.UserMapper;
import com.mticket.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {

	protected final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private UserMapper userMapper;

	@Override
	public UserDetail getUserDetailInfo(Integer userId) {
		logger.debug("SERVICE -- 获取 指定用户的详细信息:[{}]",userId);
		return userMapper.getUserDetailInfo(userId);
	}

	@Override
	public int updateUserInfo(Map<String, Object> map) {
		logger.debug("SERVICE--更新 指定用户的详细信息:[{}]",map);
		return userMapper.updateUserInfo(map);
	}

	@Override
	public int createAddress(Map<String, Object> map) {
		logger.debug("SERVICE--新增收货地址:[{}]",map);
		int res = 0;
		map.put("addressId", ((Long)System.currentTimeMillis()).intValue());
		if (map.get("isDefault") != null && (Integer) map.get("isDefault") == 1) {
			logger.debug("如果新增的收货地址设定为默认则先将其他收货地址设为非默认");
			map.put("isDefault", 0);
			userMapper.updateAddressByUserId(map);
			map.put("isDefault", 1);
		} 
		res = userMapper.createAddress(map);
		return res;
	}


	@Override
	public int updateAddressByAddressId(Map<String, Object> map) {
		logger.debug("SERVICE--更新收货地址:[{}]",map);
		if (map.get("isDefault") != null && (Integer) map.get("isDefault") == 1) {
			logger.debug("如果要更新的收货地址设定为默认则先将其他收货地址设为非默认");
			map.put("isDefault", 0);
			userMapper.updateAddressByUserId(map);
			map.put("isDefault", 1);
		} 
		
		return userMapper.updateAddressByAddressId(map);
	}

	@Override
	public int deleteAddressByAddressId(Integer addressId) {
		logger.debug("SERVICE-- 删除收货地址：[{}]",addressId);
		return userMapper.deleteAddressByAddressId(addressId);
	}

}
