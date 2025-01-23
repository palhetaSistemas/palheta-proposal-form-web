"use client";

import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import TaskHeader from "./task-header";
import { useState } from "react";
import { Chart } from "react-google-charts";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import CreateBudget from "../CreateBudget";

export function Gantt() {
  function daysToMilliseconds(days: number) {
    return days * 24 * 60 * 60 * 1000;
  }

  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];

  const rows = [
    [
      "Research",
      " ",
      new Date(2025, 0, 1),
      new Date(2025, 0, 14),
      null,
      100,
      "",
    ],
    [
      "Research1",
      " ",
      new Date(2025, 0, 14),
      new Date(2025, 0, 28),
      null,
      100,
      "",
    ],
    [
      "Research2",
      " ",
      new Date(2025, 0, 28),
      new Date(2025, 1, 10),
      null,
      25,
      "",
    ],
    [
      "Research3",
      " ",
      new Date(2025, 1, 10),
      new Date(2025, 1, 24),
      null,
      0,
      "",
    ],
    [
      "Research4",
      " ",
      new Date(2025, 1, 24),
      new Date(2025, 2, 9),
      null,
      0,
      "",
    ],
    [
      "Research5",
      " ",
      new Date(2025, 2, 9),
      new Date(2025, 2, 22),
      null,
      0,
      "",
    ],
  ];

  const options = {
    gantt: {
      criticalPathEnabled: false,
      innerGridHorizLine: {
        stroke: "transparent",
      },
      innerGridTrack: { fill: "#fff" },
      innerGridDarkTrack: { fill: "#fff" },
      outerGridHorizLine: {
        stroke: "transparent",
      },
      palette: [
        {
          color: "#B3C2D1",
          dark: "#013466",
        },
      ],
    },
  };

  const [projects, setProjects] = useState([
    {
      id: "1",
      photo: "/images/staticDataImage/church5.png",
      name: "PR EDIELSON MORAES",
      startDate: "25/01/25",
      endDate: "25/02/25",
      place: "CURITIBA - PARANÁ",
      selected: false,
    },
    {
      id: "2",
      photo: "/images/staticDataImage/church5.png",
      name: "PR EDIELSON MORAES",
      startDate: "25/01/25",
      endDate: "25/02/25",
      place: "CURITIBA - PARANÁ",
      selected: false,
    },
    {
      id: "3",
      photo: "/images/staticDataImage/church5.png",
      name: "PR EDIELSON MORAES",
      startDate: "25/01/25",
      endDate: "25/02/25",
      place: "CURITIBA - PARANÁ",
      selected: false,
    },
    {
      id: "4",
      photo: "/images/staticDataImage/church5.png",
      name: "PR EDIELSON MORAES",
      startDate: "25/01/25",
      endDate: "25/02/25",
      place: "CURITIBA - PARANÁ",
      selected: false,
    },
    {
      id: "5",
      photo: "/images/staticDataImage/church5.png",
      name: "PR EDIELSON MORAES",
      startDate: "25/01/25",
      endDate: "25/02/25",
      place: "CURITIBA - PARANÁ",
      selected: false,
    },
    {
      id: "6",
      photo: "/images/staticDataImage/church5.png",
      name: "PR EDIELSON MORAES",
      startDate: "25/01/25",
      endDate: "25/02/25",
      place: "CURITIBA - PARANÁ",
      selected: false,
    },
  ]);
  const [isSelected, setIsSelected] = useState("1");

  const data = [columns, ...rows];

  const [openSheet, setOpenSheet] = useState(false);
  return (
    <>
      <Card className="overflow-y-auto mt-8">
        <CardHeader className="border-none pt-6 mb-6">
          <TaskHeader openCreateBoard={() => setOpenSheet(true)} />
        </CardHeader>
        <CardContent className="w-full">
          <div className="flex flex-col">
            <span className="text-primary font-semibold text-xl">
              SELECIONE O PROJETO:
            </span>
            <div className="w-full flex overflow-x-scroll py-1 gap-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-40 flex flex-col rounded-md shadow-sm cursor-pointer hover:shadow-md transition-all duration-300",
                    isSelected !== project.id && "opacity-40"
                  )}
                  onClick={() => setIsSelected(project.id)}
                >
                  <div className="w-40 h-40 relative overflow-hidden">
                    <Image
                      src={project.photo}
                      alt={project.name}
                      fill
                      className="absolute w-full h-full top-0 left-0 object-cover"
                    />
                    <div className="absolute items-center justify-center flex w-full h-8 bottom-0 left-0 text-center rounded bg-primary text-white font-semibold text-xs">
                      {project.name}
                    </div>
                  </div>
                  <div className="flex flex-col p-1 text-xs">
                    <span>{project.startDate}</span>
                    <span className="underline">{project.endDate}</span>
                    <span className="font-semibold">{project.place}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full p-4 h-96 gap-4 flex flex-col">
            <div className="w-full font-semibold text-2xl border-b border-b-primary text-primary px-4">
              ETAPAS DO PROJETO
            </div>
            <Chart
              chartType="Gantt"
              width="100%"
              height="100%"
              data={data}
              options={options}
            />
          </div>
        </CardContent>
      </Card>
      <CreateBudget open={openSheet} onClose={() => setOpenSheet(false)} />
    </>
  );
}
