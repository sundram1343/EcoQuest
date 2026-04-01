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
          <div id='RankIconConatiner'>
          <PiRankingLight id='RankIcon' />
          </div>
          <span id='RankTitle'>View LeaderBoard</span>
          <span id='GrowthDes'>See your ranking</span>
          <span id='RankButton'>See ranking →</span>
        </div>
        <div id='Impact'>
          <div id='TreeIconConatiner'>
          <LuTrees id='TreeIcon'/>
          </div>
          <span id='ImpactTitle'>My Impact</span>
          <span className='ImpactDes'>See the visual growth of your digital garden</span>
          <span className='ImpactButton'>Track Growth →</span>
        </div>
      </div>
      <div className='CurrentChallenges'>
        <p className='Current'>Current Challenges</p>
        <p className='ViewALL'>View All</p>
        <p className='Des'>Active Tasks waiting for you!</p>
        <div className='ChallengesConatiner'>
          <div id='Challenge1'>
            <span className='Points'>+250XP</span>
            <div className='DifficultyContainer'>
              <span className='Difficulty'>Moderate</span>
            </div>
            <div className='contain'>
              <span className='ChallengeName'>Plastic Free Week</span>
              <span className='ChallengeDes'>Avoid all single- use plastics for 7 days. Take a photo of your reusable </span>
              <progress className='ProgressBar' value={0.28}/>
            </div>
          </div>
          <div id='Challenge1'>
            <span className='Points'>+100XP</span>
            <div className='DifficultyContainer'>
              <span className='Difficulty'>Easy</span>
            </div>
            <div className='contain'>
              <span className='ChallengeName'>Nature Walk</span>
              <span className='ChallengeDes'>Complete a 30-minute walk </span>
            </div>
            <progress className='ProgressBar' value={0.5}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home