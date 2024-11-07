"use client";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";

const LabelTextarea = () => {
  return (
    <>
      <Label className="mb-2" htmlFor="message">
        Username
      </Label>
      <Textarea placeholder="message..." id="message" rows={3} />
    </>
  );
};

export default LabelTextarea;
