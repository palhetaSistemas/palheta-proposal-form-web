import {
  getBoards,
  getTasks,
  getSubtasks,
  getComments,
  getTasks2,
} from "@/src/config/project-config";
import TaskBoard from "@/src/components/task-board";

export async function Kanban() {
  const boards = await getBoards();
  const tasks = await getTasks2();
  const subTasks = await getSubtasks();
  const comments = await getComments();

  return (
    <>
      <TaskBoard
        boards={boards}
        tasks={tasks}
        subTasks={subTasks}
        comments={comments}
      />
    </>
  );
}
