<<<<<<< HEAD
import React, {Component} from 'react';
import Callback from './Callback';
import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import CalApp from './components/calendar/Calendar';
import NavBar from './components/NavBar/NavBar';
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Calendar from "./pages/Livecalpage";
// import Home from "";
// import Home from "";
>>>>>>> d7affc8503fd9eff36cc62c6d3ef0fc97fe4069f


class App extends Component {
  render() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <NavBar />
      <CalApp />
      <Route exact path='/callback' component={Callback}/>
    </div>
    // <div className="App">
    //   < CalApp / >
    // </div>
    );
  }
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
}

export default App;