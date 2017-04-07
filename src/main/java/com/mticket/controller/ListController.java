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
public class ListController {

	@Autowired
	private ListService listService;
	
	@RequestMapping("/adv")
	@ResponseBody
	public List<Map<String, Object>> listAdvertising(){
		return listService.getAdvertisingResourceList();
	}
	
	@RequestMapping("/discount")
	@ResponseBody
	public List<Map<String, Object>> listDiscount(){
		return listService.getDiscountResourceList();
	}
	
	@RequestMapping("/nearHost")
	@ResponseBody
	public List<Map<String, Object>> listNearHost(){
		return listService.getNearHostResourceList();
	}
	
	@RequestMapping("/hostSell")
	@ResponseBody
	public List<Map<String, Object>> listHostSell(){
		return listService.getHotSellResourceList();
	}
	
	@RequestMapping("/recommendList")
	@ResponseBody
	public List<Map<String, Object>> listRecommendList(){
		return listService.getRecommendVenueList();
	}
	
}
