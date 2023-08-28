
import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';


function UserNavbar() {

  const navigate = useNavigate();

  const logInDetails = localStorage.getItem('login')
  const user = JSON.parse(logInDetails).details.name


  const handleUserLogout = () => {
    localStorage.removeItem('login');
    navigate("/home", { replace: true });

  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border border-success rounded-bottom">
      <a className="navbar-brand" href="#">
        <Link className="nav-item nav-link active" to="/user"> <h4 className='text-warning'>&nbsp;<Icon.Alexa />&nbsp;WebCentral&nbsp;&nbsp;&nbsp;&nbsp;</h4> </Link>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

        <div className="navbar-nav">
          {/* <div className="navbar-nav flex-row ml-auto">
          <p className="nav-item nav-link text-white">hello</p> */}
          <Link className="nav-item nav-link active" to="/user">&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;</Link>
          <Link className="nav-item nav-link" to="/user/service">&nbsp;&nbsp;Services&nbsp;&nbsp;&nbsp;&nbsp;</Link>
          <Link className="nav-item nav-link" to="/user/profile">&nbsp;&nbsp;Profile&nbsp;&nbsp;&nbsp;&nbsp;</Link>
          {/* <Link className="nav-item nav-link" to="/logout">Logout&nbsp;&nbsp;</Link> */}
        </div>
      </div>
      <div className="ml-auto d-flex align-items-center">

        <p className="text-white m-0 text-capitalize font-weight-bold"><Icon.Person /> &nbsp;{user} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <button type="button" className="btn btn-dark ml-2" onClick={handleUserLogout}><Icon.BoxArrowRight /> Logout</button>
      </div>
    </nav>
  )
}

export default UserNavbar;