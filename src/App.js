import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home'

import "./App.css";
import Description from "./components/Description/Description";

function App() {


  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/description" exact component={Description}/>
          </Switch>
        
    </Router>
  );
}

export default App;