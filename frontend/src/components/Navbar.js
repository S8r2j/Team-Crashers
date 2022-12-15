import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
        <div className= 'navbar'>
                <Link className="nav-items" to="/">Home</Link>
                <Link className="nav-items" to="/about">About</Link>
                <Link className="nav-items" to="/contact">Contact</Link>
                <Link className="nav-items" to="/donate">Donate</Link>
            </div>
            
    </div>
  )
}

export default Navbar
