import React, { useState, useEffect } from 'react'
import items from '../items.json'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'

const ProductDetails = () => {
  let [ProductDetails, setProductDetails] = useState([])
  const { name } = useParams()
  const [activeSize, setActiveSize] = useState(null);

  useEffect(() => {
    const findProduct = () => {
      const newProduct = items.products.find((product) => product.name === name)
      setProductDetails(newProduct)
      console.log(newProduct)
    }

    findProduct()
  }, [name])

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  return (
    <div className='prd-details-container'>
      <div className='pictures-container'>
        {ProductDetails.pictures && ProductDetails.pictures.map((picture) => (
          <img src={picture} alt={ProductDetails.name} className='prdpicture'/>
        ))}
      </div>
      <div className='info-container'>
        <h1 className='prdname'>{name}</h1>
        <h3 className='prdprice'>{ProductDetails.price}</h3>
        <p className='prdsizes'>Tallas disponibles</p>
        <div className='sizes-container'>
          {ProductDetails.sizes && ProductDetails.sizes.map((size) => (
            <button key={size}
            className={`size-button ${activeSize === size ? 'active' : ''}`}
            onClick={() => handleSizeClick(size)}>{size}</button>
          ))}
        </div>
        <button type='submit' className='addtocart-button'>AGREGAR AL CARRITO</button>
      </div>
    </div>
  )
}

export default ProductDetails