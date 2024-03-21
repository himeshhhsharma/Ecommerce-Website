import React, { useState, useEffect } from 'react'
// import carticon from '../images/shopping-cart.svg';
import logo from '../images/logoicon.svg';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { lib } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CardImage from '../images/CartImage.jpg'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Then, within your component:


const Header = () => {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Clean up function to restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);
    const navigate = useNavigate();
    let [num, setNum] = useState(0);
    let incNum = () => {
        setNum(Number(num) + 1);
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return (
        <>
            <div className='main-header'>
                <div className='logo-section'>
                    <div className='logo' onClick={() => { navigate("/") }}>
                        <img src={logo} alt="" />
                    </div>
                    <div className='logo-name creepster-regular' onClick={() => { navigate("/") }}>Halloween Shop</div>
                </div>
                <div className='nav'>
                    <div className='nav-links roboto-regular'>

                        <li onClick={() => { navigate("/") }}>Home</li>
                        <li onClick={() => { navigate("/shop") }}>Shop</li>
                        <li onClick={() => { navigate("/about") }}>About</li>
                        <li onClick={() => { navigate("/contact") }}>Contact</li>

                    </div>

                    <div onClick={() => setOpen(true)} className='nav-cart'><FontAwesomeIcon icon={faCartShopping} /><Badge bg="secondary" >9</Badge></div>

                    {open &&

                        <div className='side-bar'>
                            <div className='side-bar-top border-btm'>
                                <div className='side-bar-top-c1'>Shopping cart</div>
                                <p className='side-bar-top-c2' onClick={() => setOpen(false)}>Close</p>
                            </div>
                            <div className='side-bar-main border-btm'>
                                <div className='side-bar-main-comp'>
                                    <div className='side-bar-main-comp-r1'>
                                        <div className='side-bar-main-comp-c1'>
                                            <img src={CardImage} alt="" />
                                            <div className='side-bar-main-comp-c1-2'>
                                                <div className='side-bar-main-comp-c1-2-name'>Candle Support</div>
                                                <div className='side-bar-main-comp-c1-2-qbtn'>
                                                    <label className='side-bar-main-comp-c1-2-qbtn-1' for="qnty" onClick={decNum}>-</label>
                                                    <input className='side-bar-main-comp-c1-2-qbtn-2' type="text" id="qnty" value={num} onChange={handleChange} />
                                                    <label className='side-bar-main-comp-c1-2-qbtn-3' for="qnty" onClick={incNum}>+</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='side-bar-main-comp-c2'>
                                        <div className='side-bar-main-comp-c2-cancel'><FontAwesomeIcon icon={faXmark} /></div>
                                        <div className='side-bar-main-comp-c2-price'>$130.00</div>

                                    </div>
                                    </div>
                                    
                                </div>

                            </div>
                            <div className='side-bar-subtotal border-btm'>
                                <div className='side-bar-subtotal-l'>Subtotal:</div>
                                <div className='side-bar-subtotal-r'>$130.00</div>
                            </div>
                            <div className='side-bar-last'>
                                <div className='red-btn side-bar-btn'>View cart</div>
                                <div className='red-btn side-bar-btn'>Checkout</div>
                            </div>

                        </div>

                    }
                </div>

            </div>
        </>
    )
}

export default Header;