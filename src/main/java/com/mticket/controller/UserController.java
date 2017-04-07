package com.mticket.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mticket.entity.UserDetail;
import com.mticket.service.UserService;

/**
 * 用户信息操作相关 控制器
 * @author ganzhigang
 * 时间：2017年4月6日 下午4:50:50
 */
@Controller
@RequestMapping("/user")
public class UserController extends BasicController {

	@Autowired
	private UserService userService;

	@RequestMapping("/detail")
	@ResponseBody
	public UserDetail getUserDetailInfo(String userId) {
		logger.debug("CONTROLLER -- 查询用户详细信息：[{}]",userId);
		Integer user = null;
		if (userId != null && !userId.trim().isEmpty()) {
			user = new Integer(userId);
		}
		return userService.getUserDetailInfo(user);
	}

	@RequestMapping("/update")
	@ResponseBody
	public JSONObject updateUserInfo(String userId, String password, String nickname, String name, String birth,
			String gender,String icon) {
		logger.debug("CONTROLLER -- 更新用户信息：[{}],[{}],[{}],[{}],[{}],[{}],[{}],[{}]",userId,password,nickname,name,birth,gender,icon);
		JSONObject jobj = new JSONObject();
		Map<String, Object> map = transforUserInfoArgs(userId, password, nickname, name, birth, gender,icon);
		Integer res = userService.updateUserInfo(map);
		if(res > 0){
			jobj.put("code", 0);
		}else{
			jobj.put("code", 1);
		}
		return jobj;
	}

	public Map<String, Object> transforUserInfoArgs(String userId, String password, String nickname, String name, String birth,
			String gender,String icon) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		logger.debug("CONTROLLER -- 转换用户信息参数为map：[{}],[{}],[{}],[{}],[{}],[{}],[{}]",userId,password,nickname,name,birth,gender,icon);
		Integer user = null;
		Date birthDate = null;
		Integer gend = null;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		if (userId != null && !userId.trim().isEmpty()) {
			user = new Integer(userId);
		}
		if (gender != null && !gender.trim().isEmpty()) {
			gend = new Integer(gender);
		}
		if (birth != null && !birth.trim().isEmpty()) {
			try {
				birthDate = sdf.parse(birth);
			} catch (ParseException e) {
				e.printStackTrace();
			}
		}
		map.put("userId", user);
		map.put("password", password);
		map.put("nickname", nickname);
		map.put("name", name);
		map.put("birth", birthDate);
		map.put("gender", gend);
		map.put("icon", icon);
		return map;
	}

	@RequestMapping("/createAddress")
	@ResponseBody
	public JSONObject addReceiveAddress(String userId,String province,String city,String area,String more,String receiveName,String receivePhone,String isDefault){
		logger.debug("CONTROLLER -- 新增用户收货地址：[{}],[{}],[{}],[{}],[{}],[{}],[{}],[{}]",userId,province,city,area,more,receiveName,receivePhone,isDefault);
		Map<String, Object> map = new HashMap<String, Object>();
		JSONObject jobj = new JSONObject();
		Integer addressSta = null;
		Integer user = null;
		
		if (userId != null && !userId.trim().isEmpty()) {
			user = new Integer(userId);
		}
		
		if(isDefault != null && !isDefault.trim().isEmpty()){
			addressSta = new Integer(isDefault);
		}
		
		if(isDefault != null && !isDefault.trim().isEmpty()){
			addressSta = new Integer(isDefault);
		}
		
		map.put("userId", user);
		map.put("province", province);
		map.put("city", city);
		map.put("area", area);
		map.put("more", more);
		map.put("receiveName", receiveName);
		map.put("receivePhone", receivePhone);
		map.put("isDefault", addressSta);
		int res = userService.createAddress(map);
		if (res > 0) {
			jobj.put("code", 0);
		}else{
			jobj.put("code", 1);
		}
		return jobj;
	}
	
	@RequestMapping("/updateAddress")
	@ResponseBody
	public JSONObject updateAddress(String addressId,String userId,String province,String city,String area,String more,String receiveName,String receivePhone,String isDefault){
		
		logger.debug("CONTROLLER -- 更新用户收货地址：[{}],[{}],[{}],[{}],[{}],[{}],[{}],[{}],[{}]",userId,province,city,area,more,receiveName,receivePhone,isDefault);
		
		JSONObject jobj = new JSONObject();
		Map<String, Object> map = transforAddressInfo(addressId, userId, province, city, area, more, receiveName, receivePhone, isDefault);
		
		int res = userService.updateAddressByAddressId(map);
		if(res > 0){
			jobj.put("code", 0);
			jobj.put("msg", "更新成功");
		}else{
			jobj.put("code", 1);
			jobj.put("msg", "更新失败");
		}
		return jobj;	
	}

	public Map<String, Object> transforAddressInfo(String addressId, String userId, String province, String city, String area,
			String more, String receiveName, String receivePhone, String isDefault) {
		
		logger.debug("CONTROLLER -- 转换用户收货地址参数为map：[{}],[{}],[{}],[{}],[{}],[{}],[{}],[{}],[{}]",userId,province,city,area,more,receiveName,receivePhone,isDefault);
		Integer address = null;
		Integer user = null;
		Integer isdefault = null;
		
		Map<String, Object> map = new HashMap<String, Object>();
		if(addressId != null && !addressId.trim().isEmpty()){
			address = new Integer(addressId);
		}
		if(userId != null && !userId.trim().isEmpty()){
			user = new Integer(userId);
		}
		if(isDefault != null && !isDefault.trim().isEmpty()){
			isdefault = new Integer(isDefault);
		}
		map.put("userId", user);
		map.put("addressId", address);
		map.put("province", province);
		map.put("city", city);
		map.put("area", area);
		map.put("more", more);
		map.put("receiveName", receiveName);
		map.put("receivePhone", receivePhone);
		map.put("isDefault", isdefault);
		return map;
	}

	@RequestMapping("/del")
	@ResponseBody
	public JSONObject delAddress(String addressId){
		logger.debug("CONTROLLER -- 删除用户收货地址：",addressId);
		JSONObject jobj = new JSONObject();
		
		Integer address = null;
		if(addressId != null && !addressId.trim().isEmpty()){
			address = new Integer(addressId);
		}
		int res = userService.deleteAddressByAddressId(address);
		if(res > 0){
			jobj.put("code", 0);
			jobj.put("msg", "删除成功");
		}else{
			jobj.put("cod", 1);
			jobj.put("msg", "删除失败");
		}
		return jobj;
	}
	
}
