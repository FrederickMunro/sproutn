package com.sproutn.sproutn.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.mongodb.ConnectionString;
import com.mongodb.MongoClientSettings;
import com.mongodb.ServerApi;
import com.mongodb.ServerApiVersion;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

@Configuration
public class MongoConfig {

    @Bean
    public MongoClient mongoClient() {
        String connectionString = "mongodb+srv://fred:QtAwuKkJuunNDEka@sproutn.yzyk5ed.mongodb.net/?retryWrites=true&w=majority&appName=Sproutn";
        
        ServerApi serverApi = ServerApi.builder()
            .version(ServerApiVersion.V1)
            .build();
        
        MongoClientSettings settings = MongoClientSettings.builder()
            .applyConnectionString(new ConnectionString(connectionString))
            .serverApi(serverApi)
            .build();

        return MongoClients.create(settings);
    }
}
