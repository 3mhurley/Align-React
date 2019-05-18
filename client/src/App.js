import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Calendar from "./pages/LiveCalendar";
import FrontMain from "./components/main/FrontMain";
// import Home from "";

function App() {
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
}

export default App;