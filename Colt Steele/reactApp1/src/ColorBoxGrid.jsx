import React from 'react'
import ColorBox from './ColorBox'

const ColorBoxGrid = ({colors, boxNum}) => {


    const boxes = new Array(boxNum)
  return (
    <div style={{width:"1000px", display:'flex', flexWrap:"wrap"}}>
      {boxes.map((box,index)=> <ColorBox key={index} colors={colors} /> )}
    </div>
  )
}

export default ColorBoxGrid
