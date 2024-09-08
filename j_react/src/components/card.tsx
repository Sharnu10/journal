import { CardData, CardProps } from "../types/cardTypes";

export default function Card({ cardData, cardStyle }: CardProps) {
  const getPriorityColor = (cardData: CardData): string => {
    return `card-header priority-${cardData.priority}`;
  };

  return (
    <div className="card m-1" style={{ width: cardStyle.width }}>
      <div className={getPriorityColor(cardData)}> {cardData.headerText}</div>

      <div className="card-body">
        <div className="d-flex justify-content-around">
          <h5 className="card-title">{cardData.title}</h5>

          <button className="btn btn-primary">Add</button>
        </div>

        <hr />

        <p className="card-text">{cardData.description}</p>
      </div>
    </div>
  );
}
