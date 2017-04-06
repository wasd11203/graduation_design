package com.mticket.mapper;

import java.util.Map;

import com.mticket.entity.UserDetail;

public interface UserMapper {
	public UserDetail getUserDetailInfo(Integer userId);
	public int updateUserInfo(Map<String, Object> map);
	
	public int createAddress(Map<String, Object> map);
	public int updateAddressByAddressId(Map<String, Object> map);
	
	public int updateAddressByUserId(Map<String, Object> map);
	
	public int deleteAddressByAddressId(Integer addressId);
	
}
