"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import FinanceChart from "./finance-chart";
export function FinancialOverview() {
  const [quarter, setQuarter] = useState(0);

  const seriesFirstQuarter = [
    {
      name: "Despesas",
      data: [90, 60, 70, 80, 50, 40],
    },
    {
      name: "Receitas",
      data: [50, 55, 40, 30, 35, 40],
    },
    {
      name: "Clientes",
      data: [40, 45, 60, 45, 20, 35],
    },
  ];
  const seriesSecondQuarter = [
    {
      name: "Despesas",
      data: [85, 65, 75, 70, 55, 45],
    },
    {
      name: "Receitas",
      data: [55, 50, 45, 35, 40, 45],
    },
    {
      name: "Clientes",
      data: [45, 50, 55, 50, 25, 40],
    },
  ];
  const seriesThirdQuarter = [
    {
      name: "Despesas",
      data: [80, 70, 60, 90, 60, 50],
    },
    {
      name: "Receitas",
      data: [60, 65, 50, 40, 45, 50],
    },
    {
      name: "Clientes",
      data: [50, 55, 50, 55, 30, 45],
    },
  ];
  const seriesFourthQuarter = [
    {
      name: "Despesas",
      data: [95, 75, 85, 100, 70, 60],
    },
    {
      name: "Receitas",
      data: [65, 70, 55, 45, 50, 55],
    },
    {
      name: "Clientes",
      data: [55, 60, 65, 60, 35, 50],
    },
  ];
  const selectedSeries =
    quarter === 0
      ? seriesFirstQuarter
      : quarter === 1
      ? seriesSecondQuarter
      : quarter === 2
      ? seriesThirdQuarter
      : seriesFourthQuarter;
  return (
    <Card className="h-full">
      <CardHeader className="flex-row justify-between items-center mb-0">
        <CardTitle>Clientes x Receitas x Despesasas</CardTitle>
        <div className="flex flex-row items-center gap-2">
          <Button type="button" color="primary" asChild>
            <Link href="#">2024</Link>
          </Button>
          <Button type="button" color="secondary" asChild>
            <Link href="#">Ver Todos</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-2 py-2 overflow-x-auto pr-2  flex flex-row justify-between">
        <Button
          className={` ${
            quarter === 0
              ? "shadow-md shadow-primary text-primary"
              : "text-white"
          } px-9 py-4 text-lg`}
          onClick={() => setQuarter(0)}
          type="button"
          color={quarter === 0 ? "secondary" : "primary"}
          asChild
        >
          <span>1º Trimestre</span>
        </Button>
        <Button
          className={` ${
            quarter === 1
              ? "shadow-md shadow-primary text-primary"
              : "text-white"
          } px-9 py-4 text-lg`}
          onClick={() => setQuarter(1)}
          type="button"
          color={quarter === 1 ? "secondary" : "primary"}
          asChild
        >
          <span>2º Trimestre</span>
        </Button>
        <Button
          className={` ${
            quarter === 2
              ? "shadow-md shadow-primary text-primary"
              : "text-white"
          } px-9 py-4 text-lg`}
          onClick={() => setQuarter(2)}
          type="button"
          color={quarter === 2 ? "secondary" : "primary"}
          asChild
        >
          <span>3º Trimestre</span>
        </Button>
        <Button
          className={` ${
            quarter === 3
              ? "shadow-md shadow-primary text-primary"
              : "text-white"
          } px-9 py-4 text-lg`}
          onClick={() => setQuarter(3)}
          type="button"
          color={quarter === 3 ? "secondary" : "primary"}
          asChild
        >
          <span>4º Trimestre</span>
        </Button>
      </CardContent>
      <CardContent className="px-2 py-2 overflow-x-auto">
        <FinanceChart series={selectedSeries} key={quarter} />
      </CardContent>
    </Card>
  );
}
