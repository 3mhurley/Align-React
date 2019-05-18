import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import CalApp from "../components/calendar/Calendar";
// import CalApp from "../components/calendar";

class Calendar extends Component {

  render() {
    return (
      <div>
        <h1>Align Your Calendar</h1>
        <br />
        <div>
          <CalApp />
        </div>
      </div>

    );
  }
}

export default Calendar;