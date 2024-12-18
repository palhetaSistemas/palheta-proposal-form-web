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

  console.log("tasks", tasks);
  console.log("contacts", contacts);
  console.log("boards", boards);
  console.log("subTasks", subTasks);
  console.log("comments", comments);

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
