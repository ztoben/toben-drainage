import React, {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Routes from './routes';
import './style/app.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}
