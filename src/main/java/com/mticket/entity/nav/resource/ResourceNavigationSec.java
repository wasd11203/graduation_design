package com.mticket.entity.nav.resource;

import java.io.Serializable;
import java.util.List;

/**
 * 资源导航栏中的二级导航
 * @author ganzhigang
 * 时间：2017年4月1日 上午11:19:09
 */
public class ResourceNavigationSec implements Serializable{

	private static final long serialVersionUID = -8977212401723065151L;

	private Integer secId;
	private String secName;
	private Integer topId;
	private Integer isBar;
	
	private List<ResourceNavigationThird> navThird;
	
	public ResourceNavigationSec(){
		
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

	public Integer getIsBar() {
		return isBar;
	}

	public void setIsBar(Integer isBar) {
		this.isBar = isBar;
	}

	public List<ResourceNavigationThird> getNavThird() {
		return navThird;
	}

	public void setNavThird(List<ResourceNavigationThird> navThird) {
		this.navThird = navThird;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((isBar == null) ? 0 : isBar.hashCode());
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
		ResourceNavigationSec other = (ResourceNavigationSec) obj;
		if (isBar == null) {
			if (other.isBar != null)
				return false;
		} else if (!isBar.equals(other.isBar))
			return false;
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
		return "NavigationSec [secId=" + secId + ", secName=" + secName + ", topId=" + topId + ", isBar=" + isBar
				+ ", navThird=" + navThird + "]";
	}
	
}
