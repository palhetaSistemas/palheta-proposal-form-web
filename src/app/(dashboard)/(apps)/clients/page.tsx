"use client";
import React from "react";

import TableWithCards from "./components/table-withCards";

export default function ObjectivesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">Clientes</div>
      </div>

      <div className="grid grid-cols-12  gap-6 ">
        <div className="col-span-12 lg:col-span-12">
          <TableWithCards />
        </div>
      </div>
    </div>
  );
}
