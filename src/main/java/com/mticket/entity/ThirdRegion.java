package com.mticket.entity;

import java.io.Serializable;
import java.util.List;

/**
 * 三级地区 的实体
 * 如：北京
 * @author ganzhigang
 * 时间：2017年4月5日 上午10:54:34
 */
public class ThirdRegion implements Serializable{
	
	private static final long serialVersionUID = 2652019953784628568L;

	private Integer regionThirdId;
	private String regionName;
	
	private List<ShowVenueDetail> venues;
	
	public ThirdRegion(){
		
	}

	public Integer getRegionThirdId() {
		return regionThirdId;
	}

	public void setRegionThirdId(Integer regionThirdId) {
		this.regionThirdId = regionThirdId;
	}

	public String getRegionName() {
		return regionName;
	}

	public void setRegionName(String regionName) {
		this.regionName = regionName;
	}

	public List<ShowVenueDetail> getVenues() {
		return venues;
	}

	public void setVenues(List<ShowVenueDetail> venues) {
		this.venues = venues;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((regionName == null) ? 0 : regionName.hashCode());
		result = prime * result + ((regionThirdId == null) ? 0 : regionThirdId.hashCode());
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
		ThirdRegion other = (ThirdRegion) obj;
		if (regionName == null) {
			if (other.regionName != null)
				return false;
		} else if (!regionName.equals(other.regionName))
			return false;
		if (regionThirdId == null) {
			if (other.regionThirdId != null)
				return false;
		} else if (!regionThirdId.equals(other.regionThirdId))
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
		return "ThirdRegion [regionThirdId=" + regionThirdId + ", regionName=" + regionName + ", venues=" + venues
				+ "]";
	}
}
