package com.mticket.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
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
	public JSONObject searchResourceByMark(String keywords, String regionThirdId, String resourceTopId,
			String resourceSecId, String resourceThirdId, String minTime, String maxTime) {
		
		logger.debug("当前访问的url:/resource/searchByMark,params:" + keywords + "," + regionThirdId + ","
				+ resourceTopId + "," + resourceSecId + "," + resourceThirdId+","+minTime+","+maxTime);

		JSONObject jobj = new JSONObject();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		Integer resourceTop = null;
		Map<String, Object> map = transforArgs(regionThirdId, resourceSecId, resourceThirdId, minTime, maxTime, sdf);

		if (resourceTopId != null && !resourceTopId.trim().isEmpty()) {
			resourceTop = new Integer(resourceTopId);
		}
		map.put("resourceTopId", resourceTop);

		jobj.put("code", 0);
		List<RegionNavigationThird> regionThirdNav = navigationService.getRegionThirdListByResourceTopId(resourceTop);
		jobj.put("cityList", regionThirdNav);

		List<ResourceNavigationSec> resourceSecNav = navigationService.getResourceListByRegionThirdAndResourceTop(map);
		jobj.put("resourceNav", resourceSecNav);

		List<Map<String, Object>> resourceList = resourceSearchOperationService.searchResourceByMark(map);
		jobj.put("resourceList", resourceList);

		return jobj;
	}

	private Map<String, Object> transforArgs(String regionThirdId, String resourceSecId, String resourceThirdId,
			String minTime, String maxTime, SimpleDateFormat sdf) {
		logger.debug("当前访问的方法:com.mticket.controller.nav.NavigationController.transforArgs,params:" + regionThirdId + ","
				+ "," + resourceSecId + "," + resourceThirdId+","+minTime+","+maxTime);
		Integer regionThird = null;
		Integer resourceSec = null;
		Integer resourceThird = null;
		Date min = null;
		Date max = null;

		Map<String, Object> map = new HashMap<String, Object>();

		if (regionThirdId != null && !regionThirdId.trim().isEmpty()) {
			regionThird = new Integer(regionThirdId);
		}

		if (resourceSecId != null && !resourceSecId.trim().isEmpty()) {
			resourceSec = new Integer(resourceSecId);
		}

		if (resourceThirdId != null && !resourceThirdId.trim().isEmpty()) {
			resourceThird = new Integer(resourceThirdId);
		}

		try {
			if (minTime != null && !minTime.trim().isEmpty()) {
				min = sdf.parse(minTime);
			}
			if (maxTime != null && !maxTime.trim().isEmpty()) {
				max = sdf.parse(maxTime);
			}
		} catch (ParseException e) {
			e.printStackTrace();
		}

		map.put("regionThirdId", regionThird);
		map.put("resourceSecId", resourceSec);
		map.put("resourceThirdId", resourceThird);
		map.put("minTime", min);
		map.put("maxTime", max);
		return map;
	}

}
