import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Layout from './Components/Layout.js';
import Navigation from './Components/Navigation.js';
import Portfolio from './Components/Portfolio.js';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Layout />
      </div>
    );
  }
}

export default App;