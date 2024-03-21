import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/appointments.css';
import Navbar from '../components/Navbar';
import toast from 'react-hot-toast';

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [editableFields, setEditableFields] = useState({});

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
        toast("Appointment Deleted");
      })
      .catch(error => {
        console.error('Error deleting appointment: ', error);
        toast("Appointment Not Deleted");
      });
  };

  const handleEdit = (id) => {
    const editedAppointment = appointments.find(appointment => appointment.id === id);
    axios.patch(`http://localhost:8080/appointment/${id}`, editedAppointment)
      .then(response => {
        toast("Appointment Edited");
        toggleEdit(id); // Toggle back to view mode after successful edit
      })
      .catch(error => {
        console.error('Error updating appointment: ', error);
        toast("Appointment Not Edited");
      });
  };
  

  const toggleEdit = (id) => {
    setEditableFields({ ...editableFields, [id]: !editableFields[id] });
  };

  const handleChange = (e, id, field) => {
    const value = e.target.value;
    const updatedAppointments = appointments.map(appointment => {
      if (appointment.id === id) {
        return { ...appointment, [field]: value };
      }
      return appointment;
    });
    setAppointments(updatedAppointments);
  };

  return (
    <>
      <Navbar />
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
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment.id}>
                <td>{editableFields[appointment.id] ?
                  <input type="text" value={appointment.patient_name} onChange={e => handleChange(e, appointment.id, 'patient_name')} />
                  : appointment.patient_name}</td>
                <td>{editableFields[appointment.id] ?
                  <input type="text" value={appointment.dob} onChange={e => handleChange(e, appointment.id, 'dob')} />
                  : appointment.dob}</td>
                <td>{editableFields[appointment.id] ?
                  <input type="text" value={appointment.contact} onChange={e => handleChange(e, appointment.id, 'contact')} />
                  : appointment.contact}</td>
                <td>{editableFields[appointment.id] ?
                  <input type="text" value={appointment.email} onChange={e => handleChange(e, appointment.id, 'email')} />
                  : appointment.email}</td>
                <td>{editableFields[appointment.id] ?
                  <input type="text" value={appointment.address} onChange={e => handleChange(e, appointment.id, 'address')} />
                  : appointment.address}</td>
                <td>{editableFields[appointment.id] ?
                  <input type="text" value={appointment.city} onChange={e => handleChange(e, appointment.id, 'city')} />
                  : appointment.city}</td>
                <td>{editableFields[appointment.id] ?
                  <input type="text" value={appointment.gender} onChange={e => handleChange(e, appointment.id, 'gender')} />
                  : appointment.gender}</td>
                <td>
                  <button onClick={() => {
                    if (editableFields[appointment.id]) {
                      toggleEdit(appointment.id);
                      handleEdit(appointment.id);
                    } else {
                      toggleEdit(appointment.id);
                    }
                  }}>{editableFields[appointment.id] ? 'Save' : 'Edit'}</button>
                </td>
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
