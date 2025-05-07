import React from 'react'

function Property({properties}) {
  return (
    <div>
     

     
        <div key={properties.id}>
          <h2>{properties.name}</h2>
          <h3>${properties.price} a night</h3>
          <h4>${properties.price} ⭐</h4>
        </div>

    </div>
  );
}

export default Property
