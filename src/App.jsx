import AppName from "./Components/AppName";
import AppTodo from "./Components/AppTodo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";

function App() {
  return (
    <div>
      <center className="todo-container">
        <AppName />

        <div className=" items-container">
          <AppTodo />

          <TodoItem />

          <TodoItem1 />
          <TodoItem2 />
        </div>
      </center>
    </div>
  );
}
export default App;
