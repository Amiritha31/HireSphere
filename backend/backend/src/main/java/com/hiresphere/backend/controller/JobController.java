package com.hiresphere.backend.controller;

import com.hiresphere.backend.entity.Job;
import com.hiresphere.backend.service.JobService;

import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/jobs")
public class JobController {

    // Job service
    private final JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    // CREATE JOB
    @PostMapping
    public ResponseEntity<Job> createJob(
            @Valid @RequestBody Job job) {

        return ResponseEntity.ok(
                jobService.createJob(job));
    }

    // GET ALL JOBS
    @GetMapping
    public ResponseEntity<List<Job>> getAllJobs() {

        return ResponseEntity.ok(
                jobService.getAllJobs());
    }

    // GET JOB BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Job> getJobById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                jobService.getJobById(id));
    }

    // UPDATE JOB
    @PutMapping("/{id}")
    public ResponseEntity<Job> updateJob(
            @PathVariable Long id,
            @Valid @RequestBody Job job) {

        return ResponseEntity.ok(
                jobService.updateJob(id, job));
    }

    // DELETE JOB
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteJob(
            @PathVariable Long id) {

        jobService.deleteJob(id);

        return ResponseEntity.ok(
                "Job deleted successfully");
    }
}