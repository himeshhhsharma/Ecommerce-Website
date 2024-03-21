import React from 'react'
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Cart3 = (props) => {
    const navigate = useNavigate();
    return (

        <div className='cart' onClick={() => { navigate("/innershop") }}>
            <div className='cart-image'>
                <div className='small-cart-hover'>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <img src={props.image} alt="" />
            </div>
            <div className='cart-rating'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <h3 className='cart-name creepster-regular'>{props.name}</h3>
            <h3 className='cart-price roboto-regular'>{props.price}</h3>
            <div className='cart-btn red-btn'>ADD TO CART</div>
        </div>

    )
}

export default Cart3



// Then, within your component:
