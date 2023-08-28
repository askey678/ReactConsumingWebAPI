import "../../customcss/LogIn.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../Navbar";
import useAuth from "../../Context/useAuth";
import AuthService from "../../Authentication/AuthService";


function LogIn() {

  const { setAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  const handleSubmit = (event) => {
    event.preventDefault();
    const encodedPassword = btoa(password);


    AuthService.login(email, encodedPassword).then(response => {
      if (response.status === 200) {
        console.log("Login successful");
        const result = response.data;
        console.warn("result", result);
        // localStorage.setItem('token',result.token)
        localStorage.setItem('login', JSON.stringify({
          login: true,
          token: result.userToken,
          details: result,
          roles: result.roles
        }))
        const token = result?.userToken;
        const Allroles = result?.roles;
        const roles = Allroles?.[0];
        setAuth({ roles, token });

        alert("Welcome!!  Login Successfull");
        const userRoles = result?.roles;
        const isUser = userRoles.includes('User');
        const isAdmin = userRoles.includes('ADMIN');
        console.log(JSON.parse(localStorage.getItem('login')).roles);
        console.log(JSON.parse(localStorage.getItem('login')).token);
        console.log(isUser + " " + isAdmin);
        if (isUser) {
          // If the user role is "User", navigate to the user's dashboard
          navigate("/user", { replace: true });
        } else if (isAdmin) {
          // If the user role is "ADMIN", navigate to the admin's dashboard
          navigate("/admin", { replace: true });
        } else {
          // If the user role is something else (optional), you can handle it accordingly
          // For example, navigate to a default dashboard or show an error message
          navigate("/unauthorized", { replace: true });
        }


        const storedLoginData = localStorage.getItem('login');
        const loginData = JSON.parse(storedLoginData);

        // Access the 'name' property from the loginData object
        const userName = loginData.details.name;

        console.log(userName); // Output: "Akash"


      }
    })
      .catch(error => {
        console.log("this is the error" + error);
        alert("error while login");
        navigate("/login");
      });
  };
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center">
        <div className="w-50">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              {/* <!-- Email input --> */}
              <br></br>
              <h1>Login</h1>
              <br></br>

              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example1"><h5>Email address</h5></label>
                <input type="email" id="form2Example1" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} className="form-control" />

              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <label className="form-label" for="form2Example2"><h5>Password</h5></label>
                <input type="password" id="form2Example2" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} className="form-control" />

              </div>

              {/* <!-- 2 column grid layout for inline styling --> */}
              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" unchecked />
                    <label className="form-check-label" > Remember me </label>
                  </div>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" className="btn btn-primary btn-block mb-4">Log In</button>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>Not a member? <Link to="/register" className="btn btn-warning">Register </Link> </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  );
}


export default LogIn;