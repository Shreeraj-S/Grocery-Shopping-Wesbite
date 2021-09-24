import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import useFetch from './Components/useFetch';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const {data: productList, isPending, error, setData} = useFetch();

  return (
    <div className="App">
      <Router>
          <Navbar productList={productList} editProductList={setData} 
            searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Switch>
              <Route exact path="/">
                {productList && 
                  <Home productList={productList
                      .filter(product => 
                        JSON.stringify(product).toLowerCase().includes(searchTerm.trim().toLowerCase()))} 
                    isPending={isPending} error={error} editProductList={setData}/>}
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
