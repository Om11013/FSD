import React, { state, useState } from 'react';
import '../styles/applyForDoctor.css'

function ApplyForDoctor() {
  const [state, setFormData] = useState({
    name: '',
    dob: '',
    contactNo: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the code to handle form submission
    console.log(state);
  };

  return (
  <section className="applyForDoctor-section flex-center">
    <div className="applyForDoctor-container flex-center">
        <form onSubmit={handleSubmit} className="applyForDoctor-form">
        <h2>Register for an Appointment</h2>

            <label>
            Name:
            <input
                type="text"
                className="applyForDoctor-form input"
                name="name"
                value={state.name}
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
                name="contactNo"
                className="applyForDoctor-form input"
                pattern="[0-9]{10}"
                value={state.contactNo}
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