import React, { useState, useEffect } from 'react'
import items from '../items.json'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import ReactImageMagnify from 'react-image-magnify';

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
          <ReactImageMagnify className='pdetails-picture' {...{
            smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: picture
            },
            largeImage: {
                src: picture,
                width: 1200,
                height: 1800,
                enlargedImagePosition: 'over'
            }
          }} />
          
        ))}
      </div>
      <div className='info-container'>
        <h1 className='pdetails-name'>{name}</h1>
        <h3 className='pdetails-price'>{ProductDetails.price}</h3>
        <p className='pdetails-sizes'>Tallas disponibles</p>
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