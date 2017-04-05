package com.mticket.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 订单的实体类
 * @author ganzhigang
 * 时间：2017年4月5日 下午3:51:49
 */
public class OrderInfo implements Serializable{

	private static final long serialVersionUID = -3082224919860095576L;

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
	
	private Integer resourceId;
	private Integer regionThirdId;
	private Integer venueId;
	private Integer siteId;
	private Integer ticketId;
	private Integer ticketCounts;
	private Float ticketPrice;
	
	public OrderInfo(){
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

	public Integer getResourceId() {
		return resourceId;
	}

	public void setResourceId(Integer resourceId) {
		this.resourceId = resourceId;
	}

	public Integer getRegionThirdId() {
		return regionThirdId;
	}

	public void setRegionThirdId(Integer regionThirdId) {
		this.regionThirdId = regionThirdId;
	}

	public Integer getVenueId() {
		return venueId;
	}

	public void setVenueId(Integer venueId) {
		this.venueId = venueId;
	}

	public Integer getSiteId() {
		return siteId;
	}

	public void setSiteId(Integer siteId) {
		this.siteId = siteId;
	}

	public Integer getTicketId() {
		return ticketId;
	}

	public void setTicketId(Integer ticketId) {
		this.ticketId = ticketId;
	}

	public Integer getTicketCounts() {
		return ticketCounts;
	}

	public void setTicketCounts(Integer ticketCounts) {
		this.ticketCounts = ticketCounts;
	}

	public Float getTicketPrice() {
		return ticketPrice;
	}

	public void setTicketPrice(Float ticketPrice) {
		this.ticketPrice = ticketPrice;
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
		result = prime * result + ((regionThirdId == null) ? 0 : regionThirdId.hashCode());
		result = prime * result + ((resourceId == null) ? 0 : resourceId.hashCode());
		result = prime * result + ((siteId == null) ? 0 : siteId.hashCode());
		result = prime * result + ((ticketCounts == null) ? 0 : ticketCounts.hashCode());
		result = prime * result + ((ticketId == null) ? 0 : ticketId.hashCode());
		result = prime * result + ((ticketPrice == null) ? 0 : ticketPrice.hashCode());
		result = prime * result + ((total == null) ? 0 : total.hashCode());
		result = prime * result + ((userId == null) ? 0 : userId.hashCode());
		result = prime * result + ((venueId == null) ? 0 : venueId.hashCode());
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
		OrderInfo other = (OrderInfo) obj;
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
		if (regionThirdId == null) {
			if (other.regionThirdId != null)
				return false;
		} else if (!regionThirdId.equals(other.regionThirdId))
			return false;
		if (resourceId == null) {
			if (other.resourceId != null)
				return false;
		} else if (!resourceId.equals(other.resourceId))
			return false;
		if (siteId == null) {
			if (other.siteId != null)
				return false;
		} else if (!siteId.equals(other.siteId))
			return false;
		if (ticketCounts == null) {
			if (other.ticketCounts != null)
				return false;
		} else if (!ticketCounts.equals(other.ticketCounts))
			return false;
		if (ticketId == null) {
			if (other.ticketId != null)
				return false;
		} else if (!ticketId.equals(other.ticketId))
			return false;
		if (ticketPrice == null) {
			if (other.ticketPrice != null)
				return false;
		} else if (!ticketPrice.equals(other.ticketPrice))
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
		if (venueId == null) {
			if (other.venueId != null)
				return false;
		} else if (!venueId.equals(other.venueId))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "OrderDetail [userId=" + userId + ", orderId=" + orderId + ", orderType=" + orderType + ", disCountCode="
				+ disCountCode + ", total=" + total + ", buyerPhone=" + buyerPhone + ", province=" + province
				+ ", city=" + city + ", area=" + area + ", more=" + more + ", receiveName=" + receiveName
				+ ", receivePhone=" + receivePhone + ", isFinish=" + isFinish + ", inTime=" + inTime + ", receiveType="
				+ receiveType + ", resourceId=" + resourceId + ", regionThirdId=" + regionThirdId + ", venueId="
				+ venueId + ", siteId=" + siteId + ", ticketId=" + ticketId + ", ticketCounts=" + ticketCounts
				+ ", ticketPrice=" + ticketPrice + "]";
	}
}
