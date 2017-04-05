package com.mticket.entity;

import java.io.Serializable;
import java.util.List;

/**
 * 资源的详细信息
 * @author ganzhigang
 * 时间：2017年4月2日 下午4:35:07
 */
public class ResourceDetail implements Serializable{
	
	private static final long serialVersionUID = 1459885612003527344L;
	private Integer resourceId;
	private String resourceName;
	private String resourcePic;
	private String resourceShortDesc;
	private String resourceIntroduce;
	private Integer isEnable;
	private Integer resourceThirdId;
	private Integer concernsCounts;
	
	private List<ThirdRegion> thirdRegions;
	
	public ResourceDetail(){
	}

	public Integer getResourceId() {
		return resourceId;
	}

	public void setResourceId(Integer resourceId) {
		this.resourceId = resourceId;
	}

	public String getResourceName() {
		return resourceName;
	}

	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}

	public String getResourcePic() {
		return resourcePic;
	}

	public void setResourcePic(String resourcePic) {
		this.resourcePic = resourcePic;
	}

	public String getResourceShortDesc() {
		return resourceShortDesc;
	}

	public void setResourceShortDesc(String resourceShortDesc) {
		this.resourceShortDesc = resourceShortDesc;
	}

	public String getResourceIntroduce() {
		return resourceIntroduce;
	}

	public void setResourceIntroduce(String resourceIntroduce) {
		this.resourceIntroduce = resourceIntroduce;
	}

	public Integer getIsEnable() {
		return isEnable;
	}

	public void setIsEnable(Integer isEnable) {
		this.isEnable = isEnable;
	}

	public Integer getResourceThirdId() {
		return resourceThirdId;
	}

	public void setResourceThirdId(Integer resourceThirdId) {
		this.resourceThirdId = resourceThirdId;
	}

	public Integer getConcernsCounts() {
		return concernsCounts;
	}

	public void setConcernsCounts(Integer concernsCounts) {
		this.concernsCounts = concernsCounts;
	}

	public List<ThirdRegion> getThirdRegions() {
		return thirdRegions;
	}

	public void setThirdRegions(List<ThirdRegion> thirdRegions) {
		this.thirdRegions = thirdRegions;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((concernsCounts == null) ? 0 : concernsCounts.hashCode());
		result = prime * result + ((isEnable == null) ? 0 : isEnable.hashCode());
		result = prime * result + ((resourceId == null) ? 0 : resourceId.hashCode());
		result = prime * result + ((resourceIntroduce == null) ? 0 : resourceIntroduce.hashCode());
		result = prime * result + ((resourceName == null) ? 0 : resourceName.hashCode());
		result = prime * result + ((resourcePic == null) ? 0 : resourcePic.hashCode());
		result = prime * result + ((resourceShortDesc == null) ? 0 : resourceShortDesc.hashCode());
		result = prime * result + ((resourceThirdId == null) ? 0 : resourceThirdId.hashCode());
		result = prime * result + ((thirdRegions == null) ? 0 : thirdRegions.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ResourceDetail other = (ResourceDetail) obj;
		if (concernsCounts == null) {
			if (other.concernsCounts != null)
				return false;
		} else if (!concernsCounts.equals(other.concernsCounts))
			return false;
		if (isEnable == null) {
			if (other.isEnable != null)
				return false;
		} else if (!isEnable.equals(other.isEnable))
			return false;
		if (resourceId == null) {
			if (other.resourceId != null)
				return false;
		} else if (!resourceId.equals(other.resourceId))
			return false;
		if (resourceIntroduce == null) {
			if (other.resourceIntroduce != null)
				return false;
		} else if (!resourceIntroduce.equals(other.resourceIntroduce))
			return false;
		if (resourceName == null) {
			if (other.resourceName != null)
				return false;
		} else if (!resourceName.equals(other.resourceName))
			return false;
		if (resourcePic == null) {
			if (other.resourcePic != null)
				return false;
		} else if (!resourcePic.equals(other.resourcePic))
			return false;
		if (resourceShortDesc == null) {
			if (other.resourceShortDesc != null)
				return false;
		} else if (!resourceShortDesc.equals(other.resourceShortDesc))
			return false;
		if (resourceThirdId == null) {
			if (other.resourceThirdId != null)
				return false;
		} else if (!resourceThirdId.equals(other.resourceThirdId))
			return false;
		if (thirdRegions == null) {
			if (other.thirdRegions != null)
				return false;
		} else if (!thirdRegions.equals(other.thirdRegions))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ResourceDetail [resourceId=" + resourceId + ", resourceName=" + resourceName + ", resourcePic="
				+ resourcePic + ", resourceShortDesc=" + resourceShortDesc + ", resourceIntroduce=" + resourceIntroduce
				+ ", isEnable=" + isEnable + ", resourceThirdId=" + resourceThirdId + ", concernsCounts="
				+ concernsCounts + ", thirdRegions=" + thirdRegions + "]";
	}
}
