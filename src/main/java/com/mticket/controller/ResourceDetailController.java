package com.mticket.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mticket.entity.ResourceDetail;
import com.mticket.service.DetailInfoService;

@Controller
@RequestMapping("/detail")
public class ResourceDetailController {

	@Autowired
	private DetailInfoService detailInfoService;
	
	@RequestMapping("/resource")
	@ResponseBody
	public ResourceDetail loadResourceDetailInfo(String resourceId,String regionThirdId){
		
		Integer resource = null;
//		Integer regionThird = null;
		if(resourceId != null && !resourceId.trim().isEmpty()){
			resource = new Integer(resourceId);
		}
//		if(regionThirdId != null && !regionThirdId.trim().isEmpty()){
//			regionThird = new Integer(regionThirdId);
//		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("resourceId", resource);
//		map.put("regionThirdId", regionThird);
		
		ResourceDetail res = detailInfoService.getResourceDetailInfo(map);
		return res;
	}
	
}
