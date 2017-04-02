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
	private Integer thirdId;
	
	private List<ShowVenueDetail> venues;
	
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

	public Integer getThirdId() {
		return thirdId;
	}

	public void setThirdId(Integer thirdId) {
		this.thirdId = thirdId;
	}

	public List<ShowVenueDetail> getVenues() {
		return venues;
	}

	public void setVenues(List<ShowVenueDetail> venues) {
		this.venues = venues;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((isEnable == null) ? 0 : isEnable.hashCode());
		result = prime * result + ((resourceId == null) ? 0 : resourceId.hashCode());
		result = prime * result + ((resourceIntroduce == null) ? 0 : resourceIntroduce.hashCode());
		result = prime * result + ((resourceName == null) ? 0 : resourceName.hashCode());
		result = prime * result + ((resourcePic == null) ? 0 : resourcePic.hashCode());
		result = prime * result + ((resourceShortDesc == null) ? 0 : resourceShortDesc.hashCode());
		result = prime * result + ((thirdId == null) ? 0 : thirdId.hashCode());
		result = prime * result + ((venues == null) ? 0 : venues.hashCode());
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
		if (thirdId == null) {
			if (other.thirdId != null)
				return false;
		} else if (!thirdId.equals(other.thirdId))
			return false;
		if (venues == null) {
			if (other.venues != null)
				return false;
		} else if (!venues.equals(other.venues))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ResourceDetail [resourceId=" + resourceId + ", resourceName=" + resourceName + ", resourcePic="
				+ resourcePic + ", resourceShortDesc=" + resourceShortDesc + ", resourceIntroduce=" + resourceIntroduce
				+ ", isEnable=" + isEnable + ", thirdId=" + thirdId + ", venues=" + venues + "]";
	}
}