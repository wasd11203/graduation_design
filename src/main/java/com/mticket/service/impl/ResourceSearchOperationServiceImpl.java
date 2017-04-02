package com.mticket.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mticket.mapper.ResourceSearchOperationMapper;
import com.mticket.service.ResourceSearchOperationService;

@Service("resourceSearchOperationService")
public class ResourceSearchOperationServiceImpl implements ResourceSearchOperationService{

	@Autowired
	private ResourceSearchOperationMapper resourceSearchMapper;
	
	@Override
	public List<Map<String, Object>> searchResourceByMark(Map<String, Object> map) {
		return resourceSearchMapper.searchResourceByMark(map);
	}

}
