import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { user, signInUsingGoogle } = useAuth();
  return (
    <div className="register-form">
      <div>
        <form>
          <h2>Register</h2>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-enter Password"
          />
          <br />
          <input type="submit" value="Register" />
          <br />
        </form>
        <p>
          Already have an Account? <Link to="/login">Login</Link>
        </p>
        <br />
        <p>----Other Login Methods----</p>
        <button onClick={signInUsingGoogle} className="btn-regular">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Register;
