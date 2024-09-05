import { useEffect, useState } from "react";

import "../styles/utility.scss";

export default function Card({ cardData, cardStyle }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getPriorityColor = (cardData) => {
    return `card-header priority-${cardData.priority}`;
  };

  const apiUrl = "http://localhost:3003/api/card";

  useEffect(() => {
    setLoading(true);

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data) return <div>{JSON.stringify(data, null, 2)}</div>;

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
