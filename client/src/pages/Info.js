import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import InfoNav from "../components/InfoNav/InfoNav";
import InfoMain from "../components/InfoMain/InfoMain";
// We'll need additional imports here for content
// 
// import Footer from "../components/Footer";

class Infopage extends Component {
    
    render() {
        return(
            <div>
                <InfoNav />
                <InfoMain />
            </div>
        );
    }
}

export default Infopage;