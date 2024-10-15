import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

import "../styles/dice.scss";

interface DiceProps {
  face: string;
  rolling: boolean;
}

const Dice: FC<DiceProps> = ({ face = "one", rolling }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={["fas", `dice-${face}` as any]}
        size="lg"
        className={`dice ${rolling ? "dice-shaking" : ""}`}
      />
    </div>
  );
};

export default Dice;
