package com.sproutn.sproutn.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.Document;
import org.bson.types.ObjectId;
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
          .append("status", payload.get("status"))
          .append("paid", payload.get("paid"))
          .append("total", payload.get("total"))
          .append("projectId", payload.get("projectId"))
          .append("shippingAddress", payload.get("shippingAddress"))
          .append("prototype", payload.get("prototype"))
          .append("billingLocked", payload.get("billingLocked"))
          .append("processLocked", payload.get("processLocked"))
          .append("contractLocked", payload.get("contractLocked"))
          .append("currentDeliveryStep", payload.get("currentDeliveryStep"))
          .append("completedDeliveryStep", payload.get("completedDeliveryStep"));

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

      for (Document doc : collection.find(
        Filters.and(
          Filters.eq("projectId", projectId),
          Filters.eq("prototype", false)
        )
      )) {
        Map<String, Object> order = new HashMap<>();
        order.put("id", doc.getObjectId("_id").toHexString().toUpperCase());
        order.put("status", doc.getString("status"));
        order.put("paid", doc.get("paid"));
        order.put("total", doc.get("total"));
        order.put("projectId", doc.getString("projectId"));
        order.put("shippingAddress", doc.getString("shippingAddress"));
        order.put("prototype", doc.get("prototype"));
        order.put("billingLocked", doc.getBoolean("billingLocked"));
        order.put("processLocked", doc.getBoolean("processLocked"));
        order.put("contractLocked", doc.getBoolean("contractLocked"));
        order.put("currentDeliveryStep", doc.get("currentDeliveryStep"));
        order.put("completedDeliveryStep", doc.get("completedDeliveryStep"));

        orders.add(order);
      }

      return ResponseEntity.ok(orders);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }


  @GetMapping("/getprototype")
  public ResponseEntity<Map<String, Object>> getPrototypeOrder(@RequestParam String projectId) {
    MongoDatabase database = mongoClient.getDatabase(cluster);
    MongoCollection<Document> collection = database.getCollection(orderCollection);

    try {
      Document doc = collection.find(
        Filters.and(
          Filters.eq("prototype", true),
          Filters.eq("projectId", projectId)
        )
      ).first();

      if (doc == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }

      Map<String, Object> order = new HashMap<>();
      order.put("id", doc.getObjectId("_id").toHexString().toUpperCase());
      order.put("status", doc.getString("status"));
      order.put("paid", doc.get("paid"));
      order.put("total", doc.get("total"));
      order.put("projectId", doc.getString("projectId"));
      order.put("shippingAddress", doc.getString("shippingAddress"));
      order.put("prototype", doc.getBoolean("prototype"));
      order.put("billingLocked", doc.getBoolean("billingLocked"));
      order.put("processLocked", doc.getBoolean("processLocked"));
      order.put("contractLocked", doc.getBoolean("contractLocked"));
      order.put("currentDeliveryStep", doc.get("currentDeliveryStep"));
      order.put("completedDeliveryStep", doc.get("completedDeliveryStep"));

      return ResponseEntity.ok(order);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @PutMapping("/updateaddress")
  public ResponseEntity<String> updateOrderAddress(
      @RequestParam String orderId,
      @RequestBody Map<String, String> body
  ) {
    MongoDatabase database = mongoClient.getDatabase(cluster);
    MongoCollection<Document> collection = database.getCollection(orderCollection);

    try {
      String newAddress = body.get("shippingAddress");

      if (newAddress == null || newAddress.isEmpty()) {
        return ResponseEntity.badRequest().body("Missing new shipping address.");
      }

      var result = collection.updateOne(
        Filters.eq("_id", new ObjectId(orderId)),
        new Document("$set", new Document("shippingAddress", newAddress))
      );

      if (result.getModifiedCount() == 0) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Order not found or address unchanged.");
      }

      return ResponseEntity.ok("Shipping address updated successfully.");
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating address: " + e.getMessage());
    }
  }
}