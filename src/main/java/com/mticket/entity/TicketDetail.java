package com.mticket.entity;

import java.io.Serializable;

/**
 * 票种的实体类
 * @author ganzhigang
 * 时间：2017年4月2日 下午5:33:09
 */
public class TicketDetail implements Serializable{

	private static final long serialVersionUID = 5303004291182096927L;
	private Integer ticketId;
	private String ticketName;
	private Integer ticketCounts;
	private Float ticketPrice;
	private Float ticketOldPrice;
	
	public TicketDetail(){
		
	}

	public Integer getTicketId() {
		return ticketId;
	}

	public void setTicketId(Integer ticketId) {
		this.ticketId = ticketId;
	}

	public String getTicketName() {
		return ticketName;
	}

	public void setTicketName(String ticketName) {
		this.ticketName = ticketName;
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

	public Float getTicketOldPrice() {
		return ticketOldPrice;
	}

	public void setTicketOldPrice(Float ticketOldPrice) {
		this.ticketOldPrice = ticketOldPrice;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((ticketCounts == null) ? 0 : ticketCounts.hashCode());
		result = prime * result + ((ticketId == null) ? 0 : ticketId.hashCode());
		result = prime * result + ((ticketName == null) ? 0 : ticketName.hashCode());
		result = prime * result + ((ticketOldPrice == null) ? 0 : ticketOldPrice.hashCode());
		result = prime * result + ((ticketPrice == null) ? 0 : ticketPrice.hashCode());
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
		TicketDetail other = (TicketDetail) obj;
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
		if (ticketName == null) {
			if (other.ticketName != null)
				return false;
		} else if (!ticketName.equals(other.ticketName))
			return false;
		if (ticketOldPrice == null) {
			if (other.ticketOldPrice != null)
				return false;
		} else if (!ticketOldPrice.equals(other.ticketOldPrice))
			return false;
		if (ticketPrice == null) {
			if (other.ticketPrice != null)
				return false;
		} else if (!ticketPrice.equals(other.ticketPrice))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "TicketDetail [ticketId=" + ticketId + ", ticketName=" + ticketName + ", ticketCounts=" + ticketCounts
				+ ", ticketPrice=" + ticketPrice + ", ticketOldPrice=" + ticketOldPrice + "]";
	}
}
