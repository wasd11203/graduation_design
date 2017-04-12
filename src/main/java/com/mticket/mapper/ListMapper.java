package com.mticket.mapper;

import java.util.List;
import java.util.Map;

/**
 * 列表相关的持久层
 * @author ganzhigang
 * 时间：2017年4月7日 下午12:29:23
 */
public interface ListMapper {

	/**
	 * 获取广告资源列表
	 * @return
	 */
	public List<Map<String, Object>> getAdvertisingResourceList();
	
	/**
	 * 获取特惠看资源列表
	 * @return
	 */
	public List<Map<String, Object>> getDiscountResourceList();
	
	/**
	 * 获取最新资讯资源列表
	 * @return
	 */
	public List<Map<String, Object>> getLatestInfoResourceList();
	/**
	 * 获取热销资源列表
	 * @return
	 */
	public List<Map<String, Object>> getHotSellResourceList();
	/**
	 * 获取推荐场馆列表(不包含资源列表)
	 * @return
	 */
	public List<Map<String, Object>> getRecommendVenueList();
	
	/**
	 * 获取指定推荐场馆列表下的资源列表
	 * @param venueId
	 * @return
	 */
	public List<Map<String, Object>> getNearResourceInVenueList(Integer venueId);
	
}
