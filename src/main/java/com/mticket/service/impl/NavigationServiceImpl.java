package com.mticket.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mticket.entity.nav.region.RegionNavigation;
import com.mticket.entity.nav.region.RegionNavigationThird;
import com.mticket.entity.nav.resource.ResourceNavigationSec;
import com.mticket.mapper.nav.RegionNavigationMapper;
import com.mticket.mapper.nav.ResourceNavigationMapper;
import com.mticket.service.NavigationService;

@Service("navigationService")
public class NavigationServiceImpl implements NavigationService {

	@Autowired
	private RegionNavigationMapper regionNavigatinoMapper;
	
	@Autowired
	private ResourceNavigationMapper resourceNavigationMapper;
	
	@Override
	public List<RegionNavigation> getRegionListByResourceTopId(Integer resourceTopId) {
		return regionNavigatinoMapper.loadRegionNavListByResourceTopId(resourceTopId);
	}
	
	@Override
	public List<RegionNavigationThird> getRegionThirdListByResourceTopId(Integer resourceTopId) {
		return regionNavigatinoMapper.loadThirdNavListByResourceTopId(resourceTopId);
	}
	
	
	@Override
	public List<Map<String, Object>> getTopResourceList() {
		return resourceNavigationMapper.loadTopResourceNavList();
	}
	
	@Override
	public List<ResourceNavigationSec> getResourceListByRegionThirdAndResourceTop(Map<String, Object> map) {
		return resourceNavigationMapper.loadNavListByRegionThirdAndResourceTop(map);
	}
	
	@Override
	public List<ResourceNavigationSec> getSecResourceList(Integer resourceTopId) {
		return resourceNavigationMapper.loadSecResourceNavList(resourceTopId);
	}



}
