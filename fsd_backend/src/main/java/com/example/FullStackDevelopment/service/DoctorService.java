package com.example.FullStackDevelopment.service;

import com.example.FullStackDevelopment.model.Doctor;

import java.util.List;

public interface DoctorService {
    public Doctor saveDoctor(Doctor doctor);
    public List<Doctor> getAllDoctors();
    public Doctor findDoctorByEmail(String email);
}
