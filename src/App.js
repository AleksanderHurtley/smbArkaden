import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Home as Home} from './Home';
import {About as About}from './About';
import { Games as Games } from './Games';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button  } from 'react-bootstrap';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">SMB Arkaden</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/games">Games</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Router>
          <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/games' component={Games} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;