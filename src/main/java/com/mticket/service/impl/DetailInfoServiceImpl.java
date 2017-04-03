package com.mticket.service.impl;

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
	public ResourceDetail getResourceDetailInfo(Integer resourceId) {
		return resourceDetailMapper.selectResourceDetail(resourceId);
	}

}
