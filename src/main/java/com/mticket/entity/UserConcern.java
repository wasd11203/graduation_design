package com.mticket.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 用户的关注 实体类
 * @author ganzhigang
 * 时间：2017年4月5日 下午6:10:11
 */
public class UserConcern implements Serializable{

	private static final long serialVersionUID = 4155126534468816865L;

	private Integer userId;
	
	private Integer resourceId;
	private String resourceName;
	private Integer isEnable;
	
	private Integer regionThirdId;
	private String regionThirdName;
	
	private Integer venueId;
	private String venueName;
	
	private Integer siteId;
	private String siteName;
	private Date siteTime;
	
	private Integer ticketId;
	private String ticketName;
	
	private Date inTime;
	
	public UserConcern(){
		
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
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

	public Integer getIsEnable() {
		return isEnable;
	}

	public void setIsEnable(Integer isEnable) {
		this.isEnable = isEnable;
	}

	public Integer getRegionThirdId() {
		return regionThirdId;
	}

	public void setRegionThirdId(Integer regionThirdId) {
		this.regionThirdId = regionThirdId;
	}

	public String getRegionThirdName() {
		return regionThirdName;
	}

	public void setRegionThirdName(String regionThirdName) {
		this.regionThirdName = regionThirdName;
	}

	public Integer getVenueId() {
		return venueId;
	}

	public void setVenueId(Integer venueId) {
		this.venueId = venueId;
	}

	public String getVenueName() {
		return venueName;
	}

	public void setVenueName(String venueName) {
		this.venueName = venueName;
	}

	public Integer getSiteId() {
		return siteId;
	}

	public void setSiteId(Integer siteId) {
		this.siteId = siteId;
	}

	public String getSiteName() {
		return siteName;
	}

	public void setSiteName(String siteName) {
		this.siteName = siteName;
	}

	public Date getSiteTime() {
		return siteTime;
	}

	public void setSiteTime(Date siteTime) {
		this.siteTime = siteTime;
	}

	public Integer getTicketId() {
		return ticketId;
	}

	public void setTicketId(Integer ticketId) {
		this.ticketId = ticketId;
	}

	public String getTicketName() {
		return ticketName;
	}

	public void setTicketName(String ticketName) {
		this.ticketName = ticketName;
	}

	public Date getInTime() {
		return inTime;
	}

	public void setInTime(Date inTime) {
		this.inTime = inTime;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((inTime == null) ? 0 : inTime.hashCode());
		result = prime * result + ((isEnable == null) ? 0 : isEnable.hashCode());
		result = prime * result + ((regionThirdId == null) ? 0 : regionThirdId.hashCode());
		result = prime * result + ((regionThirdName == null) ? 0 : regionThirdName.hashCode());
		result = prime * result + ((resourceId == null) ? 0 : resourceId.hashCode());
		result = prime * result + ((resourceName == null) ? 0 : resourceName.hashCode());
		result = prime * result + ((siteId == null) ? 0 : siteId.hashCode());
		result = prime * result + ((siteName == null) ? 0 : siteName.hashCode());
		result = prime * result + ((siteTime == null) ? 0 : siteTime.hashCode());
		result = prime * result + ((ticketId == null) ? 0 : ticketId.hashCode());
		result = prime * result + ((ticketName == null) ? 0 : ticketName.hashCode());
		result = prime * result + ((userId == null) ? 0 : userId.hashCode());
		result = prime * result + ((venueId == null) ? 0 : venueId.hashCode());
		result = prime * result + ((venueName == null) ? 0 : venueName.hashCode());
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
		UserConcern other = (UserConcern) obj;
		if (inTime == null) {
			if (other.inTime != null)
				return false;
		} else if (!inTime.equals(other.inTime))
			return false;
		if (isEnable == null) {
			if (other.isEnable != null)
				return false;
		} else if (!isEnable.equals(other.isEnable))
			return false;
		if (regionThirdId == null) {
			if (other.regionThirdId != null)
				return false;
		} else if (!regionThirdId.equals(other.regionThirdId))
			return false;
		if (regionThirdName == null) {
			if (other.regionThirdName != null)
				return false;
		} else if (!regionThirdName.equals(other.regionThirdName))
			return false;
		if (resourceId == null) {
			if (other.resourceId != null)
				return false;
		} else if (!resourceId.equals(other.resourceId))
			return false;
		if (resourceName == null) {
			if (other.resourceName != null)
				return false;
		} else if (!resourceName.equals(other.resourceName))
			return false;
		if (siteId == null) {
			if (other.siteId != null)
				return false;
		} else if (!siteId.equals(other.siteId))
			return false;
		if (siteName == null) {
			if (other.siteName != null)
				return false;
		} else if (!siteName.equals(other.siteName))
			return false;
		if (siteTime == null) {
			if (other.siteTime != null)
				return false;
		} else if (!siteTime.equals(other.siteTime))
			return false;
		if (ticketId == null) {
			if (other.ticketId != null)
				return false;
		} else if (!ticketId.equals(other.ticketId))
			return false;
		if (ticketName == null) {
			if (other.ticketName != null)
				return false;
		} else if (!ticketName.equals(other.ticketName))
			return false;
		if (userId == null) {
			if (other.userId != null)
				return false;
		} else if (!userId.equals(other.userId))
			return false;
		if (venueId == null) {
			if (other.venueId != null)
				return false;
		} else if (!venueId.equals(other.venueId))
			return false;
		if (venueName == null) {
			if (other.venueName != null)
				return false;
		} else if (!venueName.equals(other.venueName))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "UserConcern [userId=" + userId + ", resourceId=" + resourceId + ", resourceName=" + resourceName
				+ ", isEnable=" + isEnable + ", regionThirdId=" + regionThirdId + ", regionThirdName=" + regionThirdName
				+ ", venueId=" + venueId + ", venueName=" + venueName + ", siteId=" + siteId + ", siteName=" + siteName
				+ ", siteTime=" + siteTime + ", ticketId=" + ticketId + ", ticketName=" + ticketName + ", inTime="
				+ inTime + "]";
	}
	
}
