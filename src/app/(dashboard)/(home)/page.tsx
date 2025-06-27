"use client";
import Lenis from "lenis";
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
