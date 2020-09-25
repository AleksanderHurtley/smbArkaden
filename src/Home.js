import React from 'react';
import tetris from './assets/tetris.png';
import scavenger from './assets/scavenger.png'
import sinous from './assets/sinous.png'
import { Link } from 'react-router-dom';
import './css/Styling.css'
import { ColorFilter } from './components/ColorFilter';
import { Row } from 'react-bootstrap';


export const Home = () => (
  <div className="homeDiv">
    <h1>Welcome<br/>To<br/>SMB Arkaden</h1>
    <container>
      <div className="machineDiv">
        <row className="machineRow">
        <Link to='/games'><img className="machine" src={tetris}/></Link>
        <Link to='/games'><img className="machine" src={scavenger}/></Link>
        <Link to='/games'><img className="machine" src={sinous}/></Link>
        </row>
      </div>
    </container>
  </div> 
) 

