import React from 'react'
import './Home.css'
import { HomeCarousel } from '../components/HomeCarousel'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container fluid className='home-container'>
      <HomeCarousel/>
      <Container fluid className="grid-container d-flex flex-row ">
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