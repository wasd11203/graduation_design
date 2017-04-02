package com.mticket.entity.nav.region;

import java.io.Serializable;

/**
 * 地区 导航栏  中的三级导航
 * @author ganzhigang
 * 时间：2017年4月1日 下午2:33:25
 */
public class RegionNavigationThird implements Serializable{

	private static final long serialVersionUID = 6184966161315481873L;

	private Integer thirdId;
	private String thirdName;
	private Integer secId;
	
	public RegionNavigationThird(){
		
	}

	public Integer getThirdId() {
		return thirdId;
	}

	public void setThirdId(Integer thirdId) {
		this.thirdId = thirdId;
	}

	public String getThirdName() {
		return thirdName;
	}

	public void setThirdName(String thirdName) {
		this.thirdName = thirdName;
	}

	public Integer getSecId() {
		return secId;
	}

	public void setSecId(Integer secId) {
		this.secId = secId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((secId == null) ? 0 : secId.hashCode());
		result = prime * result + ((thirdId == null) ? 0 : thirdId.hashCode());
		result = prime * result + ((thirdName == null) ? 0 : thirdName.hashCode());
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
		RegionNavigationThird other = (RegionNavigationThird) obj;
		if (secId == null) {
			if (other.secId != null)
				return false;
		} else if (!secId.equals(other.secId))
			return false;
		if (thirdId == null) {
			if (other.thirdId != null)
				return false;
		} else if (!thirdId.equals(other.thirdId))
			return false;
		if (thirdName == null) {
			if (other.thirdName != null)
				return false;
		} else if (!thirdName.equals(other.thirdName))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "RegionNavigationThird [thirdId=" + thirdId + ", thirdName=" + thirdName + ", secId=" + secId + "]";
	}
	
}
