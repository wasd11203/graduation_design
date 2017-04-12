package com.mticket.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mticket.mapper.ListMapper;
import com.mticket.service.ListService;

@Service("listService")
public class ListServiceImpl implements ListService{

	protected final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private ListMapper advertisingMapper;
	
	@Override
	public List<Map<String, Object>> getAdvertisingResourceList() {
		logger.debug("获取广告资源列表");
		return advertisingMapper.getAdvertisingResourceList();
	}

	@Override
	public List<Map<String, Object>> getDiscountResourceList() {
		logger.debug("获取 特惠看 资源列表");
		return advertisingMapper.getDiscountResourceList();
	}

	@Override
	public List<Map<String, Object>> getLatestInfoResourceList() {
		logger.debug("获取 最新资讯 资源列表");
		return advertisingMapper.getLatestInfoResourceList();
	}

	@Override
	public List<Map<String, Object>> getHotSellResourceList() {
		logger.debug("获取 热销资源 资源列表");
		return advertisingMapper.getHotSellResourceList();
	}

	@Override
	public List<Map<String, Object>> getRecommendVenueList() {
		logger.debug("获取 场馆推荐 资源列表");
		
		List<Map<String, Object>> list = advertisingMapper.getRecommendVenueList();
		logger.debug("1.获取场馆列表：[{}]",list);
		for(Map<String, Object> item :list){
			Integer venueId = (Integer) item.get("VENUE_ID");
			List<Map<String, Object>> temp = advertisingMapper.getNearResourceInVenueList(venueId);
			item.put("resourceList", temp);
			logger.debug("2.获取[{}]场馆的最近资源列表：[[]]",item,temp);
		}
		
		return list;
	}

}
