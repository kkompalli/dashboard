import React from 'react';
import {Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import  Header  from './components/header/header';
import  Home  from './components/home/home';

function App() {
  return (
    <> 
  
    <Header></Header>
      <div className="container-fluid">
          <div>
              <Switch>                 
                  <Route exact path="/" component={Home} />
                  <Route path="/home" component={Home} />                 
                  <Redirect from="*" to="/" />
              </Switch>
          </div>
      </div>
      </>
  );
}

export default App;
