import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../Login/Login'





const App = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login}/> 
          </Switch>
        </div>
      </Router>
  );
};  

export default App