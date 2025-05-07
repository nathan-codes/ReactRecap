import React, { useState } from 'react'

function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const toggleEmoji = () => {
        setIsHappy(!isHappy);
    }
  return (
    <div>
          <h1>{isHappy?"😊":"😍"}</h1>
          <button onClick={toggleEmoji}>Change emotion</button>

    </div>
  );
}

export default Toggler
