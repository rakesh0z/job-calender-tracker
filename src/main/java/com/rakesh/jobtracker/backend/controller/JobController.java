package com.rakesh.jobtracker.backend.controller;


import com.rakesh.jobtracker.backend.model.Job;
import com.rakesh.jobtracker.backend.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "*") // For frontend access
public class JobController {

    @Autowired
    private JobRepository jobRepo;

    @GetMapping
    public List<Job> getAllJobs() {
        return jobRepo.findAll();
    }

    @PostMapping
    public Job addJob(@RequestBody Job job) {
        return jobRepo.save(job);
    }
}

