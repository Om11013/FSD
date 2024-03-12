import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/appointments.css';
import Navbar from '../components/Navbar';

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/appointment/getAll")
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching appointments: ', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/appointment/${id}`)
      .then(response => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
      })
      .catch(error => {
        console.error('Error deleting appointment: ', error);
      });
  };

  return (
    <>
      <Navbar/>
    <div className="appointments-container">
      <table className="appointments-table">
        <thead>
          <tr><h2 className="appointments-table-h2">Appointments</h2></tr>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Contact No.</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.patient_name}</td>
              <td>{appointment.dob}</td>
              <td>{appointment.contact}</td>
              <td>{appointment.email}</td>
              <td>{appointment.address}</td>
              <td>{appointment.city}</td>
              <td>{appointment.gender}</td>
              <td>
                <button onClick={() => handleDelete(appointment.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </>
  );
}

export default Appointments;
