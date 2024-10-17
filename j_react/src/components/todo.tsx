import { useEffect, useState } from "react";

interface ITodo {
  taskDes: string;
}

const Todo = () => {
  const [todos, setTodo] = useState<ITodo[]>([]);
  const [newTodoValue, setNewTodoValue] = useState("");

  const addTodo = () => {
    if (newTodoValue.trim() !== "") {
      let newList = [...todos, { taskDes: newTodoValue }];
      setTodo(newList);
      setNewTodoValue("");
    }
  };

  // useEffect(() => addTodo(), []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewTodoValue(event.target.value);

  return (
    <>
      <h2>Todo List</h2>

      <div>
        <div>
          <input
            type="text"
            placeholder="add item..."
            name="newTodoValue"
            value={newTodoValue}
            onChange={handleInputChange}
          />
        </div>

        <button className="btn btn-warning" onClick={addTodo}>
          Add
        </button>
      </div>

      <br />

      <ul>
        {todos &&
          todos.map((todo) => <li key={todo.taskDes}>{todo.taskDes}</li>)}
      </ul>
    </>
  );
};

export default Todo;
