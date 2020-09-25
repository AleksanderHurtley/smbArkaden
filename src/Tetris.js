import React from 'react'
import './css/Styling.css'
import tetrisbanner from './assets/tetrisbanner.jpg'
import scoreboard from './assets/scoreboard.png'
import tetrisGameplay from './assets/tetrisGameplay.png'



export const Tetris = () => (
    <div>
      <img className='gameBanner' src={tetrisbanner}></img>
      <container>
      <div className="gameDiv">
        <row>
          <img className="game" src={tetrisGameplay}/>
          <img className="scoreboard" src={scoreboard}/>
        </row>
      </div>
    </container>
    </div>
) 