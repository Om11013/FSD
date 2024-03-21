package com.example.FullStackDevelopment.service;

import com.example.FullStackDevelopment.model.Doctor;
import com.example.FullStackDevelopment.model.Patient;

import java.util.List;

public interface PatientService {
    public Patient savePatient(Patient patient);
    public List<Patient> getAllPatients();

    public Patient findPatientByEmail(String email);

}
