import { useState } from "react";
import { CardData, CardProps } from "../types/cardTypes";
import AddForm from "./addForm";
import { ITask } from "../types/taskType";

export default function Card({ cardData, cardStyle }: CardProps) {
  const [showForm, setShowForm] = useState(false);
  const [tasklist, setTask] = useState<ITask[]>([]);

  const getPriorityColor = (cardData: CardData): string => {
    return `card-header priority-${cardData.priority}`;
  };

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleSetTask = (newTask: ITask) => {
    setTask((prevTask) => [...prevTask, newTask]);
  };

  return (
    <div className="card m-1" style={{ width: cardStyle.width }}>
      <div className={getPriorityColor(cardData)}> {cardData.headerText}</div>

      <div className="card-body">
        <div className="d-flex justify-content-around">
          <h5 className="card-title">{cardData.title}</h5>

          <button className="btn btn-primary" onClick={toggleShowForm}>
            {showForm ? "Remove form" : "Add"}
          </button>
        </div>

        <hr />

        <p className="card-text">{cardData.description}</p>
      </div>

      {showForm && <AddForm setTask={handleSetTask} />}

      {tasklist && (
        <>
          <ul className="ul-list">
            {tasklist.map((task, index) => (
              <li key={index}> {task.taskname} </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
