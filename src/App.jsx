import "./index.css";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="container">
      <Counter />
      <Calculator />
      <TodoList />
      <UserList />
    </div>
  );
}

export default App;
