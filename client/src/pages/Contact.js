import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import DemoCal from "../components/DemoCalendar";
import Navbar from "../components/Navbar/Navbar";
import FormControl from "../components/ContactMain/ContactMain";

class Contact extends Component {

    render() {
        return (
            <div>
                <Navbar />
               
                <br />
                <div>
               <FormControl />
                </div>
            </div>

        );
    }
}

export default Contact;