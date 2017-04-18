package com.mticket.security.entity;

import java.io.Serializable;

/**
 * 用户 类 --- 用于验证
 * @author ganzhigang
 * 时间：2017年4月5日 下午6:15:39
 */
public class User implements Serializable {

	private static final long serialVersionUID = -3418285214035851310L;

	/**
	 * 此处的username 是 phone
	 */
	private String username;
	private String password;
	
	public User(){
		
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
