import React from 'react';


const TextBanner = ( props) => {
  return (
    <div className='banner-container'>
      <div className='banner-image'  style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <div className='banner-text'>
          <div className='banner-text-h4 roboto-regular'>{props.banner_h4}</div>
          <div className='banner-text-h1 creepster-regular'>{props.banner_first_h1}</div>
          <div className='banner-text-h1 creepster-regular'>{props.banner_second_h1}</div>
          <div className='banner-text-btn red-btn roboto-regular'>Shop Now</div>
          <p className='banner-text-p roboto-regular'>{props.banner_p}

          </p>
        </div>
      </div>
    </div>
  )
}

export default TextBanner