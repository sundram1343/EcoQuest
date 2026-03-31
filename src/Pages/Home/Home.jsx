import React from 'react'
import './Home.css'
import Navbar from '../../Components/NavBar/Navabr'
import { useAuth } from '../../context/AuthContext'
import HomeImage from '../../assets/HomeImage.png'
import { FaRocket } from "react-icons/fa";
import { PiRankingLight } from "react-icons/pi"
import { LuTrees } from "react-icons/lu";
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
      <div id='CentralContainer'>
        <div id='GrowthBox'>
          <div id='RocketContainer'>
            <FaRocket id='RocketIcon'/>
          </div>
          <span id='GrowthTitle'>Start Challenge</span>
          <span id='GrowthDes'>New Daily Tasks availabe to boost your rank</span>
          <p id='GrowthButton'>Go Now →</p>
        </div>
        <div id='rank'>
          <PiRankingLight id='RankIcon' />
          <span>View LeaderBoard</span>
          <span>See your ranking</span>
          <span>See ranking →</span>
        </div>
        <div id='Impact'>
          <LuTrees id='TreeIcon'/>
          <span>My Impact</span>
          <span>See the visual growth of your digital garden</span>
          <span>Track Growth →</span>
        </div>
      </div>
    </>
  )
}

export default Home