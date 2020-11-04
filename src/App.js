import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { About }from './About';
import { Tetris } from './Tetris';
import { Scavengerhunt } from './Scavengerhunt'
import { Sinous } from './Sinous'
import { withAuthenticator } from '@aws-amplify/ui-react'
 
class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">SMB Arkaden</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/games">Games</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}

        <Router>
          <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/tetris' component={Tetris} />
                <Route path='/scavengerhunt' component={Scavengerhunt} />
                <Route path='/sinous' component={Sinous} />
            </Switch>
          </div>
        </Router>
        
      </div>
    )
  }
}

export default withAuthenticator(App);