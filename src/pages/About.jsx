import React from 'react'
import Header from '../components/Header'
import TextBanner2 from '../components/TextBanner2'
import Footer from '../components/footer'

const About = () => {
    return (
        <>
            <Header />
            <div className='about-main display-flex-row'>
                <div className='about-box'>
                    <div className='about-box-top'>
                        <h3 className='about-box-top-h3 roboto-regular'>A FEW WORDS</h3>
                        <h1 className='about-box-top-h1 creepster-regular'>ABOUT US</h1>
                    </div>
                    <div className='about-box-main'>
                        <div className='about-box-main-left'>
                            <h1 className='creepster-regular'> Our journey began with a shared love for this bewitching season</h1>
                        </div>
                        <div className='about-box-main-right'>
                            <div className='about-box-main-right-content border-btm'>
                                <p className='about-left-p1 creepster-regular'>
                                    Our journey began with a shared passion for all things Halloween, from the thrill of dressing up in spooky costumes to the joy of decorating our homes with enchanting decorations and indulging in sweet treats that make the season truly special.
                                </p>
                                <p className='about-left-p2 roboto-regular'>Our team of Halloween enthusiasts and connoisseurs has scoured the realms of costumes, decorations, and confections to bring you a handpicked selection of the finest and most bewitching items. Each costume we offer has been chosen to ignite your imagination and make your Halloween dreams a reality. Our decorations are designed to transform your space into a haunted wonderland, and our delectable sweets are chosen to tantalize your taste buds and add a sweet touch to your celebrations. Our shop is your trusted partner in embracing the spirit of Halloween, and we're here to make sure your Halloween is filled with thrills, chills, and unforgettable moments. Join us as we celebrate the magic, creativity, and enchantment that Halloween has to offer.

                                </p>
                            </div>
                            <div className='about-box-main-right-content '>
                                <p className='about-left-p1 creepster-regular'>
                                    As devoted Halloween aficionados ourselves, we understand the importance of finding the perfect costume that transforms you into your favorite character.
                                </p>
                                <p className='about-left-p2 roboto-regular'>We curate a handpicked selection of costumes, decorations, and sweets that capture the essence of Halloween, ensuring that you can create spooktacular memories and embrace the magic of this bewitching holiday. Whether you're preparing for the most epic Halloween party, looking for a special treat, or simply reveling in the joy of the season, our online shop is your trusted partner in making Halloween unforgettable. Join us in celebrating this timeless holiday, and let's embark on a thrilling journey into the enchanting world of Halloween together.

                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <TextBanner2
                backgroundImage={"/src/images/banner4.jpg"}
                h4="TESTIMONIALS"
                text='"Every item I purchased, from a wickedly realistic witch`s hat to eerie decorations, exceeded my expectations. My Halloween celebrations have reached a whole new level of spooky fun. I`m already looking forward to next year`s shopping spree!"'
                avatar={"/src/images/avatar1.jpg"}
                avatarname="Jane Warren"

            />
            <Footer/>
        </>
    )
}

export default About