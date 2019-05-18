import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Main from "../components/FrontMain";
import CreateBtn from "../components/CreateButton";
import JoinBtn from "../components/JoinButton";
import Footer from "../components/Footer";

class Homepage extends Component {
    
    render() {
        return (
            <div>
                <h1>This is the Homepage</h1>
            </div>
        );
    }
}

export default Homepage;
