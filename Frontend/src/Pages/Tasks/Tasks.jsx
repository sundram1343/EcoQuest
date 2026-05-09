import React,{useState,useEffect} from 'react'
import './Tasks.css'
import axios from 'axios'
function Tasks() {
  const [LeftExp,setLeftExp]=useState(0);
  const [level,setLevel]=useState(0);
  useEffect(()=>{
    const token=localStorage.getItem("token")
    async function fetchData(){
      try{

      const res=await axios.get(`${import.meta.env.VITE_BACKEND}/auth/getData`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      const data = res.data;
      setLevel(data.level);
      setLeftExp(1000-data.points);
    }
    catch(err){
      console.log(err)
    }
  }
    fetchData();
  },[])
  return (
    <div className="TasksPage">   
      <div className='Header'>
        <h1>Eco Challenges</h1>
        <span>
          Turn your daily habits into a global impact. Complete Tasks to earn points and grow your digital garden
        </span>
        <div className='LevelSection'>
          <div className='ProfileCContainer'>
            <img className='ProfilePicture' src='https://wallpapers.com/images/hd/iron-man-without-mask-efho6tashj8t1qkb.jpg'/>
            <span className='LevelShown'>{level}</span>
          </div>
          <div className='ExpContainer'>
            <span>{LeftExp}xp exp for next level</span>
            <progress max={1000} value={1000-LeftExp} style={{ accentColor: '#006a35' }} />
          </div>
        </div>
      </div>

      <div className='ChallengesConatiner'>
        <div id='Challenge1'>
          <span className='Points'>+250XP</span>

          <div className='DifficultyContainer'>
            <span className='Difficulty'>Moderate</span>
          </div>

          <div className='contain'>
            <span className='ChallengeName'>Plastic Free Week</span>
            <span className='ChallengeDes'>
              Avoid all single-use plastics for 7 days.
            </span>

            <div className='StartContainer'>
              <span className='Start'>Start</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Tasks;