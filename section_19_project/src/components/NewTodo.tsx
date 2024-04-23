import { useRef, FormEvent, useContext } from "react";
import { FC } from "react";
import classes from "./NewTodo.module.css";
import { TOdosContext } from "../store/todos-contex";

const NewTodo: FC = () => {
  const { addTodo } = useContext(TOdosContext);
  const todoText = useRef<HTMLInputElement>(null);
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = todoText.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoText} type="text" name="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
