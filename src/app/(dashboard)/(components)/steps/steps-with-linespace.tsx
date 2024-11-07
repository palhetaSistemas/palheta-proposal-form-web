"use client";

import { Stepper, Step, StepLabel } from "@/src/components/ui/steps";
import { useMediaQuery } from "@/src/hooks/use-media-query";
const StepsWithLineSpace = () => {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <div>
      <Stepper current={3} gap direction={isTablet ? "vertical" : "horizontal"}>
        {steps?.map((label, i) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepsWithLineSpace;
