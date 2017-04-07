package com.mticket.service;

import java.util.List;
import java.util.Map;

/**
 * 列表 相关业务层接口
 * @author ganzhigang
 * 时间：2017年4月7日 下午12:30:53
 */
public interface ListService {

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
	public List<Map<String, Object>> getNearHostResourceList();
	/**
	 * 获取热销资源列表
	 * @return
	 */
	public List<Map<String, Object>> getHotSellResourceList();
	/**
	 * 获取推荐场馆列表(包含资源列表)
	 * @return
	 */
	public List<Map<String, Object>> getRecommendVenueList();
	
}
