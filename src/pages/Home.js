import React from 'react'
import './Home.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HomeCarousel } from '../components/HomeCarousel'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <Container fluid className='home-container'>
      <HomeCarousel/>
      <h1 className='title'>Recomendados para ti</h1>
      <ProductCard />
      <Container fluid className="grid-container">
        <div className='grid-bigpicture'>
          <Link to="/productdetails" className='grid-link-2'>
            <img className='grid-image' src={require("../images/home/winter_sweaters.png")} alt='winter'/>
            <div className='inner-grid-bigpicture'>
              <h2 className='big-inner-text'>Sweaters</h2>
            </div>
          </Link>
        </div>
        <div>
          <div className='grid-smallpicture d-flex flex-col'>
            <Link to="/productdetails" className='grid-link-2'>
              <img className='grid-image' src={require("../images/home/gorros.jpg")} alt='winter'/>
              <div className='inner-grid-smallpicture'>
                <h2 className='small-inner-text'>Gorros</h2>
              </div>
            </Link>
          </div>
          <div className='grid-smallpicture d-flex flex-col'>
            <Link to="/productdetails" className='grid-link-2'>
              <img className='grid-image' src={require("../images/home/guantes.jpg")} alt='winter'/>
              <div className='inner-grid-smallpicture'>
                <h2 className='small-inner-text'>Guantes</h2>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Home