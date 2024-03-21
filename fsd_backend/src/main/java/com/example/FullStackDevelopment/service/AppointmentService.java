package com.example.FullStackDevelopment.service;

import com.example.FullStackDevelopment.model.Appointment;

import java.util.List;
import java.util.Optional;

public interface AppointmentService {
    public Appointment saveAppointment(Appointment appointment);
    public List<Appointment> getAllAppointments();

    public void deleteAppointmentById(int id);

    public Optional<Appointment> findAppointmentById(int id);

    public Appointment editAppointment(Appointment appointment, int id);
}
