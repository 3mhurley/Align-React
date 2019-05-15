import React, {Component} from 'react';
import Callback from './Callback';
import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import CalApp from './components/calendar/Calendar';
import NavBar from './components/NavBar/NavBar';


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
}

export default App;
