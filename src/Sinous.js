import React from 'react'
import './css/Styling.css'
import sinousbanner from './assets/sinousbanner.jpg'
import scoreboard from './assets/scoreboard.png'
import sinousGameplay from './assets/sinousGameplay.png'



export const Sinous = () => (
    <div>
      <img className='gameBanner' src={sinousbanner}></img>
      <container>
      <div className="gameDiv">
        <row>
          <img className="game" src={sinousGameplay}/>
          <img className="scoreboard" src={scoreboard}/>
        </row>
      </div>
    </container>
    </div>
) 