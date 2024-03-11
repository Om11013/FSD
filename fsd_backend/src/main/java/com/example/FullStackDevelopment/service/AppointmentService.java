package com.example.FullStackDevelopment.service;

import com.example.FullStackDevelopment.model.Appointment;

import java.util.List;

public interface AppointmentService {
    public Appointment saveAppointment(Appointment appointment);
    public List<Appointment> getAllAppointments();
}
