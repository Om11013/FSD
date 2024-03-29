import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { HashLink } from "react-router-hash-link";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [iconActive, setIconActive] = useState(false);
  // const navigate = useNavigate();

  // const logoutFunc = () => {
  //   navigate("/login");
  // };

  return (
    <header>
      <nav className={iconActive ? "nav-active" : ""}>
        <h2 className="nav-logo">
          <NavLink to={"/"}>BookMyDoctor</NavLink>
        </h2>
        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/applyfordoctor"}>Apply For Doctor</NavLink>
          </li>
          <li>
            <NavLink to={"/appointments"}>Appointments</NavLink>
          </li>
          <li>
            <HashLink to={"/#contact"}>Contact Us</HashLink>
          </li>
          <li>
            <NavLink className="btn" to={"/login"}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="btn" to={"/register"}>
              Register
            </NavLink>
          </li>
          {/* <li>
            <span className="btn" onClick={logoutFunc}>
              Logout
            </span>
          </li> */}
        </ul>
      </nav>
      <div className="menu-icons">
        {!iconActive && (
          <FiMenu
            className="menu-open"
            onClick={() => {
              setIconActive(true);
            }}
          />
        )}
        {iconActive && (
          <RxCross1
            className="menu-close"
            onClick={() => {
              setIconActive(false);
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
