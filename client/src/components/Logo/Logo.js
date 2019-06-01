import React from 'react';
import logo from './logo_transparent.png';
import './logo.scss';

console.log(logo);

function HeaderImg() {
    return <img src={logo} alt="Logo" id="alignLogo" />;
}

export default HeaderImg;