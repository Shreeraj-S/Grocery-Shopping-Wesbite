import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
