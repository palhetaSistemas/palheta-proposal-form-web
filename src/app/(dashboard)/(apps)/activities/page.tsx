import {
  getBoards,
  getComments,
  getSubtasks,
  getTasks,
} from "@/src/config/project-config";
import { getContacts } from "../chat/chat-config";
import ViewTask from "./view-task";

const Activities = async () => {
  const tasks = await getTasks();
  const contacts = await getContacts();
  const boards = await getBoards();
  const subTasks = await getSubtasks();
  const comments = await getComments();

  return (
    <ViewTask
      contacts={contacts}
      tasks={tasks}
      boards={boards}
      subTasks={subTasks}
      comments={comments}
    />
  );
};

export default Activities;
