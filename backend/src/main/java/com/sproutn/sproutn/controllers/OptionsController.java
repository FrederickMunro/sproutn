package com.sproutn.sproutn.controllers;

import java.util.*;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.mongodb.client.*;
import com.mongodb.client.model.Filters;

@RestController
@CrossOrigin
public class OptionsController {

  @Autowired
  MongoClient mongoClient;

  @Value("${mongo.cluster.name}")
  private String cluster;

  @Value("${mongo.collection.options}")
  private String optionsCollection;

  @PostMapping("/addoptions")
  public ResponseEntity<String> addOptions(@RequestBody Map<String, Object> payload) {
    MongoDatabase database = mongoClient.getDatabase(cluster);
    MongoCollection<Document> collection = database.getCollection(optionsCollection);

    try {
      String projectId = (String) payload.get("projectId");
      Object options = payload.get("options");

      Document newOptionsDoc = new Document()
          .append("projectId", projectId)
          .append("options", options);

      collection.insertOne(newOptionsDoc);

      return new ResponseEntity<>("Options saved successfully", HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>("Failed to add options: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/getoptions")
  public ResponseEntity<Map<String, Object>> getOptions(@RequestParam String projectId) {
    MongoDatabase database = mongoClient.getDatabase(cluster);
    MongoCollection<Document> collection = database.getCollection(optionsCollection);

    try {
      Document doc = collection.find(Filters.eq("projectId", projectId)).first();
      if (doc == null) {
        return ResponseEntity.notFound().build();
      }

      Map<String, Object> result = new HashMap<>();
      result.put("id", doc.getObjectId("_id").toHexString().toUpperCase());
      result.put("projectId", doc.getString("projectId"));
      result.put("options", doc.get("options"));

      return ResponseEntity.ok(result);

    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}