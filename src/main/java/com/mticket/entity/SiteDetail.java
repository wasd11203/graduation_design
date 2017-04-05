package com.mticket.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 场次 实体
 * @author ganzhigang
 * 时间：2017年4月2日 下午5:36:37
 */
public class SiteDetail implements Serializable{

	private static final long serialVersionUID = -18750250526249290L;
	
	private Integer siteId;
	private String siteName;
	private Date siteTime;
	private Integer limitCounts;
	private Integer siteTypeId;
	
	private List<TicketDetail> tickets;
	
	public SiteDetail(){
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

	public Integer getLimitCounts() {
		return limitCounts;
	}

	public void setLimitCounts(Integer limitCounts) {
		this.limitCounts = limitCounts;
	}

	public Integer getSiteTypeId() {
		return siteTypeId;
	}

	public void setSiteTypeId(Integer siteTypeId) {
		this.siteTypeId = siteTypeId;
	}

	public List<TicketDetail> getTickets() {
		return tickets;
	}

	public void setTickets(List<TicketDetail> tickets) {
		this.tickets = tickets;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((limitCounts == null) ? 0 : limitCounts.hashCode());
		result = prime * result + ((siteId == null) ? 0 : siteId.hashCode());
		result = prime * result + ((siteName == null) ? 0 : siteName.hashCode());
		result = prime * result + ((siteTime == null) ? 0 : siteTime.hashCode());
		result = prime * result + ((siteTypeId == null) ? 0 : siteTypeId.hashCode());
		result = prime * result + ((tickets == null) ? 0 : tickets.hashCode());
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
		SiteDetail other = (SiteDetail) obj;
		if (limitCounts == null) {
			if (other.limitCounts != null)
				return false;
		} else if (!limitCounts.equals(other.limitCounts))
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
		if (siteTypeId == null) {
			if (other.siteTypeId != null)
				return false;
		} else if (!siteTypeId.equals(other.siteTypeId))
			return false;
		if (tickets == null) {
			if (other.tickets != null)
				return false;
		} else if (!tickets.equals(other.tickets))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "SiteDetail [siteId=" + siteId + ", siteName=" + siteName + ", siteTime=" + siteTime + ", limitCounts="
				+ limitCounts + ", siteTypeId=" + siteTypeId + ", tickets=" + tickets + "]";
	}
}
