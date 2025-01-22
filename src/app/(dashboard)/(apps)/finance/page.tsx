"use client";
import { Button } from "@/src/components/ui/button";
import React from "react";
import { Releases } from "./components/releases";
import { IncomeDonutGraph } from "./components/income-DonutGraph";
import { BiggestRevenueDonutGraph } from "./components/biggest-revenue-DonutGraph";
import { HigherCostsDonutGraph } from "./components/higher-costs-DonutGraph";
import TableWithCards from "./components/table-withCards";

export default function financialPage() {
  const scrollToTable = () => {
    const tableElement = document.getElementById("table");
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">Financeiro</div>
        <div className="flex flex-row items-center gap-2"></div>
        <Button>+ LANÇAMENTOS</Button>
      </div>

      <div className="grid grid-cols-12  gap-6 ">
        <div className="col-span-12 lg:col-span-8">
          <Releases />
        </div>
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-4">
          <div className="col-span-12 lg:col-span-2">
            <HigherCostsDonutGraph scrollToTable={scrollToTable} />
          </div>{" "}
          <div className="col-span-12 lg:col-span-2">
            <BiggestRevenueDonutGraph scrollToTable={scrollToTable} />
          </div>
        </div>
        <div id="table" className="col-span-12 lg:col-span-12">
          <TableWithCards />
        </div>
      </div>
    </div>
  );
}
