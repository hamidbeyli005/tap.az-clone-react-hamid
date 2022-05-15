import React from 'react'
import { useParams } from 'react-router-dom';

function Shop() {
  const { shop } = useParams();

  return (
    <div>Shop {shop}
        
    </div>
  )
}

export default Shop