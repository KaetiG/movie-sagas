import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList.js';
import Details from '../Details/Details';

import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">       
        <Route path="/details" component={Details} />
        <Route path="/" exact component={MovieList} />
      </div>
      </Router>
    );
  }
}

export default App;
