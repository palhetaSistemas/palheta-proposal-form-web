"use client";
import { Kbd } from "@/src/components/ui/kbd";

const InTextKbd = () => {
  return (
    <div>
      Press <Kbd keys={["command"]}>K </Kbd> to pay respects
    </div>
  );
};

export default InTextKbd;
