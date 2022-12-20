import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
function Navbar() {
  let navigate = useNavigate();
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
  <span className="navbar-brand">
      <img src="images/My project.png" width="100em" height="100em" className="d-inline-block align-baseline pt-2 " alt="logo" />
    </span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/check">Check Autism</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/donate">Donate</Link>
        </li>
      </ul>
      
      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn " onClick={()=>{navigate("/signup")}}>Register For Daily Session</button>
    </div>
      <div className="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-danger" onClick={()=>{navigate("/login")}}>Login</button>
    </div>
    <div className="btn-group" role="group" aria-label="Second group">
    <button type="button" class="btn btn-dark" onClick={()=>{navigate("/signup")}}>Sign Up</button>
    </div>
    </div>
        
      </div>
  </div>
  </nav>
</>
  )
}

export default Navbar
