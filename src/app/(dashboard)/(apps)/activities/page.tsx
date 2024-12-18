import { activitiesTasks } from "@/src/@staticData/activities/tasks";
import ViewTask from "./view-task";
import { activitiesBoards } from "@/src/@staticData/activities/boards";
import { activitiesSubTasks } from "@/src/@staticData/activities/subtasks";

const Activities = async () => {
  return (
    <ViewTask
      tasks={activitiesTasks}
      boards={activitiesBoards}
      subTasks={activitiesSubTasks}
    />
  );
};

export default Activities;
