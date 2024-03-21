import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";
import toast from "react-hot-toast";
// import jwt_decode from "jwt-decode";
import Navbar from "../components/Navbar";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function Login() {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    role: "patient", // Default role set to "patient"
  });
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();
      const { email, password, role } = formDetails;
      if (!email || !password) {
        return toast.error("Input field should not be empty");
      } else if (password.length < 5) {
        return toast.error("Password must be at least 5 characters long");
      }

      if (formDetails.role === "doctor") {
        axios.post("http://localhost:8080/doctor/login", formDetails, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("Doctor verified");
          toast("Doctor verified");
          navigate("/")
        })
        .catch(error => {
          console.error('Error occured: ', error);
          toast("Doctor not present");
        });
      }
      else if (formDetails.role === "patient") {
        axios.post("http://localhost:8080/patient/login", formDetails, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log("Patient verified");
          toast("Patient verified");
          navigate("/")
        })
        .catch(error => {
          console.error('Error occured: ', error);
          toast("Patient not present");
        });
      }

    } catch (error) {
      return error;
    }
  };

  const getUser = async (id) => {
    try {
      return navigate("/");
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Navbar/>
    <section className="register-section flex-center">
      <div className="register-container flex-center">
        <h2 className="form-heading">Sign In</h2>
        {/* Wrapping email input and password input in separate divs */}
        <div className="role-selection">
          <label>
            <input
              type="radio"
              name="role"
              value="doctor"
              checked={formDetails.role === "doctor"}
              onChange={inputChange}
            />
            Doctor
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="patient"
              checked={formDetails.role === "patient"}
              onChange={inputChange}
            />
            Patient
          </label>
        </div>
        <div className="form-field">
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
        </div>
        <div className="form-field">
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formDetails.password}
            onChange={inputChange}
          />
        </div>
      
        <form onSubmit={formSubmit} className="register-form">
          <button type="submit" className="btn form-btn">
            Sign in
          </button>
        </form>
        <p>
          Not a user?{" "}
          <NavLink className="login-link" to={"/register"}>
            Register
          </NavLink>
        </p>
      </div>
      </section>
      </>
  );
}

export default Login;
