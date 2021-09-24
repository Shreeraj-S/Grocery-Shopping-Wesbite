import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import useFetch from './Components/useFetch';


function App() {
  const {data: productList, isPending, error, setData} = useFetch();
  return (
    <div className="App">
      <Router>
          <Navbar productList={productList}/>
          <Switch>
              <Route exact path="/">
                <Home productList={productList} isPending={isPending} error={error} editProductList={setData}/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
