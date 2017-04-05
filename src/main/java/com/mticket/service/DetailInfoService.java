package com.mticket.service;

import java.util.Map;

import com.mticket.entity.ResourceDetail;

/**
 * 详细信息的 业务层接口
 * @author ganzhigang
 * 时间：2017年4月3日 上午10:13:08
 */
public interface DetailInfoService {
	
	/**
	 * 获取指定的 资源的详细信息
	 * @param resourceId
	 * @return
	 */
	public ResourceDetail getResourceDetailInfo(Map<String, Object> map);
	
}
