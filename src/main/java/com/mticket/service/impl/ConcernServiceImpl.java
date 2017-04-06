package com.mticket.service.impl;

import java.util.Date;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mticket.mapper.ConcernMapper;
import com.mticket.service.ConcernService;

@Service("concernService")
public class ConcernServiceImpl implements ConcernService{
	
	protected final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private ConcernMapper concernMapper;
	
	@Override
	public int cancelConcern(Map<String, Object> map) {
		logger.debug("SERVICE--取消关注:[{}]",map);
		map.put("isDel", 1);
		return concernMapper.updateUserConcernByConcernId(map);
	}

	@Override
	public int createConcernByUserId(Map<String, Object> map) {
		logger.debug("SERVICE--创建关注:[{}]",map);
		map.put("concernId", ((Long)System.currentTimeMillis()).intValue());
		map.put("inTime", new Date());
		map.put("isDel", 0);
		return concernMapper.createConcernByUserId(map);
	}
}
