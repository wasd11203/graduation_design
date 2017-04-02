package com.mticket.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

	protected final Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private RegionNavigationMapper regionNavigatinoMapper;
	
	@Autowired
	private ResourceNavigationMapper resourceNavigationMapper;
	
	@Override
	public List<RegionNavigation> getRegionListByResourceTopId(Integer resourceTopId) {
		logger.debug("根据一级资源类别查询所有级别的地区列表,参数: "+resourceTopId);
		return regionNavigatinoMapper.loadRegionNavListByResourceTopId(resourceTopId);
	}
	
	@Override
	public List<RegionNavigationThird> getRegionThirdListByResourceTopId(Integer resourceTopId) {
		logger.debug("根据一级资源类别查询三级地区列表,参数: "+resourceTopId);
		return regionNavigatinoMapper.loadThirdNavListByResourceTopId(resourceTopId);
	}
	
	
	@Override
	public List<Map<String, Object>> getTopResourceList() {
		logger.debug("查询一级资源列表,无参数: ");
		return resourceNavigationMapper.loadTopResourceNavList();
	}
	
	@Override
	public List<ResourceNavigationSec> getResourceListByRegionThirdAndResourceTop(Map<String, Object> map) {
		logger.debug("根据传入的条件查询二级资源列表及其子列表,参数: "+map);
		return resourceNavigationMapper.loadNavListByRegionThirdAndResourceTop(map);
	}
	
	@Override
	public List<ResourceNavigationSec> getSecResourceList(Integer resourceTopId) {
		logger.debug("根据一级资源类别查询二级资源及其子列表,参数: "+resourceTopId);
		return resourceNavigationMapper.loadSecResourceNavList(resourceTopId);
	}



}
