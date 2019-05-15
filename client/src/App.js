import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Calendar from "./pages/Livecalpage";
// import Home from "";
// import Home from "";

function App() {
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
}

export default App;