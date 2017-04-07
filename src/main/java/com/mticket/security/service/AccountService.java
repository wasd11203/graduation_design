package com.mticket.security.service;

import java.util.Map;

public interface AccountService {

	public int createUser(Map<String, Object> map);

	public Map<String, Object> loadUser(Map<String, Object> map);
	
}
