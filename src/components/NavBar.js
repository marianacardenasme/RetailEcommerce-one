import React from 'react'
import './NavBar.css'
import { Container } from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import items from '../items.json'
import { useState, useEffect } from 'react'
import { auth } from '../Firebase'
import Searchbar from './Searchbar'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const uniqueCategories = [...new Set(items.products.map(product => product.category))]
  const uniqueCollections = [...new Set(items.products.map(product => product.collection))]
  const [toggle, setToggle] = useState(false);
  
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  
  const navigate = useNavigate();

  const checkProfile = () => {
    navigate(user ? "/profile" : "/login");
  };

  return (
    <Container fluid className='navbarcontainer'>
      <Container className="d-flex justify-content-between">
        <div className='d-flex flex-row'>
          <div className='navbar-icons dropdown'>
            <button className="menubutton" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <svg  xmlns="http://www.w3.org/2000/svg" className="bi bi-list icon" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            </button>
            <ul className="dropdown-menu menudropdown">
              <li><h6 className="dropdown-header">Categorías</h6></li>
              <div className='category-div'>
                {uniqueCategories.map(category => (
                  <li key={category}><Link className="dropdown-item" to={`/category/${category}`} key={category}>{category}</Link></li>
                ))}
              </div>
              <li><hr className="dropdown-divider"/></li>
              <li><h6 className="dropdown-header">Colecciones</h6></li>
              <div className='category-div'>
                {uniqueCollections.map(collection => (
                  <li key={collection}><Link className="dropdown-item" to={`/collection/${collection}`} key={collection}>{collection}</Link></li>
                ))}
              </div>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item special-prices" to={"/"} key={"specialprices"}>Precios especiales</Link></li>
            </ul>
          </div>
          <Link to="/">
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png' alt='LOGO'/>
          </Link>
        </div>
        <div>
          <Searchbar />
        </div>
        <div className='d-flex flex-row'>
          <div className='searchbtn-toggle'>
            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-search icon" viewBox="0 0 16 16" onClick={() => setToggle(!toggle)}>
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </div>
          <button onClick={checkProfile} className='iconspace'>
            <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-person icon" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
          </button>
          <button className='iconspace'>
            <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-suit-heart icon" viewBox="0 0 16 16">
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
            </svg>
          </button>
          <button className='iconspace'>
            <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-bag icon" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
          </button>
        </div>
      </Container>
      {toggle && (
        <Container>
          <div className="input-group">
            <input 
              type="text" 
              className="form-control py-1 searchbar" 
              placeholder="Buscar producto" 
              aria-label="Buscar producto" 
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text py-1 searchbar-btn" id="basic-addon2">
              <BsSearch className='fs-10'/>
            </span>
          </div>
        </Container>
      )}
    </Container>

  )
}

export default NavBar