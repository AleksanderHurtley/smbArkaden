import React from 'react'
import { ColorFilter } from './components/ColorFilter'
import './css/Styling.css'
import tetrisbanner from './assets/tetrisbanner.jpg'
import sinusbanner from './assets/sinusbanner.jpg'
import scavengerbanner from './assets/scavengerbanner.jpg'


export const Games = () => (
    <div>
      <ColorFilter></ColorFilter>
      <h1>Arcade Hall</h1>
      <img className='gameBanner' src={tetrisbanner}></img>
      <img className='gameBanner' src={sinusbanner}></img>
      <img className='gameBanner' src={scavengerbanner}></img>
    </div>
) 