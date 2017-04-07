package com.mticket.mapper;

import java.util.Map;

import com.mticket.entity.UserDetail;

public interface UserMapper {
	
	public int createUserBase(Map<String, Object> map);
	public int createUserBind(Map<String, Object> map);
	
	public Map<String, Object> loadUserInfoByPhone(Map<String, Object> map);
	
	
	public UserDetail getUserDetailInfo(Integer userId);
	public int updateUserInfo(Map<String, Object> map);
	
	public int createAddress(Map<String, Object> map);
	public int updateAddressByAddressId(Map<String, Object> map);
	
	public int updateAddressByUserId(Map<String, Object> map);
	
	public int deleteAddressByAddressId(Integer addressId);
	
}
