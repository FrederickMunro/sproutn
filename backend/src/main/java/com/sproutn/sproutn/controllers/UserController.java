package com.sproutn.sproutn.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.util.HashMap;
import java.util.Map;

import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;

@RestController
@CrossOrigin
public class UserController {

  @Autowired
  MongoClient mongoClient;
  
  @Value("${mongo.cluster.name}")
  private String cluster;

  @Value("${mongo.collection.users}")
  private String coll;

  @PostMapping("/adduser")
  public ResponseEntity<String> addUser(
      @RequestParam(value = "username", required = true) String username,
      @RequestParam(value = "first_name", required = true) String firstName,
      @RequestParam(value = "last_name", required = true) String lastName,
      @RequestParam(value = "password", required = true) String password) {

    // MongoDB connection
    MongoDatabase database = mongoClient.getDatabase(cluster);
    MongoCollection<Document> collection = database.getCollection(coll);

    try {
      // Create new user document
      Document newUser = new Document()
        .append("username", username)
        .append("first_name", firstName)
        .append("last_name", lastName)
        .append("password", password);

      // Insert new user into database
      collection.insertOne(newUser);

      // Return response entity with 200
      return new ResponseEntity<>("User successfully created.", HttpStatus.CREATED);
    } catch (Exception e) {
      // Return response entity with 500
      return new ResponseEntity<>("Failed to add lead: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/getuser/{id}")
  public ResponseEntity<Map<String,Object>> getUser(@PathVariable String id) {

    // MongoDB connection
    MongoDatabase database = mongoClient.getDatabase(cluster);
    MongoCollection<Document> collection = database.getCollection(coll);

    try {
      ObjectId objectId = new ObjectId(id);
      Document doc = collection.find(Filters.eq("_id", objectId)).first();

      if (doc == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
      }

      Map<String, Object> response = new HashMap<>();
      response.put("id", doc.getObjectId("_id").toString());
      response.put("username", doc.getString("username"));
      response.put("firstName", doc.getString("first_name"));
      response.put("lastName", doc.getString("last_name"));

      return ResponseEntity.ok(response);
    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "Invalid ID format"));
    }
  }

  @DeleteMapping("/deleteuser/{id}")
  public ResponseEntity<String> deleteUser(@PathVariable String id) {

    // MongoDB connection
    MongoDatabase database = mongoClient.getDatabase(cluster);
    MongoCollection<Document> collection = database.getCollection(coll);

    try {
      ObjectId objectId = new ObjectId(id);
      long deletedCount = collection.deleteOne(Filters.eq("_id", objectId)).getDeletedCount();

      if (deletedCount == 0) {
        return new ResponseEntity<>("User not found.", HttpStatus.NOT_FOUND);
      }

      return new ResponseEntity<>("User successfully deleted.", HttpStatus.OK);
    } catch (IllegalArgumentException e) {
      return new ResponseEntity<>("Invalid ID format.", HttpStatus.BAD_REQUEST);
    } catch (Exception e) {
      return new ResponseEntity<>("Error deleting user: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PostMapping("/login")
  public ResponseEntity<Map<String, String>> login(
      @RequestParam("username") String username,
      @RequestParam("password") String password) {

    // MongoDB connection
    MongoDatabase database = mongoClient.getDatabase(cluster);
    MongoCollection<Document> collection = database.getCollection(coll);
    
    try {
    Document user = collection.find(Filters.and(
      Filters.eq("username", username),
      Filters.eq("password", password)
    )).first();

    if (user == null) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
        .body(Map.of("error", "Invalid username or password."));
    }

    return ResponseEntity.ok(Map.of("id", user.getObjectId("_id").toString()));
  } catch (Exception e) {
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
      .body(Map.of("error", "Login failed: " + e.getMessage()));
  }
  }
}
