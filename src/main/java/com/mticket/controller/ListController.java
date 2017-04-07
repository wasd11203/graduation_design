package com.mticket.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mticket.service.ListService;

/**
 * 广告,特惠看,热销 相关的 控制器
 * @author ganzhigang
 * 时间：2017年4月7日 上午10:35:36
 */
@Controller
@RequestMapping("/list")
public class ListController extends BasicController{

	@Autowired
	private ListService listService;
	
	@RequestMapping("/adv")
	@ResponseBody
	public List<Map<String, Object>> listAdvertising(){
		logger.debug("CONTROLLER -- 获取广告列表资源");
		return listService.getAdvertisingResourceList();
	}
	
	@RequestMapping("/discount")
	@ResponseBody
	public List<Map<String, Object>> listDiscount(){
		logger.debug("CONTROLLER -- 获取特惠看列表资源");
		return listService.getDiscountResourceList();
	}
	
	@RequestMapping("/nearHost")
	@ResponseBody
	public List<Map<String, Object>> listNearHost(){
		logger.debug("CONTROLLER -- 获取 最新资讯 列表资源");
		return listService.getNearHostResourceList();
	}
	
	@RequestMapping("/hostSell")
	@ResponseBody
	public List<Map<String, Object>> listHostSell(){
		logger.debug("CONTROLLER -- 获取 热销资源 列表资源");
		return listService.getHotSellResourceList();
	}
	
	@RequestMapping("/recommendList")
	@ResponseBody
	public List<Map<String, Object>> listRecommendList(){
		logger.debug("CONTROLLER -- 获取 推荐场馆 列表资源");
		return listService.getRecommendVenueList();
	}
	
}
