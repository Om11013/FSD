package com.example.FullStackDevelopment.controller;

import com.example.FullStackDevelopment.model.Appointment;
import com.example.FullStackDevelopment.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
@CrossOrigin
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/add")
    public String add(@RequestBody Appointment appointment){
        appointmentService.saveAppointment(appointment);
        return "New Appointment added";
    }
    @GetMapping("/getAll")
    public List<Appointment> list(){
        return appointmentService.getAllAppointments();
    }
}
