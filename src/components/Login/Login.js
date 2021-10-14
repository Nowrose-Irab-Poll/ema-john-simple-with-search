import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./login.css";

const Login = () => {
  const { user, signInUsingGoogle, logOut } = useFirebase();

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
        <button onClick={signInUsingGoogle} className="btn-regular">
          Google Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
