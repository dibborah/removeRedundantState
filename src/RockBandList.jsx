import { useState } from "react";
import RockBand from "./RockBand";

const RockBandList = () => {
  const [rockBands, setRockBands] = useState([
    { name: "weekend", id: 1 },
    { name: "arijit", id: 2 },
    { name: "taylor", id: 3 },
    { name: "ed", id: 4 },
    { name: "circels", id: 5 },
    { name: "post", id: 6 },
    { name: "eminem", id: 7 },
    { name: "wiz ", id: 8 },
    { name: "justin", id: 9 },
    { name: "charlie ", id: 10 },
  ]);
  const handleAddRockBand = () => {
    const newRockBand = {
      id: crypto.randomUUID(),
      name: "New RockBand",
    };
    setRockBands((prevRockBand) => {
      return [...prevRockBand, newRockBand];
    });
  };
  return (
    <ol>
      {rockBands.map((rockBand) => {
        return <RockBand name={rockBand.name} key={rockBand.id}/>;
      })}
      <button onClick={handleAddRockBand}>Add Rock Band</button>
    </ol>
  );
};

export default RockBandList;
