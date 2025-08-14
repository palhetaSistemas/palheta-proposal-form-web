"use client";
import ErrorBlock from "@/src/components/error-block";
import Lenis from "lenis";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { ProjectView } from "./components/project-view";

export default function Dashboard() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  const params = useSearchParams();

  if (params.get("projectId") === null || params.get("projectId") === "") {
    return <ErrorBlock />;
  } else {
    return (
      <div className="bg-[#123262] relative flex w-full  items-center flex-col min-h-screen max-h-screen">
        <ProjectView />
        {/* <Hero />
      <Architectural />
      <View3d />
      <Projects />
      <Plans />
      <Portfolio />
      <Steps />
      <Apps /> */}
      </div>
    );
  }
}
