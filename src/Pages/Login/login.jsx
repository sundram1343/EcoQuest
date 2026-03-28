import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="main-wrapper">
      <div className="login-card">   
        <div className="header-section">
          <span className="leaf-icon">🌿</span>
          <h1>EcoQuest</h1>
          <p>Your journey to a greener world starts here.</p>
        </div>
        <div className="form-container">
          <h2>Welcome Back</h2>
          <div className="input-field">
            <label>EMAIL ADDRESS</label>
            <div className="input-with-icon">
              <span className="icon">✉️</span>
              <input
                type="email"
                placeholder="Enter the Email"
              />
            </div>
          </div>
          <div className="input-field">
            <div className="label-row">
              <label>PASSWORD</label>
              <span className="forgot-pw">Forgot?</span>
            </div>
            <div className="input-with-icon">
              <span className="icon">🔒</span>
              <input
                type="password"
                placeholder="Enter Password"
              />
              <span className="eye-icon">👁️</span>
            </div>
          </div>
          <button className="primary-btn">
            Get Started <span>→</span>
          </button>
          <div className="separator">
            <span>OR CONTINUE WITH</span>
          </div>
          <button className="google-signin-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            Sign in with Google
          </button>
          <p className="signup-text">
            Don't have an account?{" "}
            <Link to='/signup' className="link">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;