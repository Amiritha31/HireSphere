package com.hiresphere.backend.service;

import com.hiresphere.backend.entity.Job;
import com.hiresphere.backend.repository.JobRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    // CREATE JOB
    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    // GET ALL JOBS
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    // GET JOB BY ID
    public Job getJobById(Long id) {
        return jobRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Job not found"));
    }

    // UPDATE JOB
    public Job updateJob(Long id, Job updatedJob) {

        Job existingJob = getJobById(id);

        existingJob.setTitle(updatedJob.getTitle());
        existingJob.setDescription(updatedJob.getDescription());
        existingJob.setCompanyName(updatedJob.getCompanyName());
        existingJob.setLocation(updatedJob.getLocation());
        existingJob.setSalary(updatedJob.getSalary());
        existingJob.setJobType(updatedJob.getJobType());
        existingJob.setSkills(updatedJob.getSkills());

        return jobRepository.save(existingJob);
    }

    // DELETE JOB
    public void deleteJob(Long id) {
        Job job = getJobById(id);
        jobRepository.delete(job);
    }
}