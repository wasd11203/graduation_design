package com.mticket.mapper.nav;

import java.util.List;
import java.util.Map;

import com.mticket.entity.nav.resource.ResourceNavigationSec;
import com.mticket.entity.nav.resource.ResourceNavigationThird;
import com.mticket.entity.nav.resource.ResourceNavigation;

/**
 * 资源导航栏  对应的 Dao
 * 1: 资源一级列表：演出，电影 ,如：演出
 * 2: 资源二级列表：演唱会,话剧 ..,如：演唱会
 * 3: 资源的三级列表： 小型现场,摇滚 .. , 
 * @author ganzhigang
 * 时间：2017年4月1日 下午2:32:55
 */
public interface ResourceNavigationMapper {
	
	/**
	 * 获取 指定地区下的 所有的资源的导航列表(从二级列表开始)
	 * 如果 topId 不为 null 则获取指定的 一级菜单 下的所有菜单
	 * @param map
	 * @return
	 */
	public List<ResourceNavigationSec> loadNavListByRegionThirdAndResourceTop(Map<String, Object> map);
	
	/**
	 * 获取 资源的 一级导航的列表
	 * @return
	 */
	public List<Map<String, Object>> loadTopResourceNavList();
	
	/**
	 * 获取 指定的 资源一级导航 下的二级导航菜单及其子菜单
	 * @param topId
	 * @return
	 */
	public List<ResourceNavigationSec> loadSecResourceNavList(Integer resourceTopId);
	
	/**
	 * 获取 资源的 指定的二级导航下的三级导航菜单
	 * @param secId
	 * @return
	 */
	public List<ResourceNavigationThird> loadThirdNavList(Integer resourceSecId);
	
	
}
