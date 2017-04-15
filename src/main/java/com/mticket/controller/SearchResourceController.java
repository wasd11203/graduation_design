package com.mticket.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mticket.entity.nav.region.RegionNavigationThird;
import com.mticket.entity.nav.resource.ResourceNavigationSec;
import com.mticket.service.NavigationService;
import com.mticket.service.ResourceSearchOperationService;

/**
 * 搜索资源 操作的控制器
 * 
 * @author ganzhigang 时间：2017年4月2日 上午10:38:35
 */
@Controller
@RequestMapping("/resource")
public class SearchResourceController extends BasicController {

	@Autowired
	private NavigationService navigationService;

	@Autowired
	private ResourceSearchOperationService resourceSearchOperationService;

	@RequestMapping("/searchByMark")
	@ResponseBody
	public JSONObject searchResourceByMark(String keywords, String regionThirdId,String venueId, String resourceTopId,
			String resourceSecId, String resourceThirdId, String minTime, String maxTime,String curPage) {
		
		// 设置每页的数量
		int pageSize = 4;
		int cur = 1;
		int startIndex = 0;
		
		int allcounts = 0;
		int totalPage = 0;
		
		if(curPage != null && !curPage.trim().isEmpty()){
			
			cur = Integer.parseInt(curPage);
		}
		
		startIndex = (cur-1)*pageSize;
				
		logger.debug("CONTROLLER -- 当前访问的url:/resource/searchByMark,params:" + keywords + "," + regionThirdId + "," +venueId+","
				+ resourceTopId + "," + resourceSecId + "," + resourceThirdId+","+minTime+","+maxTime+","+curPage);

		JSONObject jobj = new JSONObject();
		SimpleDateFormat sdf = new SimpleDateFormat("EEE MMM dd yyyy hh:mm:ss z",Locale.ENGLISH);

		Integer resourceTop = null;
		Map<String, Object> map = transforArgs(regionThirdId,venueId, resourceSecId, resourceThirdId, minTime, maxTime, sdf);

		if (resourceTopId != null && !resourceTopId.trim().isEmpty()) {
			resourceTop = new Integer(resourceTopId);
		}
		
		map.put("resourceTopId", resourceTop);
		map.put("startIndex", startIndex);
		map.put("pageSize", pageSize);
		
		jobj.put("code", 0);
		List<RegionNavigationThird> regionThirdNav = navigationService.getRegionThirdListByResourceTopId(resourceTop);
		jobj.put("cityList", regionThirdNav);

		List<ResourceNavigationSec> resourceSecNav = navigationService.getResourceListByRegionThirdAndResourceTop(map);
		jobj.put("resourceNav", resourceSecNav);

		List<Map<String, Object>> resourceList = resourceSearchOperationService.searchResourceByMark(map);
		jobj.put("resourceList", resourceList);
		
		allcounts = resourceSearchOperationService.getAllCounts(map);
		totalPage = (allcounts == 0 || allcounts%pageSize == 0 ) ? (allcounts/pageSize) : (allcounts/pageSize)+1;
		
		jobj.put("counts", allcounts);
		jobj.put("totalPage", totalPage);
		
		return jobj;
	}

	private Map<String, Object> transforArgs(String regionThirdId,String venueId, String resourceSecId, String resourceThirdId,
			String minTime, String maxTime, SimpleDateFormat sdf) {
		logger.debug("CONTROLLER -- 当前访问的方法:com.mticket.controller.nav.NavigationController.transforArgs,params:" + regionThirdId + ","
				+ "," + resourceSecId + "," + resourceThirdId+","+minTime+","+maxTime);
		Integer regionThird = null;
		Integer resourceSec = null;
		Integer resourceThird = null;
		Integer venue = null;
		Date min = null;
		Date max = null;

		Map<String, Object> map = new HashMap<String, Object>();

		if (regionThirdId != null && !regionThirdId.trim().isEmpty()) {
			regionThird = new Integer(regionThirdId);
		}
		
		if (venueId != null && !venueId.trim().isEmpty()) {
			venue = new Integer(venueId);
		}
		
		if (resourceSecId != null && !resourceSecId.trim().isEmpty()) {
			resourceSec = new Integer(resourceSecId);
		}

		if (resourceThirdId != null && !resourceThirdId.trim().isEmpty()) {
			resourceThird = new Integer(resourceThirdId);
		}

		try {
			if (minTime != null && !minTime.trim().isEmpty()) {
//				Wed Apr 12 2017 00:00:00 GMT+0800 (中国标准时间)
				String minTemp = minTime.substring(0, minTime.lastIndexOf(" ")).replace("GMT+0800", "GMT +08:00").replace("GMT 0800", "GMT +08:00");
				min = sdf.parse(minTemp);
			}
			if (maxTime != null && !maxTime.trim().isEmpty()) {
				String maxTemp = maxTime.substring(0, maxTime.lastIndexOf(" ")).replace("GMT+0800", "GMT +08:00").replace("GMT 0800", "GMT +08:00");
				max = sdf.parse(maxTemp);
			}
		} catch (ParseException e) {
			e.printStackTrace();
		}

		map.put("regionThirdId", regionThird);
		map.put("venueId", venue);
		map.put("resourceSecId", resourceSec);
		map.put("resourceThirdId", resourceThird);
		map.put("minTime", min);
		map.put("maxTime", max);
		return map;
	}
	
	@RequestMapping("/roughlyList")
	@ResponseBody
	public JSONObject searchResource(String resourceTopId,String resourceSecId){
		
		logger.debug("CONTROLLER -- 当前访问的url:/resource/roughlyList,params:" + "," + resourceTopId + "," + resourceSecId );
		
		JSONObject jobj = new JSONObject();
		Integer resourceTop = null;
		Integer resourceSec = null;
		Map<String, Object> map = new HashMap<String, Object>();
		
		if(resourceTopId != null && !resourceTopId.trim().isEmpty()){
			resourceTop = new Integer(resourceTopId);
		}
		if(resourceSecId != null && !resourceSecId.trim().isEmpty()){
			resourceSec = new Integer(resourceSecId);
		}
		map.put("resourceTopId", resourceTop);
		map.put("resourceSecId", resourceSec);
		List<Map<String, Object>> res = resourceSearchOperationService.searchResource(map);
		jobj.put("code", 0);
		jobj.put("data", res);
		
		return jobj;
	}
	
	

}
