package com.example.FullStackDevelopment.service;

import com.example.FullStackDevelopment.model.Appointment;
import com.example.FullStackDevelopment.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentServiceImpl implements AppointmentService{
    @Autowired
    private AppointmentRepository appointmentRepository;

    @Override
    public Appointment saveAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @Override
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @Override
    public void deleteAppointmentById(int id) {
        Optional<Appointment> appointment1 = appointmentRepository.findById(id);
        if(appointment1.isPresent()){
            appointmentRepository.deleteById(id);
        }
    }

    @Override
    public Optional<Appointment> findAppointmentById(int id) {
        Optional<Appointment> appointment1 = appointmentRepository.findById(id);
        if(appointment1.isPresent()){
            return appointment1;
        }
        return null;
    }

    @Override
    public Appointment editAppointment(Appointment updatedAppointment, int id) {
        Optional<Appointment> appointment1 = appointmentRepository.findById(id);

        if(appointment1.isPresent()){
//            Appointment existingAppointment = appointment1.get();
            appointmentRepository.save(updatedAppointment);
        }
        return appointmentRepository.save(updatedAppointment);
    }
}
