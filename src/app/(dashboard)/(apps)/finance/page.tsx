"use client";
import { Button } from "@/src/components/ui/button";
import React, { useState } from "react";
import { Releases } from "./components/releases";
import { IncomeDonutGraph } from "./components/income-DonutGraph";
import { BiggestRevenueDonutGraph } from "./components/biggest-revenue-DonutGraph";
import { HigherCostsDonutGraph } from "./components/higher-costs-DonutGraph";
import TableWithCards from "./components/table-withCards";
import { cn } from "@/src/lib/utils";
import { Tags } from "lucide-react";
import CreateLaunch from "./components/CreateLaunch";

export default function financialPage() {
  const [selected, setSelected] = useState("status");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const scrollToTable = () => {
    const tableElement = document.getElementById("table");
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center flex-wrap justify-between gap-4">
          <div className="text-2xl font-medium text-default-800 ">
            Financeiro
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className=" flex items-center gap-4">
              <Button
                className={cn(
                  "border border-primary font-bold",
                  selected !== "status" && "bg-secondary text-primary"
                )}
                onClick={() => setSelected("status")}
              >
                <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> BALANÇO
              </Button>
              <Button
                onClick={() => setSelected("type")}
                className={cn(
                  "border border-primary font-bold",
                  selected !== "type" && "bg-secondary text-primary"
                )}
              >
                <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> ENTRADAS E SAÍDAS
              </Button>
              <Button
                onClick={() => setSelected("trimester")}
                className={cn(
                  "border border-primary font-bold",
                  selected !== "trimester" && "bg-secondary text-primary"
                )}
              >
                <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> INVESTIMENTOS
              </Button>
            </div>
          </div>
          <Button onClick={() => setIsSheetOpen(true)}>+ LANÇAMENTOS</Button>
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
      <CreateLaunch open={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </>
  );
}
