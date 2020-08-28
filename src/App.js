import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Home as Home} from './Home';
import {About as About}from './About';
import { Games as Games } from './Games';
 
class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>SMB Arkaden</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/games'} className="nav-link">Games</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/games' component={Games} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;