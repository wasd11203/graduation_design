package com.mticket.entity;

import java.io.Serializable;
import java.util.List;

/**
 * 场馆信息 实体
 * @author ganzhigang
 * 时间：2017年4月2日 下午5:40:55
 */
public class ShowVenueDetail implements Serializable{

	private static final long serialVersionUID = -8678680041514454172L;
	private Integer venueId;
	private String venuePic;
	private String venueName;
	private String venueAddress;
	private String venuePhone;
	private String venueIntroduce;
	
	private Integer regionThirdId;
	
	private List<SiteDetail> sites;
	
	public ShowVenueDetail(){
		
	}

	public Integer getVenueId() {
		return venueId;
	}

	public void setVenueId(Integer venueId) {
		this.venueId = venueId;
	}

	public String getVenuePic() {
		return venuePic;
	}

	public void setVenuePic(String venuePic) {
		this.venuePic = venuePic;
	}

	public String getVenueName() {
		return venueName;
	}

	public void setVenueName(String venueName) {
		this.venueName = venueName;
	}

	public String getVenueAddress() {
		return venueAddress;
	}

	public void setVenueAddress(String venueAddress) {
		this.venueAddress = venueAddress;
	}

	public String getVenuePhone() {
		return venuePhone;
	}

	public void setVenuePhone(String venuePhone) {
		this.venuePhone = venuePhone;
	}

	public String getVenueIntroduce() {
		return venueIntroduce;
	}

	public void setVenueIntroduce(String venueIntroduce) {
		this.venueIntroduce = venueIntroduce;
	}

	public Integer getRegionThirdId() {
		return regionThirdId;
	}

	public void setRegionThirdId(Integer regionThirdId) {
		this.regionThirdId = regionThirdId;
	}

	public List<SiteDetail> getSites() {
		return sites;
	}

	public void setSites(List<SiteDetail> sites) {
		this.sites = sites;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((regionThirdId == null) ? 0 : regionThirdId.hashCode());
		result = prime * result + ((sites == null) ? 0 : sites.hashCode());
		result = prime * result + ((venueAddress == null) ? 0 : venueAddress.hashCode());
		result = prime * result + ((venueId == null) ? 0 : venueId.hashCode());
		result = prime * result + ((venueIntroduce == null) ? 0 : venueIntroduce.hashCode());
		result = prime * result + ((venueName == null) ? 0 : venueName.hashCode());
		result = prime * result + ((venuePhone == null) ? 0 : venuePhone.hashCode());
		result = prime * result + ((venuePic == null) ? 0 : venuePic.hashCode());
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
		ShowVenueDetail other = (ShowVenueDetail) obj;
		if (regionThirdId == null) {
			if (other.regionThirdId != null)
				return false;
		} else if (!regionThirdId.equals(other.regionThirdId))
			return false;
		if (sites == null) {
			if (other.sites != null)
				return false;
		} else if (!sites.equals(other.sites))
			return false;
		if (venueAddress == null) {
			if (other.venueAddress != null)
				return false;
		} else if (!venueAddress.equals(other.venueAddress))
			return false;
		if (venueId == null) {
			if (other.venueId != null)
				return false;
		} else if (!venueId.equals(other.venueId))
			return false;
		if (venueIntroduce == null) {
			if (other.venueIntroduce != null)
				return false;
		} else if (!venueIntroduce.equals(other.venueIntroduce))
			return false;
		if (venueName == null) {
			if (other.venueName != null)
				return false;
		} else if (!venueName.equals(other.venueName))
			return false;
		if (venuePhone == null) {
			if (other.venuePhone != null)
				return false;
		} else if (!venuePhone.equals(other.venuePhone))
			return false;
		if (venuePic == null) {
			if (other.venuePic != null)
				return false;
		} else if (!venuePic.equals(other.venuePic))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ShowVenueDetail [venueId=" + venueId + ", venuePic=" + venuePic + ", venueName=" + venueName
				+ ", venueAddress=" + venueAddress + ", venuePhone=" + venuePhone + ", venueIntroduce=" + venueIntroduce
				+ ", regionThirdId=" + regionThirdId + ", sites=" + sites + "]";
	}

}
