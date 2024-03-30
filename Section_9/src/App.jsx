import ProjectSidebar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((previousState) => {
      const newTask = {
        text: text,
        projectId: previousState.selectedProjectId,
        taskId: Math.random(),
      };
      return {
        ...previousState,
        tasks: [...previousState.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((previousState) => {
      return {
        ...previousState,
        tasks: previousState.tasks.filter((task) => task.taskId !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: id,
      };
    });
  }
  function handleStartAddProject() {
    setProjectState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAppProject(projectData) {
    setProjectState((previousState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: [...previousState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: previousState.projects.filter(
          (project) => project.id !== previousState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={handleDeleteProject}
      project={selectedProject}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAppProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        // selectedProjectId={selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
