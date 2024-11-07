"use client";
import { Slider } from "@/src/components/ui/slider";
const MultipleValueSlider = () => {
  return (
    <div>
      <Slider defaultValue={[25, 75]} />
    </div>
  );
};

export default MultipleValueSlider;
