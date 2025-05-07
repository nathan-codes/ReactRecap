import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
    const changeNum = () => {
        setCount((c)=>c+1 )
    }
    return <div>
        <p> count: {count}</p>
        <button onClick={changeNum}>Increment count</button>
  </div>;
}

export default Counter;
