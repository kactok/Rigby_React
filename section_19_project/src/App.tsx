import Todos from "./components/Todos";
import Todo from "./models/todo";
import TodosContextProvider from "./store/todos-contex";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}
export default App;
