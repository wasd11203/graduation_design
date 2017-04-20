package com.mticket.security.service.impl;

import java.util.Collection;
//import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;
import org.springframework.stereotype.Service;

//import com.mticket.security.util.UrlMatcher;
//import com.mticket.security.util.impl.AntUrlPathMatcher;


/**
 * 基于url 的鉴权
 * @author ganzhigang
 * 时间：2017年3月22日 上午10:10:52
 */
@Service("securityMetadataSource")
public class InvocationSecurityMetadataSource implements FilterInvocationSecurityMetadataSource {
	
	public static Logger logger = LoggerFactory.getLogger(InvocationSecurityMetadataSource.class);
	
//	private UrlMatcher urlMatcher = new AntUrlPathMatcher();
//	private static Map<String, Collection<ConfigAttribute>> resourceMap = null;
	
	// 在 tomcat启动时 通过构造方法实例化一次角色资源关系
	public InvocationSecurityMetadataSource() {
		logger.debug("初始化 角色-- 资源关系");
		loadResourceDefine();
	}

	// tomcat开启时加载一次，加载所有url和权限（或角色）的对应关系
	private void loadResourceDefine() {
		
	}

	// 参数是要访问的url，返回这个url对于的所有权限（或角色）
	public Collection<ConfigAttribute> getAttributes(Object object) throws IllegalArgumentException {
		logger.debug("获得可访问该url的所有权限:"+object);
		return null;
	}

	public boolean supports(Class<?> clazz) {
		return true;
	}

	public Collection<ConfigAttribute> getAllConfigAttributes() {
		return null;
	}
}