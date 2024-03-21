package com.example.FullStackDevelopment.controller;

import com.example.FullStackDevelopment.model.Appointment;
import com.example.FullStackDevelopment.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        appointmentService.deleteAppointmentById(id);
        return "Appointment Deleted";
    }
    @PatchMapping("/{id}")
    public String edit(@RequestBody Appointment appointment, @PathVariable int id)
    {
        Optional<Appointment> appointment1 = appointmentService.findAppointmentById(id);

        if(appointment1.isPresent()){
            Appointment existingAppointment = appointment1.get();
            existingAppointment.setPatient_name(appointment.getPatient_name());
            existingAppointment.setCity(appointment.getCity());
            existingAppointment.setAddress(appointment.getAddress());
            existingAppointment.setContact(appointment.getContact());
            existingAppointment.setDob(appointment.getDob());
            existingAppointment.setGender(appointment.getGender());
            existingAppointment.setEmail(appointment.getEmail());
            appointmentService.saveAppointment(existingAppointment);
        }

        return "Appointment Saved";
    }

}
