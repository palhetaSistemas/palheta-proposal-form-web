"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/components/ui/card";
import { Icon } from "@iconify/react";
import {
  Calendar,
  ChevronDown,
  Link,
  List,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Checkbox } from "@/src/components/ui/checkbox";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { getWords } from "@/src/lib/utils";

import AssignMembers from "./common/assign-members";
import DeleteConfirmationDialog from "@/src/components/delete-confirmation-dialog";
import { cn } from "@/src/lib/utils";

const prioritiesColorMap: { [key: string]: any } = {
  high: "red",
  medium: "yellow",
  low: "green",
};

const tagsColorMap: { [key: string]: any } = {
  development: "destructive",
  planning: "info",
  design: "success",
  "ui/ux": "warning",
};
// dnd
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { projectTaskType } from "@/src/@staticData/projects/tasks";
import { projectBoardType } from "@/src/@staticData/projects/boards";
interface TaskProps {
  task: projectTaskType;
  onUpdateTask: (task: projectTaskType) => void;
  boards: projectBoardType[];
}

const Task = ({ task, onUpdateTask, boards }: TaskProps) => {
  const [open, setOpen] = React.useState(false);
  const {
    id,
    tags,
    title,
    desc,
    priority,
    status,
    assign,
    image,
    category,
    pages,
    messageCount,
    link,
    date,
    time,
    size,
  } = task;

  const handleMoveTask = (
    task: projectTaskType,
    boardId: projectBoardType["id"]
  ) => {
    const newData = {
      ...task,
      boardId: boardId,
    };
  };

  const getBoardNameById = (boardId: projectBoardType["id"]) => {
    const foundBoard = boards.find(
      (board: projectBoardType) => board.id === boardId
    );
    return foundBoard ? foundBoard.name : "Unknown Board";
  };
  // delete task
  const onAction = async (dltId: string) => {
    return;
  };
  // dnd
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: false,
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <>
      <DeleteConfirmationDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => onAction(id)}
      />
      <Card
        ref={setNodeRef}
        style={style}
        {...attributes}
        className={cn(
          "shadow-black/50 border-default-200 shadow-md p-0 rounded-2xl cursor-pointer group relative",
          {
            "opacity-50": isDragging,
          }
        )}
        // onClick={() => onUpdateTask(task)}
      >
        {image && (
          <div className="w-full mt-3 rounded-2xl">
            <Image
              alt=""
              src={image}
              className=" rounded-2xl"
              height={190}
              width={277}
            />
          </div>
        )}
      </Card>
    </>
  );
};

export default Task;
