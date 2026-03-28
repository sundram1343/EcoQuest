import React, { useState } from 'react'
import './SignUp.css'
import image from '../../assets/SignUpImage.png'
function SignUp() {
  const [name,setname]=useState('')
  return (
    <>
        <div id='Container'>
            <div id='Left-Box'>
                <span id='leaf'>🌿EcoQuest</span>
                <p id='Grow'>Grow your Impact,one task at a time.</p>
                <p id="BigLine">Join a community of guardians dedicated to restoring our planet through gamified environment environmnetal action</p>
                <img src={image} id='Image'/>
            </div>
            <div id='RightBox'>
              <h1>Create Account</h1>
              <p>Satrt Your Journey</p>
              <div id='name'>
                <label>Full Name</label>
                <input
                  type='name'
                  placeholder='Enter Name'
                  value={name}
                  onChange={(text)=>setname(text)}
                />
              </div>
              <div id='Email'>

              </div>
            </div>
        </div>
    </>
  )
}

export default SignUp