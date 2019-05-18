import React, {Component} from 'react';
import Callback from './Callback';
// import logo from './logo.svg';
import './App.css';
// import CalApp from './components/calendar/Calendar';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Calendar from "./pages/livecalpage";

// import Home from "";
import FrontMain from "../src/components/main/Main";
import Calendar from "./pages/LiveCalendar";
import Main from "../src/components/main/Main";
// import Home from "";

function App () {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={FrontMain} />
          {/* <Route exact path="/info" component={Info} /> */}
          <Route exact path='/calendar' component={Calendar} />
          {/* <Route exact path="/calendar/:id" component={CalApp} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App