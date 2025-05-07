export default function ListPicker({ values }) {
  const randIdx = Math.floor(Math.random() * values.length);
  const randomElement = values[randIdx]
  console.log("Random E", randomElement)
  return (
    <div>
      <p>The random Element is {randomElement}</p>
      <p>The list of values is: {values}</p>
    </div>
  );
}
