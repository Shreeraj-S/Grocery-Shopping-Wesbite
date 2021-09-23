import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
