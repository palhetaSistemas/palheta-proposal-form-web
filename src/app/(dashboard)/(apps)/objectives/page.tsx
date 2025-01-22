"use client";
import React, { useState } from "react";

import { IndicatorCard } from "./components/indicator-cards";
import { ObjectivesGraph } from "./components/objectives-graph";
import ObjectivesSheet from "./components/objectives-sheet";

export default function ClientsPage() {
  const [open, setOpen] = useState(false);
  function closeObjectivesSheet() {
    setOpen(false);
  }
  function openObjectivesSheet() {
    setOpen(true);
  }
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center flex-wrap justify-between gap-4">
          <div className="text-2xl font-medium text-default-800 ">
            Objetivos
          </div>
        </div>

        <div className="grid grid-cols-12  gap-6 ">
          <div className="col-span-12 lg:col-span-8">
            <ObjectivesGraph openSheet={openObjectivesSheet} />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <IndicatorCard />
          </div>
        </div>
      </div>
      <ObjectivesSheet open={open} onClose={closeObjectivesSheet} />
    </>
  );
}
