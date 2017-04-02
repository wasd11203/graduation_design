package com.mticket.mapper.nav;

import java.util.List;

import com.mticket.entity.nav.region.RegionNavigation;
import com.mticket.entity.nav.region.RegionNavigationSec;
import com.mticket.entity.nav.region.RegionNavigationThird;

/**
 * 地区导航栏  对应的 Dao
 * 1: 一级列表 ： 国内，国外,如：国内
 * 2: 二级列表： 华北，华南..., 如：华北
 * 3: 三级列表： 北京，河南... ,如：北京
 * @author ganzhigang
 * 时间：2017年4月1日 下午2:32:55
 */
public interface RegionNavigationMapper {
	/**
	 * 获取 指定的一级资源列表 下的 地区的 所有的地区列表(从一级列表开始)
	 * 	如果 resourceTopId 为 null 则获取所有的一级菜单下的所有菜单
	 * @param resourceTopId
	 * @return
	 */
	public List<RegionNavigation> loadRegionNavListByResourceTopId(Integer resourceTopId);
	
	/**
	 * 获取  指定的一级地区导航菜单下的 二级菜单及其子菜单
	 * @param topId
	 * @return
	 */
	public List<RegionNavigationSec> loadSecNavList(Integer regionTopId);
	
	/**
	 * 获取 指定的一级资源列表 下的  三级地区菜单
	 * 	如果 resourceTopId 为null 则获取所有的 三级地区菜单
	 * @param secId
	 * @return
	 */
	public List<RegionNavigationThird> loadThirdNavListByResourceTopId(Integer resourceTopId);
}
