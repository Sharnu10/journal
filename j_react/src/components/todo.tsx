import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

import "../styles/todos.scss";

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

  const deleteTodo = (todo: ITodo) => {
    let newTodo = todos.filter((item) => {
      return item.taskDes !== todo.taskDes;
    });
    setTodo(newTodo);
  };

  const editTodo = () => {};

  return (
    <Container className="container">
      <Row className="todo-list-header">TODO LIST</Row>

      <hr />

      <Row>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="add item..."
              name="newTodoValue"
              value={newTodoValue}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Row>

      <Row>
        <Button className="add-btn" variant="dark" onClick={addTodo}>
          Add
        </Button>
      </Row>

      <Row>
        <ul className="todo-lists">
          {todos &&
            todos.map((todo, index) => (
              <li key={todo.taskDes} className="todo-item">
                <span>{todo.taskDes}</span>
                <span>
                  <Button variant="light" onClick={() => deleteTodo(todo)}>
                    Delete
                  </Button>

                  {/* <Button
                    variant="light"
                    className="ms-4"
                    onClick={() => editTodo()}
                  >
                    Edit
                  </Button> */}
                </span>
              </li>
            ))}
        </ul>
      </Row>
    </Container>
  );
};

export default Todo;
