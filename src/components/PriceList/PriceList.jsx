import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect( () => {
    fetch('prices.json')
    .then(res => res.json())
    .then(data => setPrices(data));
  }, [])

  return (
    <div>
      <h3 className='text-center bg-purple-500 text-pink-200 text-5xl font-bold p-4'>Awesome Price List</h3>
      <div className='grid grid-cols-3 gap-4'>
      {
        prices.map(price => <PriceCard 
        key={price.id}
        price={price}
        ></PriceCard> )
      }

      </div>
      
    </div>
  );
};

export default PriceList;