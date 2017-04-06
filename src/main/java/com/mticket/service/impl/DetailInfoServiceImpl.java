package com.mticket.service.impl;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mticket.entity.ResourceDetail;
import com.mticket.mapper.ResourceDetailMapper;
import com.mticket.service.DetailInfoService;

@Service("detailInfoService")
public class DetailInfoServiceImpl implements DetailInfoService{

	protected final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private ResourceDetailMapper resourceDetailMapper;
	
	@Override
	public ResourceDetail getResourceDetailInfo(Map<String, Object> map) {
		logger.debug("SERVICE--获取指定资源的详细信息:[{}]",map);
		return resourceDetailMapper.selectResourceDetail(map);
	}

}
