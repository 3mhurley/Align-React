import React from 'react';
import navlogo from './logo_wot_transparent.png';
import './navlogo.scss';

console.log(navlogo);

function HeaderImg() {
    return <img src={navlogo} alt="Logo" id="navLogo" />;
}

export default HeaderImg;