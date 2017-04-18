package com.mticket.security.controller;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mticket.controller.BasicController;
import com.mticket.security.entity.User;
import com.mticket.security.entity.UserInfoDetails;
import com.mticket.security.service.AccountService;

@Controller
@RequestMapping("/account")
public class AccountController extends BasicController{

	@Autowired
	private AccountService accountService;
	
	@RequestMapping("/regist")
	@ResponseBody
	public JSONObject registAccount(String phone,String password){
		logger.debug("CONTROLLER-- 注册用户:[{}],[{}]",phone,password);
		JSONObject jobj = new JSONObject();
		Map<String, Object> map = new HashMap<String, Object>(); 
		
		if(phone != null && !phone.trim().isEmpty()){
			map.put("phone", phone.trim());
		}
		if(password != null && !password.trim().isEmpty()){
			map.put("password", password.trim());
		}
		int counts =accountService.createUser(map);
		if(counts>0){
			jobj.put("code", 0);
			jobj.put("data", accountService.loadUser(map));
		}else{
			jobj.put("code", 1);
			jobj.put("msg", "注册用户失败");
		}
		return jobj;
	}
	
	@RequestMapping("/login")
	@ResponseBody
	public JSONObject loginAccount(Principal user){
		Authentication auth = (Authentication) user;
        UserInfoDetails uid = (UserInfoDetails) auth.getPrincipal();
        User authUser = uid.getUser();
        String username = authUser.getUsername();
        String password = authUser.getPassword();
        
		logger.debug("CONTROLLER-- 登陆用户:[{}],[{}]",username,password);
		JSONObject jobj = new JSONObject();
		Map<String, Object> map = new HashMap<String, Object>(); 
		
		if(username != null && !username.trim().isEmpty()){
			map.put("phone", username.trim());
		}
		if(password != null && !password.trim().isEmpty()){
			map.put("password", password.trim());
		}
		Map<String, Object> res =accountService.loadUser(map);
		
		if(res != null && res.size() > 0){
			jobj.put("code", 0);
			jobj.put("data", res);
		}else{
			jobj.put("code",1);
			jobj.put("msg", "登录失败");
		}
		
		return jobj;
	}
	
	@RequestMapping("/logout")
	@ResponseBody
	public JSONObject logoutAccount(String userId){
		logger.debug("CONTROLLER-- 登出用户Id:[{}]",userId);
		JSONObject jobj = new JSONObject();
		if(userId != null && !userId.trim().isEmpty()){
			jobj.put("code", 0);
		}else{
			jobj.put("code",1);
			jobj.put("msg", "登出失败");
		}
		
		return jobj;
	}
	
	@RequestMapping("/check")
	@ResponseBody
	public JSONObject checkAccount(String phone){
		logger.debug("CONTROLLER-- 判断号码是否已被使用:[{}],[{}]",phone);
		JSONObject jobj = new JSONObject();
		Map<String, Object> map = new HashMap<String, Object>(); 
		
		if(phone != null && !phone.trim().isEmpty()){
			map.put("phone", phone.trim());
		}
		Map<String, Object> res =accountService.loadUser(map);
		
		if(res == null || res.size() <= 0){
			jobj.put("code", 0);
			jobj.put("data", "号码可以使用");
		}else{
			jobj.put("code",1);
			jobj.put("msg", "号码已被使用，请更换号码");
		}
		
		return jobj;
	}
	
	
}
