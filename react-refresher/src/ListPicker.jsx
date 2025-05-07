function ListPicker({ list }) {
    const randIdx = Math.floor(Math.random() * list.length) + 1
    const randomNumber = list[randIdx];
    

  return (
      <div>
          <p> {list}</p>
          <p> Random Number: {randomNumber}</p>
    </div>
  )
}

export default ListPicker
