import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Games } from './Games'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route path="/smbArkaden/" component={Home} />
              <Route path="/smbArkaden/games" component={Games} />
              <Route path="/smbArkaden/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
