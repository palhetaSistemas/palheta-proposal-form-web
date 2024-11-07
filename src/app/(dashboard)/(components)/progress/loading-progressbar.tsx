"use client";
import { CircularProgress } from "@/src/components/ui/progress";

const LoadingProgressbar = () => {
  return (
    <div>
      <CircularProgress value={50} color="primary" loading />
    </div>
  );
};

export default LoadingProgressbar;
