package com.mticket.entity.nav.region;

import java.io.Serializable;
import java.util.List;

/**
 * 地区 导航栏 
 * @author ganzhigang
 * 时间：2017年4月1日 下午2:33:25
 */
public class RegionNavigation implements Serializable{

	private static final long serialVersionUID = -7299023790697303144L;

	private Integer topId;
	private String topName;
	
	private List<RegionNavigationSec> navSec;
	
	public RegionNavigation(){
		
	}

	public Integer getTopId() {
		return topId;
	}

	public void setTopId(Integer topId) {
		this.topId = topId;
	}

	public String getTopName() {
		return topName;
	}

	public void setTopName(String topName) {
		this.topName = topName;
	}

	public List<RegionNavigationSec> getNavSec() {
		return navSec;
	}

	public void setNavSec(List<RegionNavigationSec> navSec) {
		this.navSec = navSec;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((navSec == null) ? 0 : navSec.hashCode());
		result = prime * result + ((topId == null) ? 0 : topId.hashCode());
		result = prime * result + ((topName == null) ? 0 : topName.hashCode());
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
		RegionNavigation other = (RegionNavigation) obj;
		if (navSec == null) {
			if (other.navSec != null)
				return false;
		} else if (!navSec.equals(other.navSec))
			return false;
		if (topId == null) {
			if (other.topId != null)
				return false;
		} else if (!topId.equals(other.topId))
			return false;
		if (topName == null) {
			if (other.topName != null)
				return false;
		} else if (!topName.equals(other.topName))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "RegionNavigation [topId=" + topId + ", topName=" + topName + ", navSec=" + navSec + "]";
	}
}
