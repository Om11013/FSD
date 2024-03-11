import React, { useState } from 'react';
import '../styles/applyForDoctor.css';
import toast from 'react-hot-toast';
import axios from 'axios';

function ApplyForDoctor() {
  const [state, setFormData] = useState({
    patient_name: '',
    dob: '',
    contact: '',
    email: '',
    address: '',
    city: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const { patient_name, dob, email, contact,address, city, gender } = state;

    if (!patient_name || !dob || !email || !contact|| !address || !city || !gender) {
      toast.error("Input field should not be empty");
      return; 
    }

    console.log(state);

    axios.post("http://localhost:8080/appointment/add", state, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("New appointment Entry done");
          toast("New appointment entry done");
        })
        .catch(error => {
          console.error('Error occured: ', error);
        });





  };

  return (
    <section className="applyForDoctor-section flex-center">
      <div className="applyForDoctor-container flex-center">
        <h2 className="applyForDoctor-form h2">Register for an Appointment</h2>
        <form onSubmit={handleSubmit} className="applyForDoctor-form">
          <label>
            Name:
            <input
              type="text"
              className="applyForDoctor-form input"
              name="patient_name"
              value={state.patient_name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              className="applyForDoctor-form input"
              value={state.dob}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Contact No.:
            <input
              type="tel"
              name="contact"
              className="applyForDoctor-form input"
              pattern="[0-9]{10}"
              value={state.contact}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              className="applyForDoctor-form input"
              value={state.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              name="address"
              className="applyForDoctor-form input"
              value={state.address}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            City:
            <input
              type="text"
              name="city"
              className="applyForDoctor-form input"
              value={state.city}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Gender:
            <select className="applyForDoctor-form select" name="gender" value={state.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />
          <button className="applyForDoctor-form button" type="submit">Register</button>
        </form>
      </div>
    </section>
  );
}

export default ApplyForDoctor;
