import React from 'react'
import './ProductCard.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from "react"
import items from '../items.json'

const ProductCard = () => {
  const [product] = useState(items)
  return (
    <Container fluid className='prdcard-container'>
      {product.products.map(({ name, price, picture, picture2 }) => (
        <Link className="prdcard" key={name}>
          <div to={`/${name}`} >
            <div className='picture-container'>
              <div className='picture-one'>
                <img src={picture} alt={name} className='picture'/>
              </div>
              <div className='picture-two'>
                <img src={picture2} alt={name} className='picture'/>
              </div>
            </div>
            <h3 className='prdname'>{name}</h3>
            <h4 className='prdprice'>{price}</h4>
          </div>
        </Link>
      ))}
    </Container>
  )
}

export default ProductCard