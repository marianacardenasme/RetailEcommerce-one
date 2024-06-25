import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../items.json';
import '../components/ProductCard.css'

const Results = () => {
  const { inputvalue } = useParams();
  const filteredData = data.products.filter((val) =>
    val.name.toLowerCase().includes(inputvalue.toLowerCase()) ||
    val.category.toLowerCase().includes(inputvalue.toLowerCase()) ||
    val.collection.toLowerCase().includes(inputvalue.toLowerCase())
  );

  return (
    <div className="results-container">
      <h1 className='search-result-title'>Resultados para "{inputvalue}"</h1>
      <div className="prdcard-container">
        {
          filteredData.map((val) => {
            return(                  
              <div className="prdcard" key={val.id}>
                <div className='picture-container'>
                  <div className='picture-one'>
                    <img src={val.pictures[0]} alt={val.name} className='picture'/>
                  </div>
                  <div className='picture-two'>
                    <img src={val.pictures[1]} alt={val.name} className='picture'/>
                  </div>
                </div>
                <h3 className='prdname'>{val.name}</h3>
                <h4 className='prdprice'>{val.price}</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Results;
