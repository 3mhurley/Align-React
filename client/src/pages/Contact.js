import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MyForm from "../components/ContactMain/ContactMain";

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