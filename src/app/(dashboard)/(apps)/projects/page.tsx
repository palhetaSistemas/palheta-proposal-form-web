import TaskBoard from "./components/task-board";
import { projectsBoards } from "@/src/@staticData/projects/boards";
import { projectsTasks } from "@/src/@staticData/projects/tasks";
import { projectsSubTasks } from "@/src/@staticData/projects/subtasks";
import { Gantt } from "./components/gantt";

const Projects = async () => {
  return (
    <>
      <div className="flex flex-wrap mb-7">
        <div className="text-xl font-medium text-default-900 flex-1">
          Projetos
        </div>
      </div>
      <TaskBoard
        boards={projectsBoards}
        tasks={projectsTasks}
        subTasks={projectsSubTasks}
      />
      <Gantt />
    </>
  );
};

export default Projects;
