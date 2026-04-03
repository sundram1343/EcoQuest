import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import {useAuth} from '../../context/AuthContext'
function Navbar() {
    const [Active,setActive] =useState('Home')
    const navigate = useNavigate();
    const {authUser}=useAuth();
    const rendercontent=()=>{
        switch(Active){
                case 'Home':
                    navigate('/home')
                    break;
                case 'Tasks':              
                    navigate('/tasks')
                    break;
                case 'LeaderBoard':
                    navigate('/leaderboard')
                    break;
                case 'Impact':
                    navigate('/impact')
                    break;  
            }
    }
  return (
    <>
        <div id="Header">
            <div id='Header-Elements'>
                <a id={Active==='Home'?'ActiveElement':'NonActiveElement'} onClick={()=>setActive('Home')}>Home</a>
                <a id={Active==='Tasks'?'ActiveElement':'NonActiveElement'} onClick={()=>setActive('Tasks')}>Tasks</a>
                <a id={Active==='LeaderBoard'?'ActiveElement':'NonActiveElement'} onClick={()=>setActive('LeaderBoard')}>LeaderBoard</a>
                <a id={Active==='Impact'?'ActiveElement':'NonActiveElement'} onClick={()=>setActive('Impact')}>Impact</a>
            </div>
            <div id='header-last-element'>
                <a id='PointsButton'>Points</a>
                <FaBell id='Bell' />
                <div id='user'>
                    <span id='Username'>{authUser}</span>
                    <FaUser id='usericon'/>
                </div>
            </div>
        </div>
        {rendercontent()}
    </>
  );
}

export default Navbar;
