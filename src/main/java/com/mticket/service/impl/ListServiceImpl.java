package com.mticket.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mticket.mapper.ListMapper;
import com.mticket.service.ListService;

@Service("listService")
public class ListServiceImpl implements ListService{

	@Autowired
	private ListMapper advertisingMapper;
	
	@Override
	public List<Map<String, Object>> getAdvertisingResourceList() {
		return advertisingMapper.getAdvertisingResourceList();
	}

	@Override
	public List<Map<String, Object>> getDiscountResourceList() {
		return advertisingMapper.getDiscountResourceList();
	}

	@Override
	public List<Map<String, Object>> getNearHostResourceList() {
		return advertisingMapper.getNearHostResourceList();
	}

	@Override
	public List<Map<String, Object>> getHotSellResourceList() {
		return advertisingMapper.getHotSellResourceList();
	}

	@Override
	public List<Map<String, Object>> getRecommendVenueList() {
		
		List<Map<String, Object>> list = advertisingMapper.getRecommendVenueList();
		
		for(Map<String, Object> item :list){
			Integer venueId = (Integer) item.get("VENUE_ID");
			item.put("resourceList", advertisingMapper.getNearResourceInVenueList(venueId));
		}
		
		return list;
	}

}
