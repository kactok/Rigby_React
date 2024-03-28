import img from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={img} className="w-16 h-16 object-contain mx-auto" alt="Photo" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <p>
        <Button text="Create new project" onClick={onStartAddProject} />
      </p>
    </div>
  );
}
