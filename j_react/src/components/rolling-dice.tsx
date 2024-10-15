import { useState } from "react";
import Dice from "./dice";

const RollingDice = () => {
  const [face1, setFace1] = useState("one");
  const [face2, setFace2] = useState("one");
  const [roll, setRoll] = useState(false);

  const diceIcons = ["one", "two", "three", "four", "five", "six"];

  const changeDice = () => {
    const face1Rand = randomIntFromInterval(1, 6);
    const face1Str = diceIcons[face1Rand];
    setFace1(face1Str);
    setFace2(diceIcons[randomIntFromInterval(1, 6)]);
    setRoll(true);

    setTimeout(() => {
      setRoll(false);
    }, 1000);
  };

  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="dice-container">
      <div className="d-flex">
        <Dice face={face1} rolling={roll} />
        <Dice face={face2} rolling={roll} />
      </div>

      <button className="btn btn-info centered-button" onClick={changeDice}>
        Roll dice!
      </button>
    </div>
  );
};

export default RollingDice;
