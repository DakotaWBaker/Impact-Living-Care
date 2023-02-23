import React from 'react'
import logo from './Assetts/Impact Care Living-1 (1).png'
export default function Navbar() {
  return (
<nav className="navbar" aria-label="Light offcanvas navbar">
  <div className="container-fluid">
    <a className="navbar-brand mx-auto" href="#">
      <img src = {logo} className ='logo'/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbarLight"
      aria-controls="offcanvasNavbarLight"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="offcanvas bg-light offcanvas-end"
      tabIndex={-1}
      id="offcanvasNavbarLight"
      aria-labelledby="offcanvasNavbarLightLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLightLabel">
          Offcanvas
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
             Who We Serve
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
            Contact Us
            </a>
          </li>
            </ul>
      </div>
    </div>
  </div>
</nav>


  
  )
}
