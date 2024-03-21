import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function AccordionComponent() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    reviews: "",
    rating: 3,
  })
  const onChange = (event) => {
    setForm(
      {
        ...formData,
        [event.target.name]: event.target.value
      }
    )
  }
  const returnStar = () => {
    let array = []
    for (let i = 0; i < 5; i++) {
      if (i < formData.rating) {
        array.push(<FontAwesomeIcon icon={faStar} color='white' onClick={() => {
          setForm(
            {
              ...formData,
              rating: i + 1
            }
          )
        }} />)
      }
      else {
        array.push(<FontAwesomeIcon icon={faStar} onClick={() => {
          setForm(
            {
              ...formData,
              rating: i + 1
            }
          )
        }} />)
      }
    }
    return array
  }
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item className='item-acc' eventKey="0">
        <Accordion.Header className='acc-header'>Description</Accordion.Header>
        <Accordion.Body>
          Elevate your Halloween décor game with our captivating decorations that will cast a bewitching spell over your home. From eerie candlelit lanterns that flicker with an otherworldly glow to intricate and spooky wall hangings that set the scene, our decorations are designed to bring your Halloween vision to life. With attention to detail and a touch of the macabre, our curated collection offers an array of options to create an unforgettable Halloween atmosphere. Whether you’re hosting a hauntingly elegant soirée or simply want to immerse yourself in the enchantment of the season, our decorations are here to make your space come alive with the spirit of Halloween
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='acc-header-item'>
        <Accordion.Header className='acc-header'>Reviews</Accordion.Header>
        <Accordion.Body className='accordian-box'>
          <h3>No Reviews Yet</h3>
          <div className='accordian-container'>
            <div className='accordian-main'>
              <div className='accordian-main-r1'>
                <h2 className='accordian-main-r1-h1'>Be the first to review “Paper Pumpkin”
                </h2>
                <h4 className='accordian-main-r1-h4'>Your email address will not be published. Required fields are marked *
                </h4>
              </div>
              <div className='accordian-main-r2'>
                <div className='accordian-main-r2-c1'>Your rating *</div>
                <div className='accordian-main-r2-c2'>

                  {returnStar().map((items) => { return items })}
                </div>
              </div>
              <div className='accordian-main-r3'>
                <div className='accordian-main-r3-c'>
                  <label className='accordian-main-r3-l' for='rname'>Name</label>
                  <input className='accordian-main-r3-i' type="text" name='name' placeholder='Your Name' id='rname' onChange={(e) => { onChange(e) }} />
                </div>
                <div className='accordian-main-r3-c'>
                  <label className='accordian-main-r3-l' for='email'>Email</label>
                  <input className='accordian-main-r3-i' type="text" name='email' placeholder='Your Email' id='rname' onChange={(e) => { onChange(e) }} />
                </div>
              </div>
              <div className='accordian-main-r4'>
                <label className='accordian-main-r4-l' for='review'>Your Review</label>
                <textarea id='review' placeholder='Enter Your Reviews' name='reviews' className='accordian-main-r4-i' onChange={(e) => { onChange(e) }}></textarea>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComponent;