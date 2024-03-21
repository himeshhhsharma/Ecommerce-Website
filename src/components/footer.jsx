import React from 'react'
import logo from '../images/logoicon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from "react-router-dom";

const footer = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='footer-main'>
                <div className='footer-row1'>
                    <div className='footer-logo logo-section'>
                        <div className='logo' onClick={() => { navigate("/") }}>
                            <img src={logo} alt="" />
                        </div>
                        <div className='logo-name creepster-regular'  onClick={() => { navigate("/") }}>Halloween Shop</div>
                    </div>
                    <div className='footer-nav nav'>
                        <div className='nav-links roboto-regular'>

                            <li onClick={() => { navigate("/") }}>Home</li>
                            <li onClick={() => { navigate("/shop") }}>Shop</li>
                            <li onClick={() => { navigate("/about") }}>About</li>
                            <li onClick={() => { navigate("/contact") }}>Contact</li>

                        </div>

                    </div>
                    <div className='footer-social'>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>

                </div>

                <div className='footer-row2'>Copyright © 2024 Halloween Shop | Powered by Halloween Shop</div>

            </div>
        </>
    )
}

export default footer