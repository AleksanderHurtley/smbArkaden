import React from 'react'
import './css/Styling.css'
import Snake from 'react-simple-snake'
import HighScoresSnake from './HighScoresSnake'
import highscores from './assets/highscores.png'


export const Scavengerhunt = () => (
    <div className='snakeBox'>

      <div className='snakes'>
        <Snake snakeColor='red' percentageWidth={150}/>
      </div>
      
      <div className='snakeScore'>
        <h1> HIGH SCORES:</h1>
        <p><br></br></p>
        <HighScoresSnake></HighScoresSnake>
      </div>

    </div>
) 