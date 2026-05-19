import React, { useEffect,useState } from 'react'
import './LeaderBoard.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function LeaderBoard() {
  const navigate = useNavigate();
  const [leaderboard,setleaderboard]=useState([]);
  const [rank,setRank]=useState();
  const [points,setpoints]=useState();
  const [name,setName]=useState();
  const [profile,setProfile]=useState();
  const [level,setLevel]=useState();
  useEffect(()=>{
   async function getLeaderBoard(){
    const token =localStorage.getItem('token');
    try{
    const res=await axios.get(`${import.meta.env.VITE_BACKEND}/user/leaderboard`,
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );
    setleaderboard(res.data.top);
    setRank(res.data.userRank);
    setpoints(res.data.userPoints);
    setName(res.data.userName);
    setProfile(res.data.userProfile);
    setLevel(res.data.userLevel);
  }catch(error){
    console.log(error);
  }} 
   getLeaderBoard();
  },[])
  return (
    <>
      <div className='Header'>
        <h1>Impact Leaderboard</h1>
        <span>The more eco-actions you complete, the higher you climb!. Every Leaf count towards our shaped planet future.</span>
      </div>
      <div className='LeaderBorad'>
        <h2>Top 10</h2>
        <div className='Diff'>
          <span className='Rank'>Rank</span>
          <span className='Point'>Points</span>
        </div>
        <div className='Top10'>
          {leaderboard.map((player, index) => (
          <div className='RankConatiner' key={player._id}>
            <span className='No'>{player.rank}</span>
            <img src={`${import.meta.env.VITE_BACKEND}/uploads/${player.profileImage}`} alt="avatar"/> 
            <span className='Name'>{player.name}</span>
            <span className='points'>
            {player.level !== undefined && player.points !== undefined
              ? (1000 * player.level) + player.points
              : 0}
            </span>
          </div>
        ))}
        </div>
        <div className='YourRankContainer'>
          <div className='YourRank'>
            <span className='YourNo'>{rank}</span>
            <img src={`${import.meta.env.VITE_BACKEND}/uploads/${profile}`} alt="avatar"/>
            <span className='YourName'>{name}</span>
            <span className='Yourpoints'>{(1000*level)+points}</span>
          </div>
        </div>
      </div>
      <div className="earn-card">
        <h2>Wanna Earn More Leaf 🍃</h2>
        <button className="earn-btn" onClick={()=>navigate('/tasks')}>Earn Leaf</button>
      </div>
    </>
  )
}

export default LeaderBoard