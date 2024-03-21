import React, { useState } from 'react'
import Header from '../components/Header'
import Cart3 from '../components/cart3'
import Footer from '../components/footer'
import Dropdown from 'react-bootstrap/Dropdown';


function Shop() {
  const [products, setProducts] = useState([{
    id:1,
    image:"/src/images/hcart7.jpg",
    name:'BOO-TIFUL BUTTERCOOKIES',
    price:"21.00"
  },
  {
    id:2,
    image:"/src/images/hcart8.jpg",
    name:'Zombie Zest Cookies',
    price:"21.00"
},
  {
    id:3,
    image:"/src/images/hcart7.jpg",
    name:'BOO-TIFUL BUTTERCOOKIES',
    price:"21.00"
},
{
  id:4,
  image:"/src/images/hcart8.jpg",
  name:'Ghosty Gingersnaps',
  price:"21.00"
},
])
  return (
    <>
      <Header />
      <div className='shop-main'>
        <div className='shop-heading creepster-regular'><h2>SHOP</h2></div>
        <div className='cart-section'>
          <div className='cart-section-top'>
            <div className='cart-section-top-left'>Showing all 9 results</div>
            <div className='cart-section-top-right'>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Filter By
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="dropdown-item" href="#/action-1">Sort By Popularity</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" href="#/action-2">Sort By Cost</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" href="#/action-3">Sort By Latest</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className='cart-section-main'>

            <div className='cart-container'>
              {
                products.map(product=>(
                  <Cart3
                  key={product.id}
                    image={product.image}
                    name={product.name}
                    price={`Rs.${product.price}`}
    
                  />
                ))
              }
            </div>

            {/* <div className='cart-container'>
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

            </div> */}

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Shop