import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import TodoList from "./pages/TodoList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="todolist" element={<TodoList />} />
    </Routes>
  );
};

export default App;
