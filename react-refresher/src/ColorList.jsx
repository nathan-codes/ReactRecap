

function ColorList({ colors }) {
   
  return (
      <div>
          <ul>
              {colors.map((c,index) => <li key={index} style={{color:c}}>{c}</li>  )}
          </ul>
   
    </div>
  )
}

export default ColorList
