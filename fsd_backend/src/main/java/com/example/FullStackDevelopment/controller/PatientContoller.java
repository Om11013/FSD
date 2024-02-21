package com.example.FullStackDevelopment.controller;

import com.example.FullStackDevelopment.model.Patient;
import com.example.FullStackDevelopment.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patient")
@CrossOrigin
public class PatientContoller {
    @Autowired
    private PatientService patientService;

    @PostMapping("/add")
    public String add(@RequestBody Patient patient){
        patientService.savePatient(patient);
        return "New patient added";
    }
    @GetMapping("/getAll")
    public List<Patient> list(){
        return patientService.getAllPatients();
    }
}
