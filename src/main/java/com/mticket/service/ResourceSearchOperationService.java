package com.mticket.service;

import java.util.List;
import java.util.Map;

/**
 * 搜索资源 的业务层接口
 * @author ganzhigang
 * 时间：2017年4月2日 下午1:50:04
 */
public interface ResourceSearchOperationService {
	/**
	 * 根据不同的条件，查询资源列表
	 * @param map
	 * @return
	 */
	public List<Map<String, Object>> searchResourceByMark(Map<String, Object> map);

	/**
	 * 根据不同的条件，查询资源列表(大致信息)
	 * @param map
	 * @return
	 */
	public List<Map<String, Object>> searchResource(Map<String, Object> map);
}
