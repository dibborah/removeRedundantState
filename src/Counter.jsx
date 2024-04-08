import { useState } from "react";
import ShowCountValue from "./ShowCountValue";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  // #Note: setState is async
  return (
    <div>
      <h1>Count: <ShowCountValue count={count}/></h1>
      <button onClick={handleIncrease}>Increase Count</button>
    </div>
  );
};

export default Counter;
