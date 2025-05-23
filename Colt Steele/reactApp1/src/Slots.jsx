import React from "react";

const Slots = ({ val1, val2, val3 }) => {
  const isWinner = val1 === val2 && val1 == val3;
  return (
    <div>
      <h1>
        {" "}
        {val1} {val2} {val3}
      </h1>
      <h2 style={{color:isWinner?"green":"red"}}>{isWinner ? "You Win" : "You Loose"}</h2>

      <h3>{isWinner && "Congrats"}</h3>
    </div>
  );
};

export default Slots;
