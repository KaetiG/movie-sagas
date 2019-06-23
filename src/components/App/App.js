import React, { Component } from 'react';
import './App.css';
//------COMPONENTS----------//
import MovieList from '../MovieList/MovieList.js';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">      
      {/* routing set up for other pages  */}
        <Route path="/details" component={Details} /> 
        <Route path="/edit" component={Edit} />
        <Route path="/" exact component={MovieList} />
      </div>
      </Router>
    );
  }
}

export default App;
