import React, { useState } from "react";
import "./ColorBox.css";

function ColorBox({ colorList }) {
  const randomColorGenerator = (colors) => {
    const randIndex = Math.floor(Math.random() * colors.length) + 1;
    return colors[randIndex];
  };


  const changeColor = (c) => {
    setColor(randomColorGenerator(c))
  }

  const [color, setColor] = useState(randomColorGenerator(colorList));

  return (
    <div
      onClick={()=>changeColor(colorList)}
      className="ColorBox"
      style={{ backgroundColor: color }}
    >


      
    </div>
  );
}

export default ColorBox;
