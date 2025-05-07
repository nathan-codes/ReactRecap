import React from "react";
import Property from "./Property";

const PropertyList = ({ properties }) => {
  return <div style={{display:"flex", gap:"10px"}}>
    {
        properties.map((property)=> <Property key={property.id} {...property} />)
    }
  </div>;
};

export default PropertyList;
