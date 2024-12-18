import TaskBoard from "./components/task-board";
import { budgetsBoards } from "@/src/@staticData/budgets/boards";
import { budgetsTasks } from "@/src/@staticData/budgets/tasks";
import { budgetsSubTasks } from "@/src/@staticData/budgets/subtasks";

const Budgets = async () => {
  return (
    <>
      <div className="flex flex-wrap mb-7">
        <div className="text-xl font-medium text-default-900 flex-1">
          Orçamentos
        </div>
      </div>
      <TaskBoard
        boards={budgetsBoards}
        tasks={budgetsTasks}
        subTasks={budgetsSubTasks}
      />
    </>
  );
};

export default Budgets;
