package com.mticket.http;

import com.alibaba.fastjson.JSONObject;
import com.mticket.util.HttpUtil;
import com.taobao.api.ApiException;

public class TestHttp {

	public static void main(String[] args) {

		JSONObject res = null;
		JSONObject param = new JSONObject();
		param.put("phone", "18257155845");
		param.put("code", "123456");
		
		try {
			res = HttpUtil.alihttpPost("http://gw.api.taobao.com/router/rest", "23759410",
					"0928355adecb93406dc2b40c00a1ac07", "", "normal", "15757195840","SMS_62750037", "麦Ticket", param);
		} catch (ApiException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(res);
	}

}
