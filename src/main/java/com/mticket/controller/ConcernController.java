package com.mticket.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mticket.service.ConcernService;

@Controller
@RequestMapping("/concern")
public class ConcernController extends BasicController {

	@Autowired
	private ConcernService concernService;
	
	@RequestMapping("/create")
	@ResponseBody
	public JSONObject createConcern(String userId,String resourceId,String regionId,String venueId,String siteId,String ticketId){

		logger.debug("CONTROLLER-- 创建关注：[{}],[{}],[{}],[{}],[{}],[{}]",userId,resourceId,regionId,venueId,siteId,ticketId);
		
		JSONObject jobj = new JSONObject();
		Map<String, Object> map = transforCancernArgs(userId, resourceId, regionId, venueId, siteId, ticketId);
		int res = concernService.createConcernByUserId(map);
		if(res > 0 ){
			jobj.put("code", 0);
			jobj.put("msg", "关注成功");
		}else{
			jobj.put("code", 1);
			jobj.put("msg", "关注失败");
		}
		return jobj;
	}

	public Map<String, Object> transforCancernArgs(String userId, String resourceId, String regionId, String venueId, String siteId,
			String ticketId) {
		logger.debug("CONTROLLER-- 转换关注的参数为Map：[{}],[{}],[{}],[{}],[{}],[{}]",userId,resourceId,regionId,venueId,siteId,ticketId);
		Integer user = null;
		Integer resource = null;
		Integer region = null;
		Integer venue = null;
		Integer site = null;
		Integer ticket = null;
		Map<String, Object> map = new HashMap<String, Object>();
		
		if(userId != null && !userId.trim().isEmpty()){
			user = new Integer(userId);
		}
		if(resourceId != null && !resourceId.trim().isEmpty()){
			resource = new Integer(resourceId);
		}
		if(regionId != null && !regionId.trim().isEmpty()){
			region = new Integer(regionId);
		}
		if(venueId != null && !venueId.trim().isEmpty()){
			venue = new Integer(venueId);
		}
		if(siteId != null && !siteId.trim().isEmpty()){
			site = new Integer(siteId);
		}
		if(ticketId != null && !ticketId.trim().isEmpty()){
			ticket = new Integer(ticketId);
		}
		map.put("resourceId", resource);
		map.put("userId", user);
		map.put("regionId", region);
		map.put("venueId", venue);
		map.put("siteId", site);
		map.put("ticketId", ticket);
		
		return map;
	}
	
	@RequestMapping("/cancel")
	@ResponseBody
	public JSONObject cancelConcern(String concernId){
		logger.debug("CONTROLLER-- 取消关注：[{}]",concernId);
		Integer concern = null;
		Map<String, Object> map = new HashMap<String, Object>();
		JSONObject jobj = new JSONObject();
		
		if(concernId != null && !concernId.trim().isEmpty()){
			concern = new Integer(concernId);
		}
		map.put("concernId", concern);
		int res = concernService.cancelConcern(map);
		if(res > 0){
			jobj.put("code", 0);
			jobj.put("msg", "取消关注成功");
		}else{
			jobj.put("code",1);
			jobj.put("msg", "取消关注失败");
		}
		return jobj;
	}
	
	
}
