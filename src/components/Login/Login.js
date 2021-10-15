import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./login.css";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { user, signInUsingGoogle, logOut } = useAuth();
  const location = useLocation();

  const history = useHistory();

  // const redirect_uri = location.state?.from.pathname || "/"; //both works for some reason
  const redirect_uri = location.state?.from || "/";

  console.log(location.state?.from);

  const handleGoogleSingIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form>
          <input type="email" name="" placeholder="Your Email" />
          <br />
          <input type="password" name="" placeholder="Your Password" />
          <br />
          <input type="submit" value="Login" />
          <br />
          <p>
            New to Ema-John? <Link to="/register">Create Account</Link>
          </p>
          <br />
        </form>
        <p>-----Other Sign In Methods----</p>
        <button onClick={handleGoogleSingIn} className="btn-regular">
          Google Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
