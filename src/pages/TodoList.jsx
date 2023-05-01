import { useState } from "react";
import Header from "../components/Header";
import Todos from "../components/Todos";

import { v4 as uuidv4 } from "uuid";

const todoArr = [
  {
    name: "Homework",
    id: uuidv4(),
  },
  {
    name: "Grocery shopping",
    id: uuidv4(),
  },
  {
    name: "Homework",
    id: uuidv4(),
  },
  {
    name: "Grocery shopping",
    id: uuidv4(),
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState(todoArr);
  const [inputValue, setInputValue] = useState({
    name: "",
    id: null,
  });

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = [inputValue, ...todos];
    setTodos(newTodo);
    setInputValue({ name: "", id: null });
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <section className="todo-list">
      <Header />
      <form>
        <h2>add your daily tasks</h2>
        <label htmlFor="input">
          <input
            type="text"
            placeholder="my task"
            value={inputValue.name}
            onChange={(e) =>
              setInputValue({
                name: e.target.value,
                id: uuidv4(),
              })
            }
          />
          <button onClick={addTodo}>add</button>
        </label>
        <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
      </form>
    </section>
  );
};

export default TodoList;
