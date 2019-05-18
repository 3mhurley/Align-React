import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Main from "../components/Main";
import CreateBtn from "../components/CreateButton";
import JoinBtn from "../components/JoinButton";
import Footer from "../components/Footer";

class Homepage extends Component {

    render() {
        return (
            <div>
                <Main />
            </div>
        );
    }
}

export default Homepage;
