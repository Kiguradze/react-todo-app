import doneIcon from "../assets/doneIcon.png";
import deleteIcon from "../assets/deleteIcon.png";

const Todos = () => {
  return (
    <div className="todos">
      <ul>
        <li>
          Homework
          <div className="todos-icons">
            <div className="todosIconsBox doneIcon-box">
              <img src={doneIcon} alt="" />
            </div>
            <div className="todosIconsBox deleteIcon-box">
              <img src={deleteIcon} alt="" />
            </div>
          </div>
        </li>
        <li>
          Grocery shopping
          <div className="todos-icons">
            <div className="todosIconsBox doneIcon-box">
              <img src={doneIcon} alt="" />
            </div>
            <div className="todosIconsBox deleteIcon-box">
              <img src={deleteIcon} alt="" />
            </div>
          </div>
        </li>
        <li>
          Homework
          <div className="todos-icons">
            <div className="todosIconsBox doneIcon-box">
              <img src={doneIcon} alt="" />
            </div>
            <div className="todosIconsBox deleteIcon-box">
              <img src={deleteIcon} alt="" />
            </div>
          </div>
        </li>
        <li>
          Grocery shopping
          <div className="todos-icons">
            <div className="todosIconsBox doneIcon-box">
              <img src={doneIcon} alt="" />
            </div>
            <div className="todosIconsBox deleteIcon-box">
              <img src={deleteIcon} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Todos;
