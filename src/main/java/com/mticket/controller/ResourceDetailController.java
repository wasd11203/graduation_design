package com.mticket.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mticket.entity.ResourceDetail;
import com.mticket.service.DetailInfoService;

@Controller
@RequestMapping("/detail")
public class ResourceDetailController {

	@Autowired
	private DetailInfoService detailInfoService;
	
	@RequestMapping("/resource")
	public ResourceDetail loadResourceDetailInfo(String resourceId){
		
		Integer resource = null;
		
		if(resourceId != null && !resourceId.trim().isEmpty()){
			resource = new Integer(resourceId);
		}
		
		return detailInfoService.getResourceDetailInfo(resource);
	}
	
}
