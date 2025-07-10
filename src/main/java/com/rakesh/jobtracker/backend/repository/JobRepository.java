package com.rakesh.jobtracker.backend.repository;



import com.rakesh.jobtracker.backend.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {
}

