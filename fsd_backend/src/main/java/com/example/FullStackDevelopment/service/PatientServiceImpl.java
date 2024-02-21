package com.example.FullStackDevelopment.service;

import com.example.FullStackDevelopment.model.Patient;
import com.example.FullStackDevelopment.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService{
    @Autowired
    private PatientRepository patientRepository;

    @Override
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }
    @Override
    public List<Patient> getAllPatients(){
        return patientRepository.findAll();
    }
}
