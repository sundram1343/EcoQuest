import React,{useState,useRef,useEffect} from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaUser, FaBell } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import OnProfileClick from '../OnProfileClick/OnProfileClick';
function Navbar() {
  const { authUser } = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);
  const [points,setPoints]=useState(0);

  useEffect(() => {
    const token=localStorage.getItem('token');
    async function loadData(){
    if(token){
      try{
        const res=await axios.get(`${import.meta.env.VITE_BACKEND}/auth/getData`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        setPoints(res.data.points);
      }
      catch(err){console.log(err);}
    }
    loadData();
  }
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div id="Header">
        <h1 id='Header-Title'>EcoQuest</h1>

        <div id='Header-Elements'>
          <NavLink to="/" className={({ isActive }) => isActive ? "ActiveElement" : "NonActiveElement"}>Home</NavLink>
          <NavLink to="/tasks" className={({ isActive }) => isActive ? "ActiveElement" : "NonActiveElement"}>Tasks</NavLink>
          <NavLink to="/leaderboard" className={({ isActive }) => isActive ? "ActiveElement" : "NonActiveElement"}>LeaderBoard</NavLink>
          <NavLink to="/impact" className={({ isActive }) => isActive ? "ActiveElement" : "NonActiveElement"}>Impact</NavLink>
        </div>

        <div id='header-last-element'>
          <span id='PointsButton'>{points}</span>
          <FaBell id='Bell' />

          <div ref={profileRef}>
            <div id='user' onClick={() => setShowProfile(!showProfile)}>
              <span id='Username'>{authUser}</span>
              <FaUser id='usericon'/>
            </div>

            {showProfile && <OnProfileClick />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;