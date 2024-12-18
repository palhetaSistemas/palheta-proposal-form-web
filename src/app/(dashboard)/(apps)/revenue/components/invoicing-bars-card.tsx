"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Calendar, ChevronDown } from "lucide-react";
import StackedColumnChart from "./staked-columnChart";

export function InvoicingBarsCard() {
  const [quarter, setQuarter] = useState(0); // Estado para armazenar o trimestre
  const [isOpenQuarterSelector, setIsOpenQuarterSelector] = useState(false);

  // Dados organizados por trimestre
  const seriesData = [
    [
      { name: "CONSTRUÇÃO", data: [90_000, 80_000, 70_000] },
      { name: "REFORMA", data: [50_000, 40_000, 30_000] },
      { name: "FACHADA", data: [33_000, 25_000, 20_000] },
    ],
    [
      { name: "CONSTRUÇÃO", data: [100_000, 90_000, 80_000] },
      { name: "REFORMA", data: [60_000, 50_000, 40_000] },
      { name: "FACHADA", data: [35_000, 30_000, 25_000] },
    ],
    [
      { name: "CONSTRUÇÃO", data: [110_000, 100_000, 90_000] },
      { name: "REFORMA", data: [70_000, 60_000, 50_000] },
      { name: "FACHADA", data: [40_000, 35_000, 30_000] },
    ],
    [
      { name: "CONSTRUÇÃO", data: [120_000, 110_000, 100_000] },
      { name: "REFORMA", data: [80_000, 70_000, 60_000] },
      { name: "FACHADA", data: [45_000, 40_000, 35_000] },
    ],
  ];

  const categoriesData = [
    ["JANEIRO", "FEVEREIRO", "MARÇO"],
    ["ABRIL", "MAIO", "JUNHO"],
    ["JULHO", "AGOSTO", "SETEMBRO"],
    ["OUTUBRO", "NOVEMBRO", "DEZEMBRO"],
  ];

  // Dados dinâmicos com base no trimestre
  const currentSeries = seriesData[quarter];
  const currentCategories = categoriesData[quarter];

  // Calcular totalAnnotations somando os valores de cada série
  const totalAnnotations = currentCategories.map((_, index) => {
    return currentSeries.reduce((total, serie) => total + serie.data[index], 0);
  });

  return (
    <Card className="h-full">
      <CardHeader className="flex-row justify-between items-center mb-0">
        <div className="flex flex-col relative gap-1">
          <CardTitle>FATURAMENTO</CardTitle>
          <button
            onClick={() => setIsOpenQuarterSelector(true)}
            className="text-primary relative font-semibold text-sm flex flex-row items-center "
          >
            {quarter + 1}º TRIMESTRE <ChevronDown />
          </button>
          {isOpenQuarterSelector && (
            <div className="bg-white shadow-md rounded-md absolute top-6 left-0 z-50 overflow-hidden border border-primary flex flex-col gap-2">
              {[0, 1, 2, 3].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setQuarter(item);
                    setIsOpenQuarterSelector(false);
                  }}
                  className="text-primary px-4 py-1 border-b hover:bg-primary hover:text-white transition-all duration-300 border-b-zinc-100"
                >
                  {item + 1}º TRIMESTRE
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-row items-center gap-2">
          <Button
            type="button"
            color="secondary"
            className="items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Selecionar Data</span>
          </Button>
        </div>
      </CardHeader>

      {/* Gráfico Dinâmico */}
      <CardContent className="px-2 overflow-x-auto pr-2 flex flex-row justify-between">
        <StackedColumnChart
          series={currentSeries}
          categories={currentCategories}
        />
      </CardContent>
    </Card>
  );
}
