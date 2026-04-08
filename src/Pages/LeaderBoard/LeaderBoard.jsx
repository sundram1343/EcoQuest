import React from 'react'
import './LeaderBoard.css'
import { useNavigate } from 'react-router-dom'
function LeaderBoard() {
  const navigate = useNavigate();
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
        <div className='RankConatiner'>
            <span className='No'>1</span>
            <img src='https://wallpapers.com/images/hd/iron-man-without-mask-efho6tashj8t1qkb.jpg'/>
            <span className='Name'>Iron Man</span>
            <span className='points'>1000</span>
        </div>
        <div className='YourRankContainer'>
          <div className='YourRank'>
            <span className='YourNo'>1</span>
            <img src='https://wallpapers.com/images/hd/iron-man-without-mask-efho6tashj8t1qkb.jpg'/>
            <span className='YourName'>Iron Man</span>
            <span className='Yourpoints'>1000</span>
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