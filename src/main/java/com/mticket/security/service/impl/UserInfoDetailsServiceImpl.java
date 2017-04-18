package com.mticket.security.service.impl;

import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mticket.mapper.UserMapper;
import com.mticket.security.entity.User;
import com.mticket.security.entity.UserInfoDetails;

@Service("userDetailsService")
public class UserInfoDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private UserMapper userMapper;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = new User();
		Collection<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
		
		try {
			Map<String, Object> map = new HashMap<String, Object>();
			Map<String, Object> res = new HashMap<String, Object>();
			map.put("phone", username);
			res = userMapper.loadUserInfoByPhone(map);
			if(!res.isEmpty()){
				user.setPassword((String)res.get("PASSWORD"));
				user.setUsername(username);
			}else {
				user = null;
			}
		
		} catch (Exception e) {
			throw new RuntimeException("user select fail");
		}
		
		if(null == user){
			throw new RuntimeException("no user");
		}
        
		UserInfoDetails uid = new UserInfoDetails(user.getUsername(), user.getPassword(), authorities);
		uid.setUser(user);
		
		Authentication authentication = new UsernamePasswordAuthenticationToken(uid, null, uid.getAuthorities());
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		return uid;
	}

}
