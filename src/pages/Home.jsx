import React from 'react';
import Header from '../components/Header';
import TextBanner from '../components/TextBanner';
import TextBanner2 from '../components/TextBanner2'
import Cart3 from '../components/cart3';
import Footer from '../components/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faLock, faLocationPin } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  
  return (
    <>
      <Header />
      <TextBanner
        backgroundImage={"/src/images/banner1.png"}
        banner_h4="NEW COLLECTION"
        banner_first_h1="Halloween"
        banner_second_h1="Decoration"
        banner_p="Whether you prefer the charm of classic Halloween decor or the thrill of modern and innovative designs, these decorations invite you to join in the celebration of all things eerie, enigmatic, and enchanting."
      />
      <div class="most-delecious-section border-btm">
        <div class="most-delecious-section-heading">
          <div class="most-delecious-section-heading-h4 roboto-regular">MOST DELICIOUS</div>
          <div class="most-delecious-section-heading-h1 creepster-regular">Candies & Cookies</div>
        </div>
        <div className='cart-container'>
          <Cart3
            image={"/src/images/hcart1.jpg"}
            name="BOO-TIFUL BUTTERCOOKIES"
            price="$21.00"

          />
          <Cart3
            image={"/src/images/hcart2.jpg"}
            name="Ghosty Gingersnaps"
            price="$21.00"

          />
          <Cart3
            image={"/src/images/hcart3.jpg"}
            name="Zombie Zest Cookies"
            price="$21.00"

          />

        </div>

      </div>
      <div className='sweets-section border-btm'>
        <div class="most-delecious-section-heading">
          <div class="most-delecious-section-heading-h4 roboto-regular">SWEETS</div>
          <div class="most-delecious-section-heading-h1 creepster-regular">Halloween Candy Packs</div>
        </div>
        <div className='sweets-section-container'>
          <div className='sweets-section-container-left'>
            <h2 className='creepster-regular'>a sprinkle of magic to every trick-or-treat adventure
            </h2>
            <p className='roboto-regular'>From the classic to the creatively creepy, Halloween candies remind us that the true essence of this holiday lies in the delightful experience of indulging in sweet surprises with friends and family.</p>
            <div className='red-btn'><a href="#">Shop Now</a></div>
          </div>

          <div className='sweets-section-container-right'></div>
        </div>
      </div>
      <div className='scarry-section'>
        <div class="most-delecious-section-heading">
          <div class="most-delecious-section-heading-h4 roboto-regular">Scarry</div>
          <div class="most-delecious-section-heading-h1 creepster-regular">Decorations</div>
        </div>
        <div className='cart-container'>
          <Cart3
            image={"/src/images/hcart4.jpg"}
            name="Ghosty Gingersnaps"
            price="$21.00"

          />
          <Cart3
            image={"/src/images/hcart5.jpg"}
            name="Ghosty Gingersnaps"
            price="$21.00"

          />
          <Cart3
            image={"/src/images/hcart6.jpg"}
            name="Zombie Zest Cookies"
            price="$21.00"

          />
        </div>

      </div>
      <TextBanner
        backgroundImage={"/src/images/banner2.jpg"}
        banner_h4="NEW COLLECTION"
        banner_first_h1="Ceramic Halloween"
        banner_second_h1="Decorations"
        banner_p="From intricately designed ceramic pumpkins with whimsical smiles to hauntingly beautiful ceramic witch figurines, these decorations serve as captivating focal points in any Halloween display."
      />
      <div className='costumes-section'>
        <div class="most-delecious-section-heading">
          <div class="most-delecious-section-heading-h4 roboto-regular">MOST DELICIOUS</div>
          <div class="most-delecious-section-heading-h1 creepster-regular">Candies & Cookies</div>
        </div>
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

      <TextBanner2
        backgroundImage={"/src/images/darkbanner3.jpg"}
        h4="TESTIMONIALS"
        text='"Every item I purchased, from a wickedly realistic witch`s hat to eerie decorations, exceeded my expectations. My Halloween celebrations have reached a whole new level of spooky fun. I`m already looking forward to next year`s shopping spree!"'
        avatar={"/src/images/avatar1.jpg"}
        avatarname="Jane Warren"

      />

      <div className='delivery-section'>
        <div className='delivery-section-content'>
          <div className='delivery-section-content-col'>
            <div className='delivery-section-logo'><FontAwesomeIcon icon={faTruck} /></div>
            <div className='delivery-name creepster-regular'>Free Shipping
            </div>
            <div className='delivery-text roboto-regular'>
              Enjoy the treat of free shipping on all your Halloween must-haves
            </div>


          </div>
          <div className='delivery-section-content-col'>
            <div className='delivery-section-logo'><FontAwesomeIcon icon={faLock} /></div>
            <div className='delivery-name creepster-regular'>Secure Payments
            </div>
            <div className='delivery-text roboto-regular'>
              Shop with confidence knowing that your payments are securely processed for a worry-free Halloween experience
            </div>
          </div>
          <div className='delivery-section-content-col'>
            <div className='delivery-section-logo'><FontAwesomeIcon icon={faLocationPin} /></div>
            <div className='delivery-name creepster-regular'>Order Tracking
            </div>
            <div className='delivery-text roboto-regular'>
              Stay in the know with real-time order tracking to ensure your Halloween treasures arrive right on time
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home;