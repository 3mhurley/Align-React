import React, {Component} from 'react';
import Callback from './Callback';
// import logo from './logo.svg';
import './App.css';
// import CalApp from './components/calendar/Calendar';
// import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
// import Calendar from "./pages/livecalpage";
// import Home from "";
// import from "../src/components/main/Main";
import Calendar from "./pages/LiveCalendar";
<<<<<<< HEAD
import FrontMain from "../src/components/main/Main";
import auth0Client from './Auth';
=======
import FrontMain from "./components/Main/Main";
import Main from "./components/Main/Main";
>>>>>>> aaa9d35a0bac2b6c748785c63486c77924560fec
// import Home from "";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkingSession: true,
    }
  }

  async componentDidMount() {
    if (this.props.location === '/callback') {
      this.setState({checkingSession: false});
      return;
    };
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({checkingSession: false});
  }
  
  render() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/info" component={Info} /> */}
          <Route exact path='/calendar' component={Calendar} />
          {/* <Route exact path="/calendar/:id" component={CalApp} /> */}
          <Route exact path='/callback' component={Callback}/>
        </Switch>
      </div>
    </Router>
  );
};
};

export default App