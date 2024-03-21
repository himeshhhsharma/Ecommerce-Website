import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TextBanner2 = (props) => {
    return (
        <>
            <div className='TextBanner2-container'>
                <div className='TextBanner2image' style={{ backgroundImage: `url(${props.backgroundImage})` }}>
                    <div className='TextBanner2text'>
                        <div className='TextBanner2text-h4 roboto-regular'>{props.h4}</div>
                        <div className='cart-rating'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className='TextBanner2text-rating'></div>
                        <div className='TextBanner2text-text creepster-regular'>{props.text}</div>
                        <img className='TextBanner2text-avatar' src={props.avatar} alt="" />
                        <div className='TextBanner2text-avatar-name'>{props.avatarname}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextBanner2