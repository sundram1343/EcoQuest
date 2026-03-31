import React from 'react'
import './Home.css'
import Navbar from '../../Components/NavBar/Navabr'
import { useAuth } from '../../context/AuthContext'
import HomeImage from '../../assets/HomeImage.png'
function Home() {
  const {authUser} =useAuth();
  return (
    <>
      <div><Navbar/></div>
      <div id='wrap'>
        <div id='conatiner'>
          <div id='leftcontainer'>
          <div id='StreakContainer'>
            <p style={{color:'#f8f8f8',backgroundColor:'#33855c'}}>🔥5-Day Streaks !</p>
          </div>
          <span id='Makingdifference'>You are making a Real Difference {authUser?.name||'User'}</span>
          <span id='SavedLine'>Your eco-efforts this week Saved 12kg of CO2.Keep Your Momentum going!</span>
          <div id='ButtonContainer'>
            <span id='StartChallenge'>Start Challenge</span>
            <span id='ExploreMore'>Explore more</span>
          </div>
          </div>
          <img src={HomeImage} id='HomeImage'/>
        </div>
      </div>
    </>
  )
}

export default Home