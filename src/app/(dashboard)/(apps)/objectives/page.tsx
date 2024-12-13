"use client";
import React from "react";

import { IndicatorCard } from "./components/indicator-cards";
import { ObjectivesGraph } from "./components/objectives-graph";

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">Objetivos</div>
      </div>

      <div className="grid grid-cols-12  gap-6 ">
        <div className="col-span-12 lg:col-span-8">
          <ObjectivesGraph />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <IndicatorCard />
        </div>
      </div>
    </div>
  );
}
