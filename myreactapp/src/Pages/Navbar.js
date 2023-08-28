import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border border-success rounded-bottom">
      <a className="navbar-brand" href="#">
        <Link className="nav-item nav-link active" to="/home"> <h4 className='text-warning'>&nbsp;<Icon.Alexa />&nbsp;WebCentral&nbsp;&nbsp;&nbsp;&nbsp;</h4> </Link>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/home">Home&nbsp;&nbsp;</Link>
          <Link className="nav-item nav-link" to="/feature">Features&nbsp;&nbsp;</Link>
          <Link className="nav-item nav-link" to="/login">LogIn&nbsp;&nbsp;</Link>
          <Link className="nav-item nav-link" to="/register">SignUp&nbsp;&nbsp;</Link>
          <Link className="nav-item nav-link" to="/about">About Us&nbsp;&nbsp;</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;