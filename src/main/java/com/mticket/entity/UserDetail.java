package com.mticket.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 用户的详细信息 实体类
 * @author ganzhigang
 * 时间：2017年4月5日 下午6:15:39
 */
public class UserDetail implements Serializable {

	private static final long serialVersionUID = -503287174266002084L;

	private Integer userId;
	private String icon;
	private String nickname;
	private String name;
	private String password;
	private Date birth;
	private int gender;
	
	private List<OrderDetailInfo> orders;
	private List<UserConcern> concerns;
	private List<UserAddress> addresses;
	private UserBindInfo bindInfo;
	
	public UserDetail(){
		
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getBirth() {
		return birth;
	}

	public void setBirth(Date birth) {
		this.birth = birth;
	}

	public int getGender() {
		return gender;
	}

	public void setGender(int gender) {
		this.gender = gender;
	}

	public List<OrderDetailInfo> getOrders() {
		return orders;
	}

	public void setOrders(List<OrderDetailInfo> orders) {
		this.orders = orders;
	}

	public List<UserConcern> getConcerns() {
		return concerns;
	}

	public void setConcerns(List<UserConcern> concerns) {
		this.concerns = concerns;
	}

	public List<UserAddress> getAddresses() {
		return addresses;
	}

	public void setAddresses(List<UserAddress> addresses) {
		this.addresses = addresses;
	}

	public UserBindInfo getBindInfo() {
		return bindInfo;
	}

	public void setBindInfo(UserBindInfo bindInfo) {
		this.bindInfo = bindInfo;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((addresses == null) ? 0 : addresses.hashCode());
		result = prime * result + ((bindInfo == null) ? 0 : bindInfo.hashCode());
		result = prime * result + ((birth == null) ? 0 : birth.hashCode());
		result = prime * result + ((concerns == null) ? 0 : concerns.hashCode());
		result = prime * result + gender;
		result = prime * result + ((icon == null) ? 0 : icon.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((nickname == null) ? 0 : nickname.hashCode());
		result = prime * result + ((orders == null) ? 0 : orders.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
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
		UserDetail other = (UserDetail) obj;
		if (addresses == null) {
			if (other.addresses != null)
				return false;
		} else if (!addresses.equals(other.addresses))
			return false;
		if (bindInfo == null) {
			if (other.bindInfo != null)
				return false;
		} else if (!bindInfo.equals(other.bindInfo))
			return false;
		if (birth == null) {
			if (other.birth != null)
				return false;
		} else if (!birth.equals(other.birth))
			return false;
		if (concerns == null) {
			if (other.concerns != null)
				return false;
		} else if (!concerns.equals(other.concerns))
			return false;
		if (gender != other.gender)
			return false;
		if (icon == null) {
			if (other.icon != null)
				return false;
		} else if (!icon.equals(other.icon))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (nickname == null) {
			if (other.nickname != null)
				return false;
		} else if (!nickname.equals(other.nickname))
			return false;
		if (orders == null) {
			if (other.orders != null)
				return false;
		} else if (!orders.equals(other.orders))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
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
		return "UserDetail [userId=" + userId + ", icon=" + icon + ", nickname=" + nickname + ", name=" + name
				+ ", password=" + password + ", birth=" + birth + ", gender=" + gender + ", orders=" + orders
				+ ", concerns=" + concerns + ", addresses=" + addresses + ", bindInfo=" + bindInfo + "]";
	}
}
