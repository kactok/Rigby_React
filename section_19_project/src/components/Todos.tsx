import { FC, useContext } from "react";
import { TOdosContext } from "../store/todos-contex";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: FC = () => {
  const { items, removeTodo } = useContext(TOdosContext);
  return (
    <ul className={classes.todos}>
      {items.map((el) => (
        <TodoItem
          key={el.id}
          item={el}
          handleDelete={removeTodo.bind(null, el.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
