import React from 'react';
import logo from "../assets/logos/Group 1329.png";
import "../styles/Style.css";
const Footer = () => {
    return (
        <div className='footer text-center mx-auto mt-4 py-2'>
             <img className='mx-auto my-3' style={{width: "10%"}} src={logo} alt="" />
            <h1 className='font-bold text-xl'>Volunteer network is Powered by Humanity.</h1>
        </div>
    );
};

export default Footer;