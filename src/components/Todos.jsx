import { useState } from "react";
import Todo from "./Todo";

// const todos = ["Homework", "Grocery shopping", "Homework", "Grocery shopping"];

const Todos = ({ todos, handleDeleteTodo }) => {
  return (
    <div className="todos">
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              name={todo.name}
              id={todo.id}
              handleDeleteTodo={handleDeleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
