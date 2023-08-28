import "../../customcss/SignUp.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import AuthService from "../../Authentication/AuthService";

const SignUp = () => {
  const url = "https";
  const [passwordError, setPasswordError] = useState('')

  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [about, setAbout] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setconfirmPassword] = useState('')

  const navigate = useNavigate();
  const handleSubmit = (event) => {

    event.preventDefault();
    if (password !== confirmpassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    const newUser = {name, email, password, about}
   AuthService.register(newUser)
      .then(response => {
        if (response.status === 200) {
          alert("Registration Successfull!!! Welcome to Web Central")
          console.log("Registration successful");
          navigate('/login');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <Navbar />

      <div className="d-flex justify-content-center">
        <div className="w-50">
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              {/* <!-- Email input --> */}
              <br></br>
              <h2>Sign Up</h2>
              <br></br>
              <div className=" justify-content-center">
                <div className="form-outline mb-4">
                  <label className="form-label" ><h5>Name</h5></label>
                  <input type="text" name="name" value={name} required onChange={(e) => setname(e.target.value)} className="form-control" />

                </div>
                <div>
                  <div className="form-outline mb-4">
                    <label className="form-label" ><h5>Email address</h5></label>
                    <input type="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} className="form-control" />
                  </div>


                  {/* <!-- Password input --> */}
                  <div>
                    <div className="form-outline mb-4">
                      <label className="form-label" ><h5>Password</h5></label>
                      <input type="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} className="form-control" />

                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" ><h5>ConfirmPassword &nbsp; &nbsp;</h5></label>
                    <input type="password" name="confirmpassword" value={confirmpassword} required onChange={(e) => setconfirmPassword(e.target.value)} className="form-control" />

                    {passwordError && <span className="text-danger">{passwordError}</span>}
                  </div>

                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" ><h5>About</h5></label>
                  <input type="text" name="mobile" value={about} required onChange={(e) => setAbout(e.target.value)} className="form-control" />

                </div>





                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                  <h6><p>Already a member? &nbsp; <Link to="/login">
                    <a className=" btn-warning">Login</a>
                  </Link></p></h6>
                </div>

              </div>
            </form>
          </div>
        </div>

      </div>

    </>
  )

}
export default SignUp