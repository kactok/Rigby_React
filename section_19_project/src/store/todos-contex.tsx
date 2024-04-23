import { createContext, FC, useState } from "react";
import Todo from "../models/todo";

export const TOdosContext = createContext<{
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: FC<{ children: any }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => [new Todo(text), ...prev]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <TOdosContext.Provider value={{ items: todos, addTodo, removeTodo }}>
      {children}
    </TOdosContext.Provider>
  );
};

export default TodosContextProvider;
