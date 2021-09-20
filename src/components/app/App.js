
import './App.css';
import Nav from './../nav/nav'
import Footer from '../footer/footer';
import React, { useState } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import Login from '../content/Auth/login/login';
import { authenticationService } from '../content/Auth/service/auth-service';
import Home from '../content/Home';

import history from '../content/Auth/service/history';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
  }

  logout() {
    authenticationService.logout();
    history.push('/login');
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <div>
          {currentUser &&
            <div><Nav />
              <Footer />
            </div>
          }
          {!currentUser && <Login />}
        </div>
      </Router>
    );
  }
}

export default App;
