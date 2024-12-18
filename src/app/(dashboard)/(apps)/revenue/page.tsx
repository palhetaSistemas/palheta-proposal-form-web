"use client";
import React from "react";

import { InvoicingCard } from "./components/invoicing-card";
import { InvoicingBarsCard } from "./components/invoicing-bars-card";
import { MonthlyReport } from "./components/monthly-report";
import { MonthlyReportChart } from "./components/monthly-report-chart";

export default function RevenuePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">Receitas</div>
      </div>

      <div className="grid grid-cols-12  gap-6 ">
        <div className="col-span-12 lg:col-span-8">
          <InvoicingCard />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <InvoicingBarsCard />
        </div>
        <div className="col-span-12 grid-cols-2 grid lg:col-span-12">
          <div className="col-span-2 lg:col-span-1">
            <MonthlyReport />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <MonthlyReportChart />
          </div>
        </div>
      </div>
    </div>
  );
}
