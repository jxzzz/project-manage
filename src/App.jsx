import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectstate, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects:[],
    tasks: []
  })

function handleAddTask(text) {
  setProjectsState(prevState => {
    const taskId = Math.random();
    const newTask = {
      id: taskId,
      projectId: prevState.selectPeojectId,
      text: text,

    }
    return {
      ...prevState,
      tasks:[newTask, ...prevState.tasks]
    }
  })
}
function handleDeleteTask(tasId) {
  setProjectsState(prevState => {
  
    return {
      ...prevState,
      tasks: prevState.tasks.filter(task => task.id !== tasId)
    }
  })
}

function handleCancelAddProject() {
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId: undefined
    }
  })
}

function handleStartAddProject() {
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId: null
    }
  })
}

function handleAddProject(projectData) {
  setProjectsState(prevState => {
    const newProject = {
      ...projectData,
      id: Math.random()
    }
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject]

    }
  })
}

function handleSelectProject(projectId) {
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId: projectId
    }
  })
}

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== projectstate.selectedProjectId)
      }
    })
  }

  let content;
  if(projectstate.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}></NewProject>
  } else if(projectstate.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
  } else if(projectstate.selectedProjectId) {
    content = <SelectedProject
        tasks={projectstate.tasks}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        project={projectstate.projects.find(project => project.id === projectstate.selectedProjectId)}></SelectedProject>
  }
  return (
    <main className="h-screen my-8 flex gap-8" >
    <ProjectsSidebar onSelectProject={handleSelectProject} selectPeojectId={projectstate.selectedProjectId} onStartAddProject={handleStartAddProject} projects={projectstate.projects} />
      { content }
    </main>
  );
}

export default App;
