package com.wissen.justhire;

import javax.annotation.Resource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import com.wissen.justhire.service.StorageService;

@SpringBootApplication
@EnableJpaRepositories
public class JustHireAppApplication {
	@Resource
	StorageService storageService;

	public static void main(String[] args) {
		SpringApplication.run(JustHireAppApplication.class, args);

	}

}
