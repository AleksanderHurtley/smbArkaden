import React from 'react';
import tetris from './assets/tetris.png';
import scavenger from './assets/scavenger.png'
import sinous from './assets/sinous.png'
import { Link } from 'react-router-dom';
import './css/Styling.css'
import { ColorFilter } from './components/ColorFilter';
import { Row } from 'react-bootstrap';
import banner from './assets/banner3.png'


export const Home = () => (
  <div className="homeDiv">
    <div className="bannerDiv">
        <img className="banner" src={banner}/>
    </div>

    <container>
      <div className="machineDiv">
        <row className="machineRow">
        <Link to='/tetris'><img className="machine" src={tetris}/></Link>
        <Link to='/scavengerhunt'><img className="machine" src={scavenger}/></Link>
        <Link to='/sinous'><img className="machine" src={sinous}/></Link>
        </row>
      </div>
    </container>
  </div> 
) 

