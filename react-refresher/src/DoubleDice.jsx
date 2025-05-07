

function DoubleDice() {
    const num1 = Math.floor(Math.random() * 6)+1
    const num2 = Math.floor(Math.random() * 6)+1

    const style = {color:num1===num2?"green":"red"}

    return (
    <div style={style}>
          {/* {num1 === num2 && <h2>You win </h2>}
          <p>{num1}</p>
          <p>{num2}</p> */}

          <h2>Double Dice </h2>
          {num1 === num2 && <h3>You win</h3> }
          
          <p>{num1}</p>
          <p>{num2}</p>
    </div>
  )
}

export default DoubleDice
