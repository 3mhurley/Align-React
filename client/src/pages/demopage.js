import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import DemoCal from "../components/DemoCalendar";

class DemoCalendar extends Component {

    render() {
        return (
            <div>
                <h1>Demo the Align Calendar</h1>
                <br />
                <div>
                {/* Demo Calendar Here */}
                </div>
            </div>

        );
    }
}

export default DemoCalendar;