import Todo from "../models/todo";
import { FC, MouseEvent } from "react";
import classes from "./TodoItem.module.css";

const TodoItem: FC<{
  item: Todo;
  handleDelete: () => void;
}> = ({ item, handleDelete }) => {
  return (
    <li onClick={handleDelete} className={classes.item}>
      {item.text}
    </li>
  );
};

export default TodoItem;
