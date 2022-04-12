import React from 'react'
import {Link} from 'gatsby';

function Navbar() {
  return (
    <nav>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
        </div>            
    </nav>
  )
}

export default Navbar