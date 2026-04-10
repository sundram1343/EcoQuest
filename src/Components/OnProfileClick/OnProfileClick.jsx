import React from 'react'
import { useNavigate } from 'react-router-dom'
import './OnProfileClick.css'
function OnProfileClick() {
    const navigate = useNavigate();
  return (
    <div className="MainWrap">
        <div className="ContentWrap">
           <span onClick={() => navigate('/profile')}>Profile</span> 
        </div>
        <div className="ContentWrap">
           <span>Logout</span> 
        </div>
    </div>
  )
}

export default OnProfileClick