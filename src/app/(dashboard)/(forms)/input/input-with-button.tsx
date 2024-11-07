"use client";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

const InputWithButton = () => {
  return (
    <div>
      <div className="flex gap-4">
        <Input type="text" placeholder="Enter Your Name" id="input" />
        <Button type="submit">Subscribe</Button>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Checkbox id="terms" size="sm" />
        <Label htmlFor="terms">I agree with your policy</Label>
      </div>
    </div>
  );
};

export default InputWithButton;
