import React from 'react'
import { useNavigate } from 'react-router-dom'
import './OnProfileClick.css';
import { useAuth } from "../../context/AuthContext";
import axios from 'axios';
function OnProfileClick() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const handleLogout=async(e)=>{
      e.preventDefault();
      await axios.post(`${import.meta.env.VITE_BACKEND}/auth/logout`);
      logout();
      navigate("/");
    }
  return (
    <div className="MainWrap">
        <div className="ContentWrap">
           <span onClick={() => navigate('/profile')}>Profile</span> 
        </div>
        <div className="ContentWrap">
           <span onClick={handleLogout}>Logout</span> 
        </div>
    </div>
  )
}

export default OnProfileClick