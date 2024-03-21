import React from 'react'
import Header from '../components/Header'
import ImgInnerS from '../images/imginners1.jpg'
import ImgInnerS2 from '../images/imginners2.jpg'
import ImgInnerS3 from '../images/imginners3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import AccordionComponent from '../components/AccordionComponent'
import Cart3 from '../components/cart3'
import Footer from '../components/footer'
import ImageGallery from '../components/ImageGallery'

// import AccordionComponent from '../components/AccordionComponent'


const innershop = () => {
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
            <Header />
            <div className='is-main display-flex-row'>
                <div className='is-cart-container'>
                    <div className='is-cart-sectiion'>
                        <div className='is-cart-sectiion-left'>
                            <div className='is-cart-sectiion-left-r1'>
                                <div className='is-cart-sectiion-left-r1-mg-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                {/* <ImageGallery/> */}
                                </div>
                                <img src={ImgInnerS} alt="" />
                            </div>
                            <div className='is-cart-sectiion-left-r2'>
                                <div className='is-cart-sectiion-left-r2-d'>
                                    <img src={ImgInnerS2} alt="" />
                                </div>
                                <div className='is-cart-sectiion-left-r2-d'>
                                    <img src={ImgInnerS3} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className='is-cart-sectiion-right'>
                            <div className='is-cart-sectiion-right-1'>
                                <div className='is-cart-sectiion-right-1-c1'> <p>Home / Sweets / Ghostly Gingersnaps</p></div>
                                <div className='is-cart-sectiion-right-1-c2 display-flex-row'>
                                    <span><FontAwesomeIcon icon={faCaretLeft} /></span>
                                    <span><FontAwesomeIcon icon={faCaretRight} /></span>

                                </div>
                            </div>
                            <div className='is-cart-sectiion-right-2 roboto-regular'>DECORATIONS
                            </div>
                            <div className='is-cart-sectiion-right-3 creepster-regular'>PAPER PUMPKIN
                            </div>
                            <div className='is-cart-sectiion-right-4'>
                                <span className='is-cart-sectiion-right-4-s1'>$17.00</span>
                                <span className='is-cart-sectiion-right-4-s2'>& Free Shipping</span>
                                <div>Elevate your Halloween décor game with our captivating decorations that will cast a bewitching spell over your home. From eerie candlelit lanterns that flicker with an otherworldly glow to intricate and spooky wall hangings that set the scene, our decorations are designed to bring your Halloween vision to life.</div>
                            </div>
                            <div className='is-cart-sectiion-right-5 border-btm'>
                                <div className='is-cart-sectiion-right-5-c1'>
                                    <label className='dec-btn' for="qnty" onClick={decNum}>-</label>
                                    <input type="text" id="qnty" value={num} onChange={handleChange} />
                                    <label className='inc-btn' for="qnty" onClick={incNum}>+</label>
                                </div>
                                <div className='is-cart-sectiion-right-5-c2'>
                                    <div className='red-btn'>Add To cart</div>
                                </div>
                            </div>
                            <div className='is-cart-sectiion-right-6'>
                                <span className='is-cart-sectiion-right-6-c1'>Category: </span>
                                <span className='is-cart-sectiion-right-6-c2'> Decorations
                                </span>
                            </div>
                            <div className='is-cart-sectiion-right-7'>
                                <div className='is-cart-sectiion-right-7-h'>Free shipping on orders over $50!</div>
                                <div className='is-cart-sectiion-right-7-li'>
                                    <ul>
                                        <li>No-Risk,Money Back Guarantee!</li>
                                        <li>No Hassle Refunds</li>
                                        <li>Secure Payments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='is-accordian-section'>
                        <AccordionComponent className="acc-sec-start" />
                    </div>
                    <div className='is-cart-section'>
                        <div className='cart-container'>
                            <Cart3
                                image={"/src/images/hcart7.jpg"}
                                name="BOO-TIFUL BUTTERCOOKIES"
                                price="$21.00"

                            />
                            <Cart3
                                image={"/src/images/hcart8.jpg"}
                                name="Ghosty Gingersnaps"
                                price="$21.00"

                            />
                            <Cart3
                                image={"/src/images/hcart9.jpg"}
                                name="Zombie Zest Cookies"
                                price="$21.00"

                            />

                        </div>
                    </div>

                    <Footer/>

                </div>

            </div>
        </>
    )
}

export default innershop
