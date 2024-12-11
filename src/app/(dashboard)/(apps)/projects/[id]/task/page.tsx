import TaskBoard from "@/src/components/task-board";
import React from "react";
import {
  getBoards,
  getTasks,
  getSubtasks,
  getComments,
} from "@/src/config/project-config";
import ViewTask from "../../../task/view-task";
import { getContacts } from "../../../chat/chat-config";
const task = async ({ params }: { params: { id: string } }) => {
  const tasks = await getTasks();
  const contacts = await getContacts();
  return (
    // <TaskBoard
    //   boards={boards}
    //   tasks={tasks}
    //   subTasks={subTasks}
    //   comments={comments}
    // />
    <ViewTask header={false} contacts={contacts} tasks={tasks} />
  );
};

export default task;
