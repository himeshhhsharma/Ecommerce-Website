import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer'
import FormPage from '../components/FormPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <Header />
      <div className='contact-heading'>
        <h4 className='roboto-regular'>GET IN TOUCH</h4>
        <h1 className='creepster-regular'>Contact</h1>
      </div>
      <div className='contact-page-main display-flex-row'>
        <div className='contact-page-container'>
          <div className='contact-page-container-left'>
            <div className='contact-page-container-left-heading'>
              <h1 className='creepster-regular'>
                Let's Talk
              </h1>
              <p className='roboto-regular'>
                Let's Talk
                We're here to assist you in every way possible, so don't hesitate to reach out with any questions or feedback.
              </p>
            </div>
            <div className='contact-page-container-left-form'>
              <FormPage/>
            </div>
            
          </div>

          <div className='contact-page-container-right'>
            <div className='contact-page-container-right-top border-btm'>
              <div className='contact-page-container-right-top-fa'>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className='contact-page-container-right-top-add'>2972 Westheimer Rd. Santa Ana, Illinois 85486
              </div>
              <div className='contact-page-container-right-top-link'>GET DIRECTIONS</div>

            </div>
            <div className='contact-page-container-right-btm'>
              <div className='contact-page-container-right-btm-f'>
                <div className='contact-page-container-right-top-fa'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className='contact-page-container-right-btm-f-name creepster-regular'>Email</div>
                <div className='contact-page-container-right-btm-f-details roboto-regular'>hello@example.com</div>
              </div>
              <div className='contact-page-container-right-btm-s'>
              <div className='contact-page-container-right-top-fa'>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className='contact-page-container-right-btm-f-name creepster-regular'>Phone</div>
                <div className='contact-page-container-right-btm-f-details roboto-regular'>(405) 555-0128</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

    </>
  )
}

export default Contact