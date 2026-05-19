import React,{useState,useEffect} from 'react'
import './Impact.css'
import { FaBell,FaRecycle } from 'react-icons/fa'
import { LuTrees } from "react-icons/lu";
import { IoMdCloudDone } from "react-icons/io";
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Impact() {
  const {authUser} = useAuth()
  const navigate = useNavigate()
  const [treesPlanted,setTreesPlanted] = useState(0);
  const [plasticRecycled,setPlasticRecycled] = useState(0);
  const [co2Saved,setCO2Saved] = useState(0);
  useEffect(()=>{
    const token = localStorage.getItem("token")
    async function fetchData(){
      try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND}/auth/getData`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      const data = res.data;
      setTreesPlanted(data.treeplanted)
      setPlasticRecycled(data.recycled)
      setCO2Saved(data.co2saved)
    } catch (error) {
      console.log(error)
    }
  }
    fetchData();
  },[])
  const driveDistance=co2Saved/0.13;
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
          <span className='Impact-Stat-Number'>{treesPlanted}</span>
          <span className='Impact-Stat-Label'>Trees Planted</span>
        </div>
        <div className='Impact-Stat'>
          <div className='PlasticConatiner'><FaRecycle className='PlasticIcon' /></div>
          <span className='Impact-Stat-Number'>{plasticRecycled}</span>
          <span className='Impact-Stat-Label'>Kg of Plastic Recycled</span>
        </div>
        <div className='Impact-Stat'>
          <div className='CO2Conatiner'><IoMdCloudDone className='CO2Icon' /></div>
          <span className='Impact-Stat-Number'>{co2Saved}</span>
          <span className='Impact-Stat-Label'>Tons of CO2 Saved</span>
        </div>
      </div>
      <div className='Impact-Page-Image'>
       <div className='WeeklyContainer'>
        <span className='WeeklyContainer-Text'>Weekly Milestone</span>
       </div>
       <span className='YourGarden'>Your Garden is Breathing deeper today, {authUser}</span>
       <span>Your efforts this week have offset the equivalent of {driveDistance}km car!</span>
       <div className='StartContainer' onClick={()=>navigate('/tasks')}>
        <span>Start a new Quest</span>
       </div>
      </div>
    </>
  )
}

export default Impact