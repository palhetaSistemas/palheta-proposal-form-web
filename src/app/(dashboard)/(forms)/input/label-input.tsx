"use client";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

const LabelInput = () => {
  return (
    <>
      <Label className="mb-3" htmlFor="inputId">
        Username{" "}
      </Label>
      <Input type="text" placeholder="Enter Your Name" id="inputId" />
    </>
  );
};

export default LabelInput;
