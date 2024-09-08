import React, { useEffect, useState } from "react";
import Card from "./card";
import { CardData, CardStyle } from "../types/cardTypes";
import { fetchCardData } from "../api/cardApi";

export default function Tasks() {
  const [cardData, setData] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const style: CardStyle = {
    width: "19rem",
  };

  useEffect(() => {
    setLoading(true);

    fetchCardData()
      .then((responseData) => {
        setData(responseData.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>Tasks: 2 </h1>
      <ul className="d-flex ul-list ">
        {cardData?.length > 0 &&
          cardData.map((card, index) => (
            <li key={index}>
              <Card cardData={card} cardStyle={style} />
            </li>
          ))}
      </ul>
    </>
  );
}
