export default function Tasks() {
  const cardData = {
    headerText: "2 min",
    title: "short title",
    description: "short description",
  };

  return (
    <>
      <h1>Tasks</h1>
      <div className="card">
        <div className="card-header"> {cardData.headerText}</div>

        <div className="card-body">
          <div className="d-flex justify-content-around">
            <h5 className="card-title">{cardData.title}</h5>

            <button className="btn btn-primary">Add</button>
          </div>

          <hr />

          <p className="card-text">{cardData.description}</p>
        </div>
      </div>
    </>
  );
}
