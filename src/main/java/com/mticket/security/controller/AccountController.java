package com.mticket.security.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mticket.security.service.AccountService;

@Controller
@RequestMapping("/account")
public class AccountController {

	@Autowired
	private AccountService accountService;
	
	@RequestMapping("/regist")
	@ResponseBody
	public JSONObject registAccount(String phone,String password){
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
	public JSONObject loginAccount(String phone,String password){
		JSONObject jobj = new JSONObject();
		Map<String, Object> map = new HashMap<String, Object>(); 
		
		if(phone != null && !phone.trim().isEmpty()){
			map.put("phone", phone.trim());
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
	
}
