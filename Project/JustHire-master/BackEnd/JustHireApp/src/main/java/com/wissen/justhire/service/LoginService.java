package com.wissen.justhire.service;

import com.wissen.justhire.model.User;

public interface LoginService {
	boolean authenticateUser(String email, String Password);

	String generateToken(String userName);

	User getUser(String email);

}
