import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaUser, FaBell } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';

function Navbar() {
  const { authUser } = useAuth();

  return (
    <>
      <div id="Header">
        
        <h1 id='Header-Title'>EcoQuest</h1>
        <div id='Header-Elements'>
          
          <NavLink to="/" 
            className={({ isActive }) => isActive ? "ActiveElement" : "NonActiveElement"}>
            Home
          </NavLink>

          <NavLink to="/tasks" 
            className={({ isActive }) => isActive ? "ActiveElement" : "NonActiveElement"}>
            Tasks
          </NavLink>

          <NavLink to="/leaderboard" 
            className={({ isActive }) => isActive ? "ActiveElement" : "NonActiveElement"}>
            LeaderBoard
          </NavLink>

          <NavLink to="/impact" 
            className={({ isActive }) => isActive ? "ActiveElement" : "NonActiveElement"}>
            Impact
          </NavLink>

        </div>

        <div id='header-last-element'>
          <span id='PointsButton'>Points</span>
          <FaBell id='Bell' />
          
          <div id='user'>
            <span id='Username'>{authUser}</span>
            <FaUser id='usericon'/>
          </div>
        </div>

      </div>
    </>
  );
}

export default Navbar;