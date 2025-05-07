import { useState } from "react";


const ColorBox = ({colors}) => {
       const generateRandomColor = () => {
         const randInt = Math.floor(Math.random() * colors.length);
         const randomColor = colors[randInt];
         return randomColor;
       };
  
  const [boxColor, setBoxColor] = useState(generateRandomColor);


  const handleSwitchColor = ()=> {
    setBoxColor(generateRandomColor())
  }
 
  return (
    <div
      onClick={handleSwitchColor}
      style={{
        width: "140px",
        height: "140px",
         backgroundColor: boxColor,
        cursor: "pointer",
      }}
    ></div>
  );
};

export default ColorBox;
