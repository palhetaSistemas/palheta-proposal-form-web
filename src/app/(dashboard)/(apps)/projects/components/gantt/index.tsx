"use client";

import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import TaskHeader from "./task-header";
import { useState } from "react";
import { Chart } from "react-google-charts";

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
      percentStyle: {
        fill: "#ff0000",
      },
    },
  };

  const data = [columns, ...rows];

  const [openSheet, setOpenSheet] = useState(false);
  return (
    <Card className="overflow-y-auto mt-8">
      <CardHeader className="border-none pt-6 mb-6">
        <TaskHeader openCreateBoard={() => setOpenSheet(true)} />
      </CardHeader>
      <CardContent className="p-4 h-96 gap-4 flex flex-col">
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
      </CardContent>
    </Card>
  );
}
