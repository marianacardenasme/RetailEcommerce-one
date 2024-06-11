import React from 'react'
import './HomeCarousel.css'
import { Carousel, CarouselCaption } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const HomeCarousel = () => {
  return (
    <Carousel> 
        <Carousel.Item interval={3000}> 
          <Link to="/productdetails" className='carousel-image-container'>
            <img className="carousel-image" src="https://images.pexels.com/photos/6617686/pexels-photo-6617686.jpeg" alt="One" />
            <CarouselCaption className='caption'>Novedades</CarouselCaption>
          </Link> 
        </Carousel.Item> 
        <Carousel.Item interval={3000}> 
          <Link to="/productdetails">
            <img className="carousel-image" src="https://sewing.com/wp-content/uploads/2020/01/woman-in-grey-jacket-winter-clothing-px-featured.jpg" alt="One" />
            <CarouselCaption className='caption'>Loungewear</CarouselCaption>
          </Link> 
        </Carousel.Item>
        <Carousel.Item interval={3000}> 
          <Link to="/productdetails">
            <img className="carousel-image" src="https://images.squarespace-cdn.com/content/v1/528e7c71e4b0fe20836f0a7e/27263825-e17f-4772-8557-5176f9ef3a30/becca-tapert-aUfVce9MBx0-unsplash.jpeg" alt="One" />
            <CarouselCaption className='caption'>Infaltables</CarouselCaption>
          </Link> 
        </Carousel.Item>
    </Carousel>

  )
}
