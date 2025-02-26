"use client";
import { Hero } from "./components/Hero";
import { Architectural } from "./components/Archictural";
import { View3d } from "./components/3dView";
import { Projects } from "./components/Projects";
import { Plans } from "./components/Plans";
import { Portfolio } from "./components/Portfolio";
import { Steps } from "./components/Steps";
import { Apps } from "./components/Apps";
import { useEffect } from "react";
import Lenis from "lenis";

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
    <div className="bg-white flex w-full flex-col min-h-screen">
      <Hero />
      <Architectural />
      <View3d />
      <Projects />
      <Plans />
      <Portfolio />
      <Steps />
      <Apps />
    </div>
  );
}
