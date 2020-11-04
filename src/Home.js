import React from 'react';
import tetris from './assets/tetris.png';
import scavenger from './assets/scavenger.png'
import sinous from './assets/sinous.png'
import { Link } from 'react-router-dom';
import './css/Styling.css'
import banner from './assets/banner3.png'
import { AmplifySignOut } from '@aws-amplify/ui-react'



export const Home = () => (
  <div className="homeDiv">
    <div class="smallContainer">
        <AmplifySignOut className="signout"/>
    </div>
    <div className="bannerDiv">
        <img className="banner" alt="" src={banner}/>
    </div>

    <container>
      <div className="machineDiv">
        <row className="machineRow">
        <Link to='/tetris'><img className="machine" alt="" src={tetris}/></Link>
        <Link to='/scavengerhunt'><img className="machine" alt="" src={scavenger}/></Link>
        <Link to='/sinous'><img className="machine" alt="" src={sinous}/></Link>
        </row>
      </div>
    </container>
  </div> 
) 

