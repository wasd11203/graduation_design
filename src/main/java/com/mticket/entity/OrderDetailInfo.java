package com.mticket.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 订单的详细信息 实体
 * @author ganzhigang
 * 时间：2017年4月5日 下午6:03:53
 */
public class OrderDetailInfo implements Serializable{

	private static final long serialVersionUID = -8069110786479554835L;

	private Integer userId;
	private Integer orderId;
	private Integer orderType;
	private String disCountCode;
	private Float total;
	private String buyerPhone;
	private String province;
	private String city;
	private String area;
	private String more;
	private String receiveName;
	private String receivePhone;
	private Integer isFinish;
	private Date inTime;
	private Integer receiveType;
	
	private List<AssociationOrderWithResource> resources;
	
	public OrderDetailInfo(){
		
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public Integer getOrderType() {
		return orderType;
	}

	public void setOrderType(Integer orderType) {
		this.orderType = orderType;
	}

	public String getDisCountCode() {
		return disCountCode;
	}

	public void setDisCountCode(String disCountCode) {
		this.disCountCode = disCountCode;
	}

	public Float getTotal() {
		return total;
	}

	public void setTotal(Float total) {
		this.total = total;
	}

	public String getBuyerPhone() {
		return buyerPhone;
	}

	public void setBuyerPhone(String buyerPhone) {
		this.buyerPhone = buyerPhone;
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

	public Integer getIsFinish() {
		return isFinish;
	}

	public void setIsFinish(Integer isFinish) {
		this.isFinish = isFinish;
	}

	public Date getInTime() {
		return inTime;
	}

	public void setInTime(Date inTime) {
		this.inTime = inTime;
	}

	public Integer getReceiveType() {
		return receiveType;
	}

	public void setReceiveType(Integer receiveType) {
		this.receiveType = receiveType;
	}

	public List<AssociationOrderWithResource> getResources() {
		return resources;
	}

	public void setResources(List<AssociationOrderWithResource> resources) {
		this.resources = resources;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((area == null) ? 0 : area.hashCode());
		result = prime * result + ((buyerPhone == null) ? 0 : buyerPhone.hashCode());
		result = prime * result + ((city == null) ? 0 : city.hashCode());
		result = prime * result + ((disCountCode == null) ? 0 : disCountCode.hashCode());
		result = prime * result + ((inTime == null) ? 0 : inTime.hashCode());
		result = prime * result + ((isFinish == null) ? 0 : isFinish.hashCode());
		result = prime * result + ((more == null) ? 0 : more.hashCode());
		result = prime * result + ((orderId == null) ? 0 : orderId.hashCode());
		result = prime * result + ((orderType == null) ? 0 : orderType.hashCode());
		result = prime * result + ((province == null) ? 0 : province.hashCode());
		result = prime * result + ((receiveName == null) ? 0 : receiveName.hashCode());
		result = prime * result + ((receivePhone == null) ? 0 : receivePhone.hashCode());
		result = prime * result + ((receiveType == null) ? 0 : receiveType.hashCode());
		result = prime * result + ((resources == null) ? 0 : resources.hashCode());
		result = prime * result + ((total == null) ? 0 : total.hashCode());
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
		OrderDetailInfo other = (OrderDetailInfo) obj;
		if (area == null) {
			if (other.area != null)
				return false;
		} else if (!area.equals(other.area))
			return false;
		if (buyerPhone == null) {
			if (other.buyerPhone != null)
				return false;
		} else if (!buyerPhone.equals(other.buyerPhone))
			return false;
		if (city == null) {
			if (other.city != null)
				return false;
		} else if (!city.equals(other.city))
			return false;
		if (disCountCode == null) {
			if (other.disCountCode != null)
				return false;
		} else if (!disCountCode.equals(other.disCountCode))
			return false;
		if (inTime == null) {
			if (other.inTime != null)
				return false;
		} else if (!inTime.equals(other.inTime))
			return false;
		if (isFinish == null) {
			if (other.isFinish != null)
				return false;
		} else if (!isFinish.equals(other.isFinish))
			return false;
		if (more == null) {
			if (other.more != null)
				return false;
		} else if (!more.equals(other.more))
			return false;
		if (orderId == null) {
			if (other.orderId != null)
				return false;
		} else if (!orderId.equals(other.orderId))
			return false;
		if (orderType == null) {
			if (other.orderType != null)
				return false;
		} else if (!orderType.equals(other.orderType))
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
		if (receiveType == null) {
			if (other.receiveType != null)
				return false;
		} else if (!receiveType.equals(other.receiveType))
			return false;
		if (resources == null) {
			if (other.resources != null)
				return false;
		} else if (!resources.equals(other.resources))
			return false;
		if (total == null) {
			if (other.total != null)
				return false;
		} else if (!total.equals(other.total))
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
		return "OrderDetailInfo [userId=" + userId + ", orderId=" + orderId + ", orderType=" + orderType
				+ ", disCountCode=" + disCountCode + ", total=" + total + ", buyerPhone=" + buyerPhone + ", province="
				+ province + ", city=" + city + ", area=" + area + ", more=" + more + ", receiveName=" + receiveName
				+ ", receivePhone=" + receivePhone + ", isFinish=" + isFinish + ", inTime=" + inTime + ", receiveType="
				+ receiveType + ", resources=" + resources + "]";
	}
	
}
