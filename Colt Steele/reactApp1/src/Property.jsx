import React from "react";

const Property = ({ name, price, rating }) => {
  return (
    <div>
      <h2> {name}</h2>
      <h3> ${price} per night </h3>
      <h4> {rating} ⭐ </h4>
    </div>
  );
};

export default Property;
