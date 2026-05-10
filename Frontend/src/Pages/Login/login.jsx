import React, { useState } from "react";
import "./login.css";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
function Login() {
  const navigate=useNavigate();
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [error,seterror]=useState('');
  const {login}=useAuth();
  const handlelogin=async(e)=>{
    e.preventDefault();
    if(email.trim()===''){
      seterror('Enter the correct email');
      return ;
    }
    if(password.length<8){
      seterror('Password Length is Shorter');
      return ;
    }
    try{
      const res=await axios.post(`${import.meta.env.VITE_BACKEND}/auth/login`,{
        email:email.toLowerCase(),
        password:password
      });
      seterror('');
      login(res.data.user,res.data.token);
      navigate('/');
    }
    catch(err){
      if (err.response) {
      seterror(err.response.data.message || "Login failed");
    } else {
      console.log(err);
      seterror("Server error");
    }
    }
  }
  return (
    <div className="main-wrapper">
      <div className="login-card">   
        <div className="header-section">
          <span className="leaf-icon">🌿</span>
          <h1>EcoQuest</h1>
          <p>Your journey to a greener world starts here.</p>
        </div>
        <form className="form-container" onSubmit={handlelogin}>
          <h2>Welcome Back</h2>
          <div className="input-field">
            <label>EMAIL ADDRESS</label>
            <div className="input-with-icon">
              <span className="icon">✉️</span>
              <input
                type="email"
                placeholder="Enter the Email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
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
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
              />
            </div>
          </div>
          {error&&<p style={{color:'red'}}>{error}</p>}
          <button className="primary-btn" type='submit' >
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
        </form>
      </div>
    </div>
  );
}

export default Login;