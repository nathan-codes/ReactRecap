import React from "react";

const Clicker = ({ message, buttonText }) => {
  const handleButtonClick = () => {
    alert(message);
  };
  return <button onClick={handleButtonClick}>{buttonText}</button>;
};

export default Clicker;
