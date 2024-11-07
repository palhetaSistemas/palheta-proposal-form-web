"use client";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { Button } from "@/src/components/ui/button";
const ArrowTooltip = () => {
  return (
    <div className="flex  justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="primary">Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent color="primary">
            <p>I am tooltip</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ArrowTooltip;
