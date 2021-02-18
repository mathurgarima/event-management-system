import React from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom' ;

export default function Navbar(){
    return(
       <navbar className="Navbar">
           <nav className="Nav">
           <Link style={{ textDecoration: 'none', color: 
           'black' }} to="/">
             HOME
              </Link>
              <Link style={{ textDecoration: 'none', color: 
           'black' }} to="/About">
             ABOUT
              </Link>
              <Link style={{ textDecoration: 'none', color: 
           'black' }} to="/Event">
             EVENTS
              </Link>
              <Link style={{ textDecoration: 'none', color: 
           'black' }} to="/Dashboard">
             DASHBOARD
              </Link>
              <Link style={{ textDecoration: 'none', color: 
           'black' }} to="/">
             LOGOUT
              </Link>
           </nav>
       </navbar>
    )
}