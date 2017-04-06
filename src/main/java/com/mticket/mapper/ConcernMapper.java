package com.mticket.mapper;

import java.util.Map;

public interface ConcernMapper {
	
	public int createConcernByUserId(Map<String, Object> map);
	
	public int updateUserConcernByConcernId(Map<String, Object> map);
}
