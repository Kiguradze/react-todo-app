import Header from "../components/Header";
import Todos from "../components/Todos";

const TodoList = () => {
  return (
    <section className="todo-list">
      <Header />
      <form>
        <h2>add your daily tasks</h2>
        <label htmlFor="input">
          <input type="text" placeholder="my task" />
          <button>add</button>
        </label>
        <Todos />
      </form>
    </section>
  );
};

export default TodoList;
