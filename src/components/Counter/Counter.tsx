import { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [val, setVal] = useState(0);

  const increment = () => {
    setVal(val + 1);
  };

  return (
    <div>
      <p>Counter</p>
      <button onClick={increment}>increment</button>
      <h1>{val}</h1>
    </div>
  );
};
