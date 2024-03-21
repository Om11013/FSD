package com.example.FullStackDevelopment.controller;

import com.example.FullStackDevelopment.model.Doctor;
import com.example.FullStackDevelopment.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/doctor")
@CrossOrigin
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @PostMapping("/add")
    public String add(@RequestBody Doctor doctor){
        doctorService.saveDoctor(doctor);
        return "New doctor added";
    }
    @GetMapping("/getAll")
    public List<Doctor> list(){
        return doctorService.getAllDoctors();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Doctor doctor){
        String email = doctor.getEmail();
        String password = doctor.getPassword();

        Doctor doctor1 = doctorService.findDoctorByEmail(email);

        System.out.println(email);
        System.out.println(password);

        if(doctor1 != null && doctor1.getPassword().equals(password)){
            int id = doctor1.getId();
            return new ResponseEntity<>("success, userId: " + id, HttpStatus.OK);
        }else {
            return new ResponseEntity<>("failure", HttpStatus.UNAUTHORIZED);
        }
    }


}
