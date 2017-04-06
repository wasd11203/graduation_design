package com.mticket.entity;

import java.io.Serializable;

/**
 * 用户设定的收货地址 实体类
 * @author ganzhigang
 * 时间：2017年4月5日 下午6:13:46
 */
public class UserAddress implements Serializable{

	private static final long serialVersionUID = -4992439024664880068L;

	private Integer addressId;
	
	private Integer userId;
	private String province;
	private String city;
	private String area;
	private String more;
	private String receiveName;
	private String receivePhone;
	private Integer isDefault;
	
	public UserAddress(){
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getMore() {
		return more;
	}

	public void setMore(String more) {
		this.more = more;
	}

	public String getReceiveName() {
		return receiveName;
	}

	public void setReceiveName(String receiveName) {
		this.receiveName = receiveName;
	}

	public String getReceivePhone() {
		return receivePhone;
	}

	public void setReceivePhone(String receivePhone) {
		this.receivePhone = receivePhone;
	}

	public Integer getIsDefault() {
		return isDefault;
	}

	public void setIsDefault(Integer isDefault) {
		this.isDefault = isDefault;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((area == null) ? 0 : area.hashCode());
		result = prime * result + ((city == null) ? 0 : city.hashCode());
		result = prime * result + ((isDefault == null) ? 0 : isDefault.hashCode());
		result = prime * result + ((more == null) ? 0 : more.hashCode());
		result = prime * result + ((province == null) ? 0 : province.hashCode());
		result = prime * result + ((receiveName == null) ? 0 : receiveName.hashCode());
		result = prime * result + ((receivePhone == null) ? 0 : receivePhone.hashCode());
		result = prime * result + ((userId == null) ? 0 : userId.hashCode());
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
		UserAddress other = (UserAddress) obj;
		if (area == null) {
			if (other.area != null)
				return false;
		} else if (!area.equals(other.area))
			return false;
		if (city == null) {
			if (other.city != null)
				return false;
		} else if (!city.equals(other.city))
			return false;
		if (isDefault == null) {
			if (other.isDefault != null)
				return false;
		} else if (!isDefault.equals(other.isDefault))
			return false;
		if (more == null) {
			if (other.more != null)
				return false;
		} else if (!more.equals(other.more))
			return false;
		if (province == null) {
			if (other.province != null)
				return false;
		} else if (!province.equals(other.province))
			return false;
		if (receiveName == null) {
			if (other.receiveName != null)
				return false;
		} else if (!receiveName.equals(other.receiveName))
			return false;
		if (receivePhone == null) {
			if (other.receivePhone != null)
				return false;
		} else if (!receivePhone.equals(other.receivePhone))
			return false;
		if (userId == null) {
			if (other.userId != null)
				return false;
		} else if (!userId.equals(other.userId))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "UserAddress [userId=" + userId + ", province=" + province + ", city=" + city + ", area=" + area
				+ ", more=" + more + ", receiveName=" + receiveName + ", receivePhone=" + receivePhone + ", isDefault="
				+ isDefault + "]";
	}

	public Integer getAddressId() {
		return addressId;
	}

	public void setAddressId(Integer addressId) {
		this.addressId = addressId;
	}
}
