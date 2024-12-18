import {
  getBoards,
  getTasks,
  getSubtasks,
  getComments,
  getTasks2,
  getBoards3,
} from "@/src/config/project-config";
import KanbanBreadCrumbs from "./bread-crumbs";
import TaskBoard from "./components/task-board";

const Projects = async () => {
  const boards = await getBoards3();
  const tasks = await getTasks2();
  const subTasks = await getSubtasks();
  const comments = await getComments();
  return (
    <>
      <div className="flex flex-wrap mb-7">
        <div className="text-xl font-medium text-default-900 flex-1">
          Projetos
        </div>
      </div>
      <TaskBoard
        boards={boards}
        tasks={tasks}
        subTasks={subTasks}
        comments={comments}
      />
    </>
  );
};

export default Projects;
