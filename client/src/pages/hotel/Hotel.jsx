import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from  '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer'

import './Hotel.css';

const Hotel = () => {

  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false);

  const photos=[
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1585128792020-803d29415281?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80"
    },
  ]

  const handleOpen=(i)=>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction === 'l'){
      newSlideNumber=slideNumber === 0 ?5:slideNumber-1
    }
    else{
      newSlideNumber=slideNumber === 5 ?0:slideNumber+1
    }

    setSlideNumber(newSlideNumber)

}
  return (
    <div>
      <Navbar/>
      <Header type="list"/>

      <div className="hotelContainer">
      {open && <div className="slider">
      <i className="fa-solid fa-circle-xmark" className="close" onClick={()=>setOpen(false)}></i>
      <i className="fa-solid fa-arrow-left" className="arrow" onClick={()=>handleMove("l")}></i>
      <div className="sliderWrapper">
        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
      </div>
      <i className="fa-solid fa-arrow-right" className="arrow" onClick={()=>handleMove("r")}></i>
      </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
          <i className="fa-solid fa-location-dot"></i>
          <span>Elton St 125 Dubai</span>
          </div>
          <span className="hotelDistance">Excellent Location - 500m from Center</span>
          <span className="hotelPriceHighlight">Book a stay over &#8377; 4500 /- at this property and get a free airport taxi</span>
          <div className="hotelImages">
            { photos.map((photo,i)=>{
              return(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg"/>
              </div>
              )
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, massa ac suscipit iaculis, orci mauris tempus nisl, eget euismod neque ligula sed mi. Suspendisse vel gravida odio, eu accumsan ex. Vestibulum at nibh ante. Curabitur sed malesuada felis. Ut vehicula sollicitudin diam. Nunc auctor purus eu libero malesuada elementum. Nulla rhoncus elementum massa, non pulvinar nisi laoreet in. Suspendisse finibus blandit nisl. Nullam lorem nisi, bibendum a leo ac, dapibus consectetur neque. Mauris sit amet magna in lectus finibus volutpat.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-Night stay</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellent location score of 9.5
              </span>
              <h2>
                <b>&#8377; 4500 /- </b>(9 Nights)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div> 
        </div>
        <MailList/>
    <Footer />
      </div>     
    </div>
  )
}

export default Hotel
