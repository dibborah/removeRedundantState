import { useState } from "react";

function generateArray() {
  console.log("generateArray fc called");
  const randonArray = [];
  for (let i = 0; i < 10; i++) {
    randonArray.push(Math.random() * 100);
  }
  return randonArray;
}

function SetInitialStateWithFunction() {

    // This generateArray set initial state fc is called only once
    // After setting the state for the first time it is never ever called again
    // You have to refresh the page in order to call the fc again which just PROVES the point
  const [nums, setNums] = useState(generateArray);

  // Note: Is tarah hum ek fc use kar skte hain hamare initial state ko set karne ke liye


  const handleAdd = () => {
    setNums((prevState) => {
      return [...prevState, Math.random() * 100];
    });
  };
  return (
    <ul>
      {nums.map((num) => {
        return <li>{num}</li>;
      })}
      <button onClick={handleAdd}>Add Random num</button>
    </ul>
  );
}

export default SetInitialStateWithFunction;
