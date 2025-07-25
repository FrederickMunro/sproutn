package com.sproutn.sproutn.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;

@RestController
@CrossOrigin
public class ProjectController {

  @Autowired
  MongoClient mongoClient;
  
  @Value("${mongo.cluster.name}")
  private String cluster;

  @Value("${mongo.collection.projects}")
  private String coll;

  @PostMapping("/addproject")
  public ResponseEntity<String> addProject(@RequestBody Map<String, Object> payload) {
    MongoDatabase database = mongoClient.getDatabase(cluster);
    MongoCollection<Document> collection = database.getCollection(coll);

    try {
      Date parsedDate = null;
      if (payload.get("time") != null) {
        parsedDate = new Date(((Number) payload.get("time")).longValue());
      }
      
      Document newProject = new Document()
          .append("name", payload.get("name"))
          .append("pending", payload.get("pending"))
          .append("time", parsedDate)
          .append("percent", payload.get("percent"))
          .append("userId", payload.get("userId"))
          .append("status", payload.get("status"));

      collection.insertOne(newProject);
      return new ResponseEntity<>("Project created successfully", HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>("Failed to add project: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/getprojects")
  public ResponseEntity<List<Map<String, Object>>> getProjectsByUserId(@RequestParam String userId) {
    MongoDatabase database = mongoClient.getDatabase(cluster);
    MongoCollection<Document> collection = database.getCollection(coll);

    try {
      List<Map<String, Object>> projects = new ArrayList<>();

      for (Document doc : collection.find(Filters.eq("userId", userId))) {
        Map<String, Object> project = new HashMap<>();

        project.put("id", doc.getObjectId("_id").toHexString().toUpperCase());
        project.put("name", doc.getString("name"));
        project.put("pending", doc.getString("pending"));
        Object percent = doc.get("percent");
        project.put("percent", percent instanceof Number ? ((Number) percent).doubleValue() : 0.0);
        project.put("userId", doc.getString("userId"));
        project.put("status", doc.getString("status"));

        Date timeDate = doc.getDate("time");
        if (timeDate != null) {
          project.put("time", timeDate.toInstant().toString());
        } else {
          project.put("time", null);
        }

        projects.add(project);
      }

      return ResponseEntity.ok(projects);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}
