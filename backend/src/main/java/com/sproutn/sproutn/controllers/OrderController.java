package com.sproutn.sproutn.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;

@RestController
@CrossOrigin
public class OrderController {

  @Autowired
  MongoClient mongoClient;

  @Value("${mongo.cluster.name}")
  private String cluster;

  @Value("${mongo.collection.orders}")
  private String orderCollection;

  @PostMapping("/addorder")
  public ResponseEntity<String> addOrder(@RequestBody Map<String, Object> payload) {
    MongoDatabase database = mongoClient.getDatabase(cluster);
    MongoCollection<Document> collection = database.getCollection(orderCollection);

    try {
      Document newOrder = new Document()
          .append("number", payload.get("number"))
          .append("status", payload.get("status"))
          .append("paid", payload.get("paid"))
          .append("total", payload.get("total"))
          .append("projectId", payload.get("projectId"))
          .append("shippingAddress", payload.get("shippingAddress"));;

      collection.insertOne(newOrder);
      return new ResponseEntity<>("Order created successfully", HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>("Failed to add order: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/getorders")
  public ResponseEntity<List<Map<String, Object>>> getOrdersByProjectId(@RequestParam String projectId) {
    MongoDatabase database = mongoClient.getDatabase(cluster);
    MongoCollection<Document> collection = database.getCollection(orderCollection);

    try {
      List<Map<String, Object>> orders = new ArrayList<>();

      for (Document doc : collection.find(Filters.eq("projectId", projectId))) {
        Map<String, Object> order = new HashMap<>();

        order.put("id", doc.getObjectId("_id").toHexString().toUpperCase());
        order.put("status", doc.getString("status"));
        order.put("paid", doc.get("paid"));
        order.put("total", doc.get("total"));
        order.put("projectId", doc.getString("projectId"));
        order.put("shippingAddress", doc.getString("shippingAddress"));

        orders.add(order);
      }

      return ResponseEntity.ok(orders);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}