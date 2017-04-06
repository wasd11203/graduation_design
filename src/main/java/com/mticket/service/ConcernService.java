package com.mticket.service;

import java.util.Map;

public interface ConcernService {
	
	public int createConcernByUserId(Map<String, Object> map);
	
	public int cancelConcern(Map<String, Object> map);
}
