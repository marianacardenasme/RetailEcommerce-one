import React from 'react'
import '../components/ProductCard.css'
import items from '../items.json'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Category = () => {
  const { categoryName } = useParams()
  const filteredProducts = items.products.filter(({ category }) => category === categoryName)

  return (
    <Container fluid className='d-flex flex-column'>
      <h1 className='category-title'>{categoryName}</h1>
      <div className='prdcard-container'>
        {filteredProducts.map(({ name, price, pictures }) => (
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
      </div>
    </Container>
  )
}

export default Category
