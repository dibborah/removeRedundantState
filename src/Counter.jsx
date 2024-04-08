import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    // const nextCount = count + 1
    // console.log("Function called");
    // setCount(nextCount);
    // console.log(nextCount);
    setCount((prevState) => {
      console.log("setCount called 1");
      return prevState + 3;
    });
    // setCount((prevState) => {
    //   console.log("setCount called 2");
    //   return prevState + 1;
    // });
    // setCount((prevState) => {
    //   console.log("setCount called 3");
    //   return prevState + 1;
    // });
  };

  // #Note: setState is async
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase Count</button>
    </div>
  );
};

export default Counter;
