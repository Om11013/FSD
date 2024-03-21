package com.example.FullStackDevelopment.controller;

import com.example.FullStackDevelopment.model.Patient;
import com.example.FullStackDevelopment.model.Patient;
import com.example.FullStackDevelopment.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Patient patient){
        String email = patient.getEmail();
        String password = patient.getPassword();

        Patient patient1 = patientService.findPatientByEmail(email);

        System.out.println(email);
        System.out.println(password);

        if(patient1 != null && patient1.getPassword().equals(password)){
            int id = patient1.getId();
            return new ResponseEntity<>("success, userId: " + id, HttpStatus.OK);
        }else {
            return new ResponseEntity<>("failure", HttpStatus.UNAUTHORIZED);
        }
    }
    
}
