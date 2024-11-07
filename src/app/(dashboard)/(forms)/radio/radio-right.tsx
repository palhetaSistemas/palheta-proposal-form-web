"use client";
import { Label } from "@/src/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
const RadioRight = () => {
  return (
    <RadioGroup defaultValue="book">
      <div className="flex items-center gap-2">
        <Label htmlFor="book">Book</Label>
        <RadioGroupItem value="book" id="book">
          {" "}
        </RadioGroupItem>
      </div>
      <div className="flex items-center gap-2">
        <Label htmlFor="pen">Pen</Label>
        <RadioGroupItem value="pen" id="pen"></RadioGroupItem>
      </div>
    </RadioGroup>
  );
};
export default RadioRight;
