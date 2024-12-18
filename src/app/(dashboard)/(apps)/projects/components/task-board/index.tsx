"use client";
import React from "react";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import TaskHeader from "./task-header";
import { useState } from "react";
import Board from "./board";
import Task from "./task";
import CreateBoard from "./create-borad";
import Blank from "@/src/components/blank";
import { Button } from "@/src/components/ui/button";
import AddTask from "./add-task";
import TaskSheet from "./task-sheet";
import TaskTable from "./task-list/task-table";
import TaskList from "./task-list";
import { toast } from "react-hot-toast";
// dnd
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";

import { projectBoardType } from "@/src/@staticData/projects/boards";
import { projectTaskType } from "@/src/@staticData/projects/tasks";
import { projectSubTaskType } from "@/src/@staticData/projects/subtasks";
import CreateClient from "../CreateClient";
const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

interface TaskBoardProps {
  boards: projectBoardType[];
  tasks: projectTaskType[];
  subTasks: projectSubTaskType[];
}
const TaskBoard = ({ boards, tasks, subTasks }: TaskBoardProps) => {
  const [taskView, setTaskView] = useState<string>("kanban");

  const [open, setOpen] = useState<boolean>(false);
  // for task create modal
  const [open2, setOpen2] = useState<boolean>(false);
  // update task
  const [open3, setOpen3] = useState<boolean>(false);
  // for board
  const [selectedBoardId, setSelectedBoardId] = React.useState<
    projectBoardType["id"] | undefined
  >(undefined);
  const [selectedBoard, setSelectedBoard] = React.useState<
    projectBoardType | undefined
  >(undefined);
  // for task
  const [selectedTaskId, setSelectedTaskId] = React.useState<
    projectTaskType["id"] | undefined
  >(undefined);
  const [selectedTask, setSelectedTask] = React.useState<
    projectTaskType | undefined
  >(undefined);
  const [selectedBoardForTask, setSelectedBoardForTask] = React.useState<
    projectBoardType["id"] | undefined
  >(undefined);

  // handler task view
  const taskViewHandler = (value: string) => {
    setTaskView(value);
  };
  // handle create board
  const openCreateBoard = () => {
    setSelectedBoardId(undefined);
    setSelectedBoard(undefined);
    setOpen(true);
  };
  // handle edit board
  const openEdit = (board: projectBoardType) => {
    setSelectedBoardId(board.id);
    setSelectedBoard(board);
    setOpen(true);
  };

  // handle close create board
  const closeCreateBoard = () => {
    setSelectedBoardId(undefined);
    setSelectedBoard(undefined);
    setOpen(false);
    wait().then(() => (document.body.style.pointerEvents = "auto"));
  };

  // handle task board opener
  const handleTaskOpener = (boardId: projectBoardType["id"]) => {
    setSelectedTaskId(undefined);
    setSelectedTask(undefined);
    setSelectedBoardForTask(boardId);
    setOpen2(true);
  };

  const closeTaskHandler = () => {
    setSelectedTaskId(undefined);
    setSelectedTask(undefined);
    setSelectedBoardForTask(undefined);
    setOpen2(false);
  };

  // update task handler
  const updateTaskHandler = (task: projectTaskType) => {
    setSelectedTaskId(task.id);
    setSelectedTask(task);
    setOpen3(true);
  };
  const closeUpdateTaskHandler = () => {
    setSelectedTaskId(undefined);
    setSelectedTask(undefined);
    setOpen3(false);
  };

  const filteredTasks = (
    tasks: projectTaskType[],
    boardId: projectBoardType["id"]
  ) => {
    // Add your filtering logic here
    return tasks?.filter((task) => task.boardId === boardId);
  };
  // dnd
  const [isPending, startTransition] = React.useTransition();
  const boardsId = React.useMemo(
    () => boards.map((board) => board.id),
    [boards]
  );
  const tasksIds = React.useMemo(() => tasks.map((task) => task.id), [tasks]);
  const [activeBoard, setActiveBoard] = React.useState(null);
  const handleDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Column") {
      setActiveBoard(event.active.data.current.board);

      return;
    }
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeBoardId = active.id.toString(); // Convert to string
    const overBoardId = over.id.toString(); // Convert to string
    if (activeBoardId === overBoardId) return;

    const oldIndex = boardsId.indexOf(activeBoardId);

    const newIndex = boardsId.indexOf(overBoardId);

    if (oldIndex !== newIndex) {
      let data = {
        activeBoardId,
        overBoardId,
      };
      var result;
      startTransition(async () => {
        toast.success("Successfully update");
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );
  const onDragOver = (event: DragOverEvent) => {
    return;
  };
  return (
    <>
      {boards?.length > 0 ? (
        <Card className="overflow-y-auto">
          <CardHeader className="border-none pt-6 mb-6">
            <TaskHeader
              taskView={taskView}
              taskViewHandler={taskViewHandler}
              openCreateBoard={openCreateBoard}
            />
          </CardHeader>
          <CardContent>
            {taskView === "kanban" && (
              <DndContext
                sensors={sensors}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                collisionDetection={closestCorners}
                onDragOver={onDragOver}
                // onDragOver={handleDragOver}
                // onDragCancel={handleDragCancel}
              >
                <div className="overflow-x-auto">
                  <div className="flex flex-nowrap gap-6 pb-4">
                    <SortableContext items={boardsId}>
                      {boards?.map((board, i) => (
                        <Board
                          key={`board-id-${board.id}`}
                          board={board}
                          onEdit={() => openEdit(board)}
                          taskHandler={() => handleTaskOpener(board.id)}
                          isTaskOpen={open2}
                          showButton={
                            !open2 || selectedBoardForTask !== board.id
                          }
                          tasks={tasks.filter(
                            (task) => task.boardId === board.id
                          )}
                          onUpdateTask={updateTaskHandler}
                          boards={boards}
                        >
                          <SortableContext items={tasksIds}>
                            {filteredTasks(tasks, board.id)?.map(
                              (filteredTask, j) => (
                                <Task
                                  key={`task-key-${j}`}
                                  task={filteredTask}
                                  onUpdateTask={updateTaskHandler}
                                  boards={boards}
                                />
                              )
                            )}
                          </SortableContext>
                          {open2 && selectedBoardForTask === board.id && (
                            <AddTask
                              onClose={closeTaskHandler}
                              boardId={selectedBoardForTask}
                            />
                          )}
                        </Board>
                      ))}
                    </SortableContext>
                  </div>
                </div>

                {/* <DragOverlay adjustScale={false}>
                  {activeBoard && (
                    <Board board={activeBoard}>
                      {filteredTasks(tasks, activeBoard.id)?.[0] && (
                        <Task
                          task={filteredTasks(tasks, activeBoard.id)?.[0]}
                          boards={boards}
                        />
                      )}
                    </Board>
                  )}
                </DragOverlay> */}
              </DndContext>
            )}

            {taskView === "list" &&
              boards.map((board, i) => (
                <TaskList
                  key={`list-view-key-${i}`}
                  board={board}
                  onEdit={openEdit}
                  length={filteredTasks(tasks, board.id).length}
                >
                  <TaskTable
                    boards={boards}
                    data={filteredTasks(tasks, board.id)}
                    onUpdateTask={updateTaskHandler}
                    boardID2={board.id}
                  />
                </TaskList>
              ))}
          </CardContent>
        </Card>
      ) : (
        <Blank className="max-w-[353px] mx-auto space-y-4">
          <div className=" text-xl font-semibold text-default-900">
            Nenhum Cliente
          </div>
          <div className=" text-default-600 text-sm">
            Crie um novo cliente para começar
          </div>
          <Button onClick={openCreateBoard}>
            <Plus className="w-4 h-4 mr-1" /> Create Board
          </Button>
        </Blank>
      )}
      <CreateClient open={open} onClose={closeCreateBoard} />
      <TaskSheet
        open={open3}
        onClose={closeUpdateTaskHandler}
        task={selectedTask as projectTaskType}
        taskId={selectedTaskId as projectTaskType["id"]}
        subTasks={subTasks}
      />
    </>
  );
};

export default TaskBoard;
