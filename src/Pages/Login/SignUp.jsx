import React, { useState } from 'react'
import './SignUp.css'
import {Link,useNavigate} from 'react-router-dom'
import image from '../../assets/SignUpImage.png'
import {useAuth} from '../../context/AuthContext'
function SignUp() {
  const [name,setname]=useState('')
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('')
  const [ConfirmPassword,setConfirmPassword]=useState('')
  const [error,seterror]=useState('')
  const {login}=useAuth();
  const navigate=useNavigate();
  const handle =()=>{
    if(name.trim()===''){
      seterror('Enter Valid Name');
       return ;
    }
    else if(email.trim()===''){
      seterror('Enter Valid Email');
      return;
    }
    else if(password!==ConfirmPassword){
      seterror('Password Didn`t match')
      return ;
    }
    else if(password.length<8){
      seterror('The password length must to greater or equal to 8');
      return ;
    }
    seterror('');
    navigate('/home');
    login(name);
  }
  return (
    <>
    <div id='wrapper'>
        <div id='Container'>
            <div id='Left-Box'>
                <span id='leaf'>🌿EcoQuest</span>
                <p id='Grow'>Grow your Impact,one task at a time.</p>
                <p id="BigLine">Join a community of guardians dedicated to restoring our planet through gamified environment environmnetal action</p>
                <img src={image} id='Image'/>
            </div>
            <div id='RightBox'>
              <span id='CreateText'>Create Account</span>
              <span id='Start'>Start Your Journey</span>
              <div id='name'>
                <label>Full Name</label>
                <input
                  type='text'
                  placeholder='Enter Name'
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                />
              </div>
              <div id='Email'>
                <label>Email</label>
                <input
                  type='email'
                  placeholder='Enter the email'
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                />
              </div>
              <div id='Password'>
                <label>Password</label>
                <input
                  type='password'
                  placeholder='Enter the Password'
                  value={password}
                  onChange={(e)=>setpassword(e.target.value)}
                />
              </div>
              <div id='ConfirmPassword'>
                <label>Confirm Password</label>
                <input
                  type='password'
                  placeholder='Confirm Your Password'
                  value={ConfirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <p style={{ color: 'red',backgroundColor:'#f8f9f8' }}>{error}</p>}
              <div id='SubmitButton' onClick={()=>handle()}>
                <p id='SubmitText'>Create Account</p>
              </div>
              <span id='alreadyUser'>Already User? <Link to='/'  id='log'>Login Now</Link></span>
            </div>
        </div>
        </div>
    </>
  )
}

export default SignUp