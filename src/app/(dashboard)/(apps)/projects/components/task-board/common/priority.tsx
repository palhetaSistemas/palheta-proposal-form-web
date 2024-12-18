"use client";

import { useState } from "react"; // Import useState hook
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { projectTaskType } from "@/src/@staticData/projects/tasks";
const Priority = ({
  task,
  taskId,
}: {
  task?: projectTaskType | any;
  taskId?: projectTaskType["id"];
}) => {
  const [selectedPriority, setSelectedPriority] = useState<
    projectTaskType | any
  >(task?.priority);

  const handlePriorityChange = async (value: any) => {
    if (taskId) {
      try {
        const newData = {
          ...task,
          priority: value,
        };
      } catch (error) {
        console.log(error);
      }

      setSelectedPriority(value);
    }
  };

  return (
    <>
      <div className="w-[100px]">
        <Select value={selectedPriority} onValueChange={handlePriorityChange}>
          <SelectTrigger size="sm" variant="flat" color="primary">
            <SelectValue placeholder="select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Priority;
