import React from "react";
import Property from "./Property";
import "./PropertyList.css"

function PropertyList({ properties }) {
    return (
        
      <section className="PropertyList">
        {properties.map((item) => (
          <div key={item.id}>
                <Property properties={item} />
          </div>
        ))}
      </section>
    );
}

export default PropertyList;
