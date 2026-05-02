import React from 'react'
import './Impact.css'
import { FaBell,FaRecycle } from 'react-icons/fa'
import { LuTrees } from "react-icons/lu";
import { IoMdCloudDone } from "react-icons/io";
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
function Impact() {
  const {authUser} = useAuth()
  const navigate = useNavigate()
  return (
    <>
      <div className='Impact-Header'>
        <span className='Impact-Header-Title'>My Environmental Impact</span>
        <div className='Impact-UserBox'>
          <FaBell className='BellIcon' />
          <span>{authUser}</span>
        </div>
      </div>
      <div className='Impact-Stats'>
        <div className='Impact-Stat'>
          <div className='TreeConatiner'><LuTrees className='ImpactTree'/></div>
          <span className='Impact-Stat-Number'>124</span>
          <span className='Impact-Stat-Label'>Trees Planted</span>
        </div>
        <div className='Impact-Stat'>
          <div className='PlasticConatiner'><FaRecycle className='PlasticIcon' /></div>
          <span className='Impact-Stat-Number'>480</span>
          <span className='Impact-Stat-Label'>Kg of Plastic Recycled</span>
        </div>
        <div className='Impact-Stat'>
          <div className='CO2Conatiner'><IoMdCloudDone className='CO2Icon' /></div>
          <span className='Impact-Stat-Number'>2.4</span>
          <span className='Impact-Stat-Label'>Tons of CO2 Saved</span>
        </div>
      </div>
      <div className='Impact-Page-Image'>
       <div className='WeeklyContainer'>
        <span className='WeeklyContainer-Text'>Weekly Milestone</span>
       </div>
       <span className='YourGarden'>Your Garden is Breathing deeper today, {authUser}</span>
       <span>Your efforts this month have offset the equivalent of 1200km car!</span>
       <div className='StartContainer'>
        <span onClick={()=>navigate('/tasks')}>Start a new Quest</span>
       </div>
      </div>
    </>
  )
}

export default Impact