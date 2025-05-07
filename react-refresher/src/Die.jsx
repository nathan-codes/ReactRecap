import "./Die.css"


function Die({ numSides=6 }) {
  const randomDieRoll = Math.floor(Math.random() * numSides) + 1;

  return (
    <div className="Die">
          <h2> {numSides}-sided Die Roll: {randomDieRoll}</h2>
    </div>
  );
}

export default Die
