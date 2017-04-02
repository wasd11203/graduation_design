package com.mticket.entity.nav.region;

import java.io.Serializable;
import java.util.List;

/**
 * 地区 导航栏 中的二级导航 
 * @author ganzhigang
 * 时间：2017年4月1日 下午2:33:25
 */
public class RegionNavigationSec implements Serializable{

	private static final long serialVersionUID = -6148898425549005226L;

	private Integer secId;
	private String secName;
	private Integer topId;
	
	private List<RegionNavigationThird> navThird;
	
	public RegionNavigationSec(){
		
	}

	public Integer getSecId() {
		return secId;
	}

	public void setSecId(Integer secId) {
		this.secId = secId;
	}

	public String getSecName() {
		return secName;
	}

	public void setSecName(String secName) {
		this.secName = secName;
	}

	public Integer getTopId() {
		return topId;
	}

	public void setTopId(Integer topId) {
		this.topId = topId;
	}

	public List<RegionNavigationThird> getNavThird() {
		return navThird;
	}

	public void setNavThird(List<RegionNavigationThird> navThird) {
		this.navThird = navThird;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((navThird == null) ? 0 : navThird.hashCode());
		result = prime * result + ((secId == null) ? 0 : secId.hashCode());
		result = prime * result + ((secName == null) ? 0 : secName.hashCode());
		result = prime * result + ((topId == null) ? 0 : topId.hashCode());
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
		RegionNavigationSec other = (RegionNavigationSec) obj;
		if (navThird == null) {
			if (other.navThird != null)
				return false;
		} else if (!navThird.equals(other.navThird))
			return false;
		if (secId == null) {
			if (other.secId != null)
				return false;
		} else if (!secId.equals(other.secId))
			return false;
		if (secName == null) {
			if (other.secName != null)
				return false;
		} else if (!secName.equals(other.secName))
			return false;
		if (topId == null) {
			if (other.topId != null)
				return false;
		} else if (!topId.equals(other.topId))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "RegionNavigationSec [secId=" + secId + ", secName=" + secName + ", topId=" + topId + ", navThird="
				+ navThird + "]";
	}
}
