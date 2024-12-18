"use client";

import { useState } from "react"; // Import useState hook
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { activityTaskType } from "@/src/@staticData/activities/tasks";
const Priority = ({
  task,
  taskId,
}: {
  task?: activityTaskType | any;
  taskId?: activityTaskType["id"];
}) => {
  const [selectedPriority, setSelectedPriority] = useState<
    activityTaskType | any
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
