import React from 'react'
import './Tasks.css'
function Tasks() {
  return (
    <div className="TasksPage">   

      <div className='Header'>
        <h1>Eco Challenges</h1>
        <span>
          Turn your daily habits into a global impact. Complete Tasks to earn points and grow your digital garden
        </span>
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
              <span>Start</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Tasks;