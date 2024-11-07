"use client";
import { Label } from "@/src/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";
const CustomLabel = () => {
  return (
    <RadioGroup defaultValue="admin">
      <div className="flex items-center gap-2">
        <Label htmlFor="admin">Admin</Label>
        <RadioGroupItem value="admin" id="admin">
          {" "}
        </RadioGroupItem>
      </div>
      <div className="flex items-center gap-2">
        <Label htmlFor="member">Member</Label>
        <RadioGroupItem value="member" id="member"></RadioGroupItem>
      </div>
    </RadioGroup>
  );
};
export default CustomLabel;
