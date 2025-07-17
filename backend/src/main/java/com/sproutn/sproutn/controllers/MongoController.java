package com.sproutn.sproutn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sproutn.sproutn.service.MongoService;

@RestController
public class MongoController {

    @Autowired
    private MongoService mongoService;

    @GetMapping("/testMongoConnection")
    public String testMongoConnection() {
        return mongoService.testConnection();
    }
}
