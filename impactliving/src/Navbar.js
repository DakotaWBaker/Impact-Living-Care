import React from "react";
import logo from "./Assetts/impactlogo.png";
export default function Navbar({setPage}) {
  
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid navbar">
        <a className="navbar-brand m-1" href="#">
        <img src = {logo} className = 'logo'/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span/> <i className="fa fa-bars" aria-hidden="true" style={{ color: "#e6e6ff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              <button className="navButton" onClick={() => setPage("home")}>
                Home
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <button className="navButton" onClick={() => setPage("about")}>
                About Us
                </button>
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#missionScroll">
              <button className="navButton" onClick={() => setPage("home")}>
                Our Mission
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              <button className="navButton" onClick={() => setPage("application")}>
                Application
                </button>
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#contactScroll">
              <button className="navButton">
               Contact
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
