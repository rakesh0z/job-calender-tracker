package com.rakesh.jobtracker.backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;
    private String role;
    private LocalDate applyDate;
    private String link;

    // Constructors
    public Job() {}
    public Job(String company, String role, LocalDate applyDate, String link) {
        this.company = company;
        this.role = role;
        this.applyDate = applyDate;
        this.link = link;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public LocalDate getApplyDate() { return applyDate; }
    public void setApplyDate(LocalDate applyDate) { this.applyDate = applyDate; }

    public String getLink() { return link; }
    public void setLink(String link) { this.link = link; }
}
