package com.hiresphere.backend.service;

import com.hiresphere.backend.entity.Application;
import com.hiresphere.backend.repository.ApplicationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;

    public ApplicationService(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    // CREATE APPLICATION
    public Application createApplication(Application application) {
        return applicationRepository.save(application);
    }

    // GET ALL APPLICATIONS
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    // GET APPLICATION BY ID
    public Application getApplicationById(Long id) {
        return applicationRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Application not found"));
    }

    // UPDATE APPLICATION STATUS
    public Application updateApplication(Long id, Application updatedApplication) {

        Application existingApplication = getApplicationById(id);

        existingApplication.setJobId(updatedApplication.getJobId());
        existingApplication.setCandidateId(updatedApplication.getCandidateId());
        existingApplication.setStatus(updatedApplication.getStatus());
        existingApplication.setAppliedDate(updatedApplication.getAppliedDate());

        return applicationRepository.save(existingApplication);
    }

    // DELETE APPLICATION
    public void deleteApplication(Long id) {
        Application application = getApplicationById(id);
        applicationRepository.delete(application);
    }
}