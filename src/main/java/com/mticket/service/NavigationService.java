package com.mticket.service;

import java.util.List;
import java.util.Map;

import com.mticket.entity.nav.region.RegionNavigation;
import com.mticket.entity.nav.region.RegionNavigationThird;
import com.mticket.entity.nav.resource.ResourceNavigationSec;

/**
 * 导航栏的业务接口
 * @author ganzhigang
 * 时间：2017年4月1日 下午3:29:40
 */
public interface NavigationService {

	/**
	 * 获取地区的所有导航栏列表
	 * 	如果 topId 不为 null 则获取指定地区的导航栏信息
	 * @param resourceTopId
	 * @return
	 */
	public List<RegionNavigation> getRegionListByResourceTopId(Integer resourceTopId);
	
	/**
	 * 获取地区的三级导航列表
	 * @return
	 */
	public List<RegionNavigationThird> getRegionThirdListByResourceTopId(Integer resourceTopId);
	
	/**
	 * 获取资源的一级分类列表(不包含一级列表的子列表信息)
	 * @return
	 */
	public List<Map<String,Object>> getTopResourceList();
	
	/**
	 * 获取在指定的一级资源列表以及指定的三级地区下的 资源的二级分类列表(包含三级列表的子列表信息)
	 * @return
	 */
	public List<ResourceNavigationSec> getResourceListByRegionThirdAndResourceTop(Map<String, Object> map);

	/**
	 * 获取资源的二级分类列表(包含二级列表的子列表信息)
	 * @return
	 */
	public List<ResourceNavigationSec> getSecResourceList(Integer resourceTopId); 
	
	
	
}
