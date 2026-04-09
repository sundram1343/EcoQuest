import React from 'react'
import { useNavigate } from 'react-router-dom'
import './OnProfileClick.css'
function OnProfileClick() {
    const navigate = useNavigate();
  return (
    <div class="MainWrap">
        <div class="ContentWrap">
           <span onClick={() => navigate('/profile')}>Profile</span> 
        </div>
        <div class="ContentWrap">
           <span>Logout</span> 
        </div>
    </div>
  )
}

export default OnProfileClick