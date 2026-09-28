package com.hiresphere.backend.controller;

import com.hiresphere.backend.entity.Application;
import com.hiresphere.backend.service.ApplicationService;

import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/applications")
public class ApplicationController {

    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    // CREATE APPLICATION
    @PostMapping
    public ResponseEntity<Application> createApplication(
            @Valid @RequestBody Application application) {

        return ResponseEntity.ok(
                applicationService.createApplication(application));
    }

    // GET ALL APPLICATIONS
    @GetMapping
    public ResponseEntity<List<Application>> getAllApplications() {

        return ResponseEntity.ok(
                applicationService.getAllApplications());
    }

    // GET APPLICATION BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Application> getApplicationById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                applicationService.getApplicationById(id));
    }

    // UPDATE APPLICATION
    @PutMapping("/{id}")
    public ResponseEntity<Application> updateApplication(
            @PathVariable Long id,
            @Valid @RequestBody Application application) {

        return ResponseEntity.ok(
                applicationService.updateApplication(id, application));
    }

    // DELETE APPLICATION
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteApplication(
            @PathVariable Long id) {

        applicationService.deleteApplication(id);

        return ResponseEntity.ok(
                "Application deleted successfully");
    }
}