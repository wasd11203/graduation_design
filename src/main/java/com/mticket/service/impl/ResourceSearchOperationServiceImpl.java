package com.mticket.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mticket.mapper.ResourceSearchOperationMapper;
import com.mticket.service.ResourceSearchOperationService;

@Service("resourceSearchOperationService")
public class ResourceSearchOperationServiceImpl implements ResourceSearchOperationService{

	protected final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private ResourceSearchOperationMapper resourceSearchMapper;
	
	@Override
	public List<Map<String, Object>> searchResourceByMark(Map<String, Object> map) {
		logger.debug("SERVICE--根据条件查询 资源的信息列表,参数：[{}]",map);
		return resourceSearchMapper.searchResourceByMark(map);
	}
	
	@Override
	public int getAllCounts(Map<String, Object> map) {
		logger.debug("SERVICE--根据条件查询 资源的信息列表总数,参数：[{}]",map);
		return resourceSearchMapper.getAllCounts(map);
	}

	@Override
	public List<Map<String, Object>> searchResource(Map<String, Object> map) {
		logger.debug("SERVICE--根据条件查询 资源的概要信息列表,参数：[{}]",map);
		return resourceSearchMapper.searchResource(map);
	}

}
