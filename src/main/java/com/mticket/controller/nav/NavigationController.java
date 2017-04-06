package com.mticket.controller.nav;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mticket.controller.BasicController;
import com.mticket.entity.nav.region.RegionNavigation;
import com.mticket.entity.nav.resource.ResourceNavigationSec;
import com.mticket.service.NavigationService;

/**
 * 导航 的控制器
 * @author ganzhigang
 * 时间：2017年4月2日 上午10:39:06
 */
@Controller
@RequestMapping("/nav")
public class NavigationController extends BasicController {
	
	@Autowired
	private NavigationService navigationService;
	
	@RequestMapping("/region")
	@ResponseBody
	public List<RegionNavigation> getRegionNavByResourceTopId(String resourceTopId){
		logger.debug("CONTROLLER -- 当前访问的url:/nav/region,params:"+resourceTopId);
		Integer resourceTop = null;
		if(resourceTopId != null && !resourceTopId.trim().isEmpty()){
			resourceTop = new Integer(resourceTopId);
		}
		return navigationService.getRegionListByResourceTopId(resourceTop);
	}
	
	@RequestMapping("/resource_top")
	@ResponseBody
	public List<Map<String, Object>> getResourceTopNav(){
		logger.debug("CONTROLLER --当前访问的url:/nav/resource_top,无参");
		return navigationService.getTopResourceList();
	}
	
	@RequestMapping("/resource_nav")
	@ResponseBody
	public List<ResourceNavigationSec> getResourceNav(String resourceTopId){
		logger.debug("CONTROLLER --当前访问的url:/nav/resource_nav,params:"+resourceTopId);
		Integer resourceTop = null;
		if(resourceTopId != null && !resourceTopId.trim().isEmpty()){
			resourceTop = new Integer(resourceTopId);
		}
		return navigationService.getSecResourceList(resourceTop);
	}
	
}
