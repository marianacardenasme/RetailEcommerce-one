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
      {product.products.map(({ name, price, pictures, picture2 }) => (
        <Link className="prdcard" key={name} to={`/${name}`}>
          <div className='picture-container'>
            <div className='picture-one'>
              <img src={pictures[0]} alt={name} className='picture'/>
            </div>
            <div className='picture-two'>
              <img src={pictures[1]} alt={name} className='picture'/>
            </div>
          </div>
          <h3 className='prdname'>{name}</h3>
          <h4 className='prdprice'>{price}</h4>
        </Link>
      ))}
    </Container>
  )
}

export default ProductCard