import { useState } from "react";
import * as styles from "./Counter.module.scss";

const Counter = () => {
  const [val, setVal] = useState(0);

  const increment = () => {
    setVal(val + 1);
  };

  return (
    <div>
      <button onClick={increment}>increment</button>
      <h1 className={styles.title}>{val}</h1>
    </div>
  );
};

export default Counter;
