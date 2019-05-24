import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import DemoCal from "../components/DemoCalendar";
import Navbar from "../components/Navbar/Navbar";
// import ContactForm from "../components/ContactMain/ContactMain";
import MyForm from "../components/ContactMain/ContactMain2";

class Contact extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <br />
                <div>
                {/* <ContactForm /> */}
                <MyForm />
                </div>
            </div>

        );
    }
}

export default Contact;