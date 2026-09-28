package com.hiresphere.backend.repository;

import com.hiresphere.backend.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
}