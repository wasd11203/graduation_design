package com.mticket.mapper;

import java.util.List;
import java.util.Map;

/**
 * 搜索资源的Dao
 * 
 * @author ganzhigang
 * 时间：2017年4月2日 下午1:49:19
 */
public interface ResourceSearchOperationMapper {

	/**
	 * 根据传入的条件查询 该条件下的资源列表
	 * @param map
	 * @return
	 */
	public List<Map<String, Object>> searchResourceByMark(Map<String, Object> map);
	
	/**
	 * 根据传入的条件查询该条件下的资源的大致信息列表
	 * @param map
	 * @return
	 */
	public List<Map<String, Object>> searchResource(Map<String, Object> map);
	
}
