import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const HomeCarousel = () => {
  return (
    <Carousel className='home-carousel'> 
        <Carousel.Item interval={3000}> 
          <Link to="/productdetails" className='carousel-text'>
            <img className="d-block w-100" src={require("../images/home/carousel-img1.png")} alt="One" /> 
          </Link> 
        </Carousel.Item> 
        <Carousel.Item interval={3000}> 
          <Link to="/productdetails" className='carousel-text'>
            <img className="d-block w-100" src={require("../images/home/carousel-img2.png")} alt="Two" /> 
          </Link> 
        </Carousel.Item> 
        <Carousel.Item interval={3000}> 
          <Link to="/productdetails" className='carousel-text'>
            <img className="d-block w-100" src={require("../images/home/carousel-img3.png")} alt="three" /> 
          </Link> 
        </Carousel.Item> 
    </Carousel>
  )
}
