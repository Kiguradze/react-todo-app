import doneIcon from "../assets/doneIcon.png";
import deleteIcon from "../assets/deleteIcon.png";
import { useState } from "react";

const Todo = ({ name, id, handleDeleteTodo }) => {
  const [doneTask, setDoneTask] = useState(false);

  return (
    <li id={id} className={doneTask ? "doneTask" : ""}>
      {name}
      <div className={`todos-icons ${doneTask ? "doneTask" : ""}`}>
        <div
          className="todosIconsBox doneIcon-box"
          onClick={() => setDoneTask(!doneTask)}
        >
          <img src={doneIcon} alt="" />
        </div>
        <div
          className="todosIconsBox deleteIcon-box"
          onClick={() => handleDeleteTodo(id)}
        >
          <img src={deleteIcon} alt="" />
        </div>
      </div>
    </li>
  );
};

export default Todo;
