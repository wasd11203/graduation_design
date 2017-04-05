package com.mticket.service.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mticket.entity.ResourceDetail;
import com.mticket.mapper.ResourceDetailMapper;
import com.mticket.service.DetailInfoService;

@Service("detailInfoService")
public class DetailInfoServiceImpl implements DetailInfoService{

	@Autowired
	private ResourceDetailMapper resourceDetailMapper;
	
	@Override
	public ResourceDetail getResourceDetailInfo(Map<String, Object> map) {
		return resourceDetailMapper.selectResourceDetail(map);
	}

}
