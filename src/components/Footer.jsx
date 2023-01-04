import './Footer.css'
import React from "react";
import Logo from "./assets/Logo.png"

function Footer() {
    return (
        <footer>
            <img className='logo-footer' src={Logo} alt="Logo" />
        </footer>
    )
}

export default Footer;