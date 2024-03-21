import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/register.css";
import toast from "react-hot-toast";
import axios from "axios";
import Navbar from "../components/Navbar";

function Register() {
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role:""
  });
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  }
  
  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      const { firstname, lastname, email, password, role } = formDetails;
      
      if (!firstname || !lastname || !email || !password || !role) {
        return toast.error("Input field should not be empty");
      } else if (firstname.length < 3) {
        return toast.error("First name must be at least 3 characters long");
      } else if (lastname.length < 3) {
        return toast.error("Last name must be at least 3 characters long");
      } else if (password.length < 5) {
        return toast.error("Password must be at least 5 characters long");
      }

      console.log("Form Data: ", formDetails);

      if (formDetails.role === "patient") {
        axios.post("http://localhost:8080/patient/add", formDetails, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("New patient Entry done");
          toast("New patient entry done");
        })
        .catch(error => {
          console.error('Error occured: ', error);
        });
      }
      else if (formDetails.role === "doctor") {
        axios.post("http://localhost:8080/doctor/add", formDetails, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("New doctor Entry done");
          toast("New doctor entry done");
      })
        .catch(error => {
          console.error('Error occured: ', error);
        });
      }
      
      return navigate("/login");
    } catch (error) {}
  }
  
  return (
    <>
      <Navbar/>
    <section className="register-section flex-center">
      <div className="register-container flex-center">
        <h2 className="form-heading">Sign Up</h2>
        <form
          onSubmit={formSubmit}
          className="register-form"
        >
          <div className="radioForRole">
          <input type="radio" id="isDoctor" name="role" value="doctor" checked={formDetails.role === "doctor"} onChange={inputChange}/>
                  <label htmlFor="isDoctor">Doctor</label>
          <input type="radio" id="isPatient" name="role" value="patient" checked={formDetails.role === "patient"} onChange={inputChange}/>
                  <label htmlFor="isPatient" >Patient</label>
          </div>
          <input
            type="text"
            name="firstname"
            className="form-input"
            placeholder="Enter your first name"
            value={formDetails.firstname}
            onChange={inputChange}
          />
          <input
            type="text"
            name="lastname"
            className="form-input"
            placeholder="Enter your last name"
            value={formDetails.lastname}
            onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
      
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formDetails.password}
            onChange={inputChange}
          />

          <button
            type="submit"
            className="btn form-btn"
            // disabled={loading ? true : false}
          >
            sign up
          </button>
        </form>
        <p>
          Already a user?{" "}
          <NavLink
            className="login-link"
            to={"/login"}
          >
            Log in
          </NavLink>
        </p>
      </div>
      </section>
      </>
  );
}

export default Register;