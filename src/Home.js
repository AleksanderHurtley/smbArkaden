import React from 'react';
import bilde from './assets/fasade.jpg';
import { Link } from 'react-router-dom';
import './css/Styling.css'
import { ColorFilter } from './components/ColorFilter';


export const Home = () => (
  <div>
    <ColorFilter/>
    <h1>Welcome</h1>
    <p><br/>Compete against your colleagues! <br/> Set a new highscore!<br/> Be the best! <br/> Beat the rest!
    </p>
    <container>
      <div>
          <Link to='/games'><img className="enterPicture" alt="Home" src={bilde}/></Link>
      </div>
    </container>
  </div> 
) 
