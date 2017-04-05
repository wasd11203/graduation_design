package com.mticket.mapper;

import java.util.Map;

import com.mticket.entity.ResourceDetail;

/**
 * 资源详细信息 的Dao
 * @author ganzhigang
 * 时间：2017年4月3日 上午9:45:17
 */
public interface ResourceDetailMapper {
	public ResourceDetail selectResourceDetail(Map<String, Object> map);
}
