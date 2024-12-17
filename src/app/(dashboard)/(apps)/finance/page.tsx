"use client";
import { Button } from "@/src/components/ui/button";
import React from "react";
import { Releases } from "./components/releases";
import { IncomeDonutGraph } from "./components/income-DonutGraph";
import { BiggestRevenueDonutGraph } from "./components/biggest-revenue-DonutGraph";
import { HigherCostsDonutGraph } from "./components/higher-costs-DonutGraph";
import TableWithCards from "./components/table-withCards";

export default function financialPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">Financeiro</div>
        <div className="flex flex-row items-center gap-2">
          <Button>BALANÇO</Button>
          <Button>ENTRADAS E SAÍDAS</Button>
          <Button>INVESTIMENTOS</Button>
        </div>
        <Button>LANÇAMENTOS</Button>
      </div>

      <div className="grid grid-cols-12  gap-6 ">
        <div className="col-span-12 lg:col-span-8">
          <Releases />
        </div>
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-4">
          <div className="col-span-12 lg:col-span-2">
            <HigherCostsDonutGraph />
          </div>{" "}
          <div className="col-span-12 lg:col-span-2">
            <BiggestRevenueDonutGraph />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-12">
          <TableWithCards />
        </div>
      </div>
    </div>
  );
}
