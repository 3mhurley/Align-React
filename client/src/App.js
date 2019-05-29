import React, {Component} from 'react';
import Callback from './Callback';
import CalApp from './components/Calendar/Calendar';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Calendar from './pages/LiveCalendar';
import auth0Client from './Auth';
// import Main from "./components/Main/Main";
import Home from './pages/Home';
import Info from './pages/Info';
import Demo from './pages/Demo';
import Contact from "./pages/Contact"


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
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path='/calendar' component={Calendar} />
          <Route exact path='/info/demo' component={Demo} />
          <Route exact path='/contact' component={Contact} />
          {/* <Route exact path="/calendar/:id" component={CalApp} /> */}
          <Route exact path='/callback' component={Callback}/>
        </Switch>
      </div>
    </Router>
  );
};
};

export default App