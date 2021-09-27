import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { createContext, useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import useFetch from './Components/useFetch';

export const UpdateNumberofItemsContext = createContext();

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const {data, isPending, error, updateNumberofItems} = useFetch();
  const productList = data ? 
    data.filter(product => JSON.stringify(product).toLowerCase().includes(searchTerm.trim().toLowerCase())) :
    data;

  return (
    <div className="App">
      <Router>
        <UpdateNumberofItemsContext.Provider value={updateNumberofItems}>
          <Navbar productList={productList} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Switch>
              <Route exact path="/">
                  <Home productList={productList} isPending={isPending} error={error}/>
              </Route>
          </Switch>
        </UpdateNumberofItemsContext.Provider>
      </Router>
    </div>
  );
}

export default App;
