package com.wissen.justhire.service;

import com.wissen.justhire.model.User;

public interface EmailService {


	void sendEMail(String mailTO, User user);

}