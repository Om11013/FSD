package com.example.FullStackDevelopment.service;

import com.example.FullStackDevelopment.model.Doctor;
import com.example.FullStackDevelopment.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService{
    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }
    @Override
    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }

    @Override
    public Doctor findDoctorByEmail(String email) {
        return doctorRepository.findDoctorByEmail(email);
    }

}
