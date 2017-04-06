package com.mticket.entity;

import java.io.Serializable;

/**
 * 用户绑定信息 的实体类
 * @author ganzhigang
 * 时间：2017年4月6日 上午9:31:44
 */
public class UserBindInfo implements Serializable{

	private static final long serialVersionUID = 3615343061361547233L;

	private Integer userId;
	private String phone;
	
	public UserBindInfo(){
		
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((phone == null) ? 0 : phone.hashCode());
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
		UserBindInfo other = (UserBindInfo) obj;
		if (phone == null) {
			if (other.phone != null)
				return false;
		} else if (!phone.equals(other.phone))
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
		return "UserBindInfo [userId=" + userId + ", phone=" + phone + "]";
	}
}
