import { logDOM } from '@testing-library/react';
import React from 'react';
import logo from '../../../images/logo.png'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img className="ms-5" style={{height:"100px"}} src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 ">
        <li className="nav-item ms-5">
          <a className="nav-link active  text-white" aria-current="page" href="/">Home</a>

        </li>
        
        <li className="nav-item ms-5 ">
          <a className="nav-link text-white"  href="/">About</a>

        </li>
        <li className="nav-item ms-5">
          <a className="nav-link  text-white"  href="/">Dental Services</a>

        </li>
        <li className="nav-item ms-5">
          <a className="nav-link text-white"  href="/">Blogs</a>

        </li>
        <li className="nav-item ms-5">
          <a className="nav-link text-white"  href="/">Contact Us</a>

        </li>

      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default NavBar;