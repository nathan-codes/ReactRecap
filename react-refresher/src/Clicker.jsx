import React from 'react'
function handlleClick() {
    console.log("clicked button")
}


function Clicker({message}) {
  return (
    <div>
      <button onClick={handlleClick}> {message} </button>
    </div>
  )
}

export default Clicker
