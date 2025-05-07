import React from 'react'
import ColorBox from './ColorBox'
import "./ColorGrid.css"

function ColorGrid({ colorList,numBoxes }) {
    const boxes = [];
    for (let i = 0; i <= 25; i++){
         boxes.push(<ColorBox colorList={colorList} />);
    }


  return (
      <div className='ColorGrid'> 
          

  {boxes}
    </div>
  );
}

export default ColorGrid
