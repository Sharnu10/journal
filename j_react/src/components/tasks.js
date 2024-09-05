import Card from "./card";

export default function Tasks() {
  const data = {
    id: 1,
    headerText: "2 min",
    priority: "high",
    title: "fast work",
    category: ["2 mins"],
    description: "short work!",
  };

  const style = {
    width: "19rem",
  };

  return (
    <>
      <h1>Tasks: </h1>

      <div>
        <Card cardData={data} cardStyle={style} />
      </div>
    </>
  );
}
