package com.mticket.entity.paramsobj;

import com.mticket.entity.OrderInfo;

/**
 * 订单请求对应的请求参数实体
 * @author ganzhigang
 * 时间：2017年4月5日 下午4:23:46
 */
public class ParamsOfOrder extends OrderInfo{
	private static final long serialVersionUID = 8522919424153631649L;
	private String regionThirdName;
	private String resourceName;
	private Integer isEnable;
	
	public ParamsOfOrder(){
		
	}
	public String getRegionThirdName() {
		return regionThirdName;
	}
	public void setRegionThirdName(String regionThirdName) {
		this.regionThirdName = regionThirdName;
	}
	public String getResourceName() {
		return resourceName;
	}
	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}
	public Integer getIsEnable() {
		return isEnable;
	}
	public void setIsEnable(Integer isEnable) {
		this.isEnable = isEnable;
	}
	
}
