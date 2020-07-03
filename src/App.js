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
              <Route exact path="https://aleksanderhurtley.github.io/smbArkaden/" component={Home} />
              <Route path="https://aleksanderhurtley.github.io/smbArkaden/games" component={Games} />
              <Route path="https://aleksanderhurtley.github.io/smbArkaden/about" component={About} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
