import React, {Component} from 'react';
import Callback from './Callback';
// import logo from './logo.svg';
import './App.css';
// import CalApp from './components/calendar/Calendar';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Calendar from "./pages/livecalpage";

// import Home from "";
// import Home from "";

function App () {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact pat="/" component={Home} /> */}
          {/* <Route exact pat="/info" component={Info} /> */}
          <Route exact pat='/calendar' component={Calendar} />
          {/* <Route exact pat="/calendar/:id" component={CalApp} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App