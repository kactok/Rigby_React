import NewTask from "./NewTask";
import { useState } from "react";

export default function Tasks({ onAdd, onDelete, tasks }) {
  return (
    <section className="text-2xl font-bold text-stone-700 mb-4">
      <h2>Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project does not have any task yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.taskId} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-stone-500"
                onClick={() => onDelete(task.taskId)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
