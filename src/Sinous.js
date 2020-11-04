import React from 'react'
import './css/Styling.css'
import sinousbanner from './assets/sinousbanner.jpg'
import scoreboard from './assets/scoreboard.png'
import sinousGameplay from './assets/sinousGameplay.png'



export const Sinous = () => (
    <div>
      <img className='gameBanner' alt="" src={sinousbanner}></img>
      <container>
      <div className="gameDiv">
        <row>
          <img className="game" alt="" src={sinousGameplay}/>
          <img className="scoreboard" alt="" src={scoreboard}/>
        </row>
      </div>
    </container>
    </div>
) 