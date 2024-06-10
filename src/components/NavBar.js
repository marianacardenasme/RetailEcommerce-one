import React from 'react';
import './NavBar.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'

const NavBar = () => {
  return (
    <Container fluid className='navbarcontainer'>
      <Container className="d-flex">
        <div className='navbar-icons col-1 dropdown'>
          <button className="menubutton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg  xmlns="http://www.w3.org/2000/svg" width="2rem" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
          <ul className="dropdown-menu menudropdown p-3 margin-top-4">
            <li><h6 class="dropdown-header">Productos permanentes</h6></li>
            <li><a className="dropdown-item" href="/home">Action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/home">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><h6 class="dropdown-header">Productos de temporada</h6></li>
            <li><a className="dropdown-item" href="/home">Something else here</a></li>
          </ul>
        </div>
        <div className="col-2">
          <Link to="/home">
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png' alt='LOGO'/>
          </Link>
        </div>
        <div className='col-7'>
          <div className="input-group">
            <input 
              type="text" 
              className="form-control py-1" 
              placeholder="Buscar producto" 
              aria-label="Buscar producto" 
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text py-1" id="basic-addon2">
              <BsSearch className='fs-10'/>
            </span>
          </div>
        </div>
        <div className='col-2 d-flex justify-content-between'>
          <Link to="/productDetails" className='navbar-icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem"  class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
          </Link>
          <Link to="/productDetails" className='navbar-icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem"  class="bi bi-suit-heart" viewBox="0 0 16 16">
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
            </svg>
          </Link>
          <Link to="/productDetails" className='navbar-icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem"  class="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
          </Link>

        </div>
      </Container>
    </Container>

  )
}

export default NavBar