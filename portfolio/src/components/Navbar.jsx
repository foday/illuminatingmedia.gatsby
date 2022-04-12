import React from 'react'
import {Link} from 'gatsby';

function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contact">Contact</Link>
    
    </nav>
  )
}

export default Navbar