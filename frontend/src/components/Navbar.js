import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
function Navbar() {
  let navigate = useNavigate();
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container-fluid">
  <span className="navbar-brand">
      <img src="images/My project.png" width="100em" height="100em" className="d-inline-block align-baseline pt-2 " alt="logo" />
    </span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/check">Check Autism</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/news">News </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/donate">Donate</Link>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/about">About</Link></li>
            <li><Link class="dropdown-item" to="/contact">Contact</Link></li>
          </ul>
        </li>
      </ul>
      
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group" role="group" aria-label="First group">
    <button type="button" class="btn btn-danger" onClick={()=>{navigate("/login")}}>Login</button>
    </div>
    <div class="btn-group" role="group" aria-label="Second group">
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
