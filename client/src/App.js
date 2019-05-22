import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Calendar from "./pages/LiveCalendar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Demo from "./pages/Demo";
import Contact from "./pages/Contact"

// import Home from "";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path='/info/demo' component={Demo} />
          <Route exact path='/contact' component={Contact} />
          {/* <Route exact path="/calendar/:id" component={CalApp} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;