package com.hiresphere.backend.repository;

import com.hiresphere.backend.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}