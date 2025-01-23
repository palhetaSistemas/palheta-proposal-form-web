"use client";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { Tabs, TabsList } from "@/src/components/ui/tabs";
import { useState } from "react";
import RevenueChart from "../../../(home)/components/revenue-graph/revenue-chart";
import FinanceChart from "./finance-chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

export function Releases() {
  const cards = [
    {
      value: "all",
      text: "Despesas",
      total: "R$10,234",
      color: "exit",
    },
    {
      value: "event",
      text: "Receitas",
      total: "R$10,234",
      color: "entry",
    },
    {
      value: "Receitas",
      text: "à receber (Neste mês)",
      total: "R$10,234",
      color: "entry",
    },
    {
      value: "newuser",
      text: "à pagar (Neste mês)",
      total: "R$10,234",
      color: "exit",
    },
  ];
  const [quarter, setQuarter] = useState(0);
  const [selectedYear, setSelectedYear] = useState(2025);

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
      name: "A Receber",
      data: [40, 45, 60, 45, 20, 35],
    },
    {
      name: "A Pagar",
      data: [55, 20, 35, 53, 34, 50],
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
      name: "A Receber",
      data: [45, 50, 55, 50, 25, 40],
    },
    {
      name: "A Pagar",
      data: [55, 20, 35, 53, 34, 50],
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
      name: "A Receber",
      data: [50, 55, 50, 55, 30, 45],
    },
    {
      name: "A Pagar",
      data: [55, 20, 35, 53, 34, 50],
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
      name: "A Receber",
      data: [55, 60, 65, 60, 35, 50],
    },
    {
      name: "A Pagar",
      data: [55, 20, 35, 53, 34, 50],
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
        <CardTitle>Dashboard</CardTitle>
        <div className="flex flex-row items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button type="button" color="primary" asChild>
                <Link href="#">{selectedYear}</Link>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuArrow />
              <DropdownMenuItem
                onSelect={() => setSelectedYear(2025)}
                className={cn(
                  selectedYear === 2025 && "bg-primary/40 text-white"
                )}
              >
                2025
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setSelectedYear(2024)}
                className={cn(
                  selectedYear === 2024 && "bg-primary/40 text-white"
                )}
              >
                2024
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setSelectedYear(2023)}
                className={cn(
                  selectedYear === 2023 && "bg-primary/40 text-white"
                )}
              >
                2023
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setSelectedYear(2022)}
                className={cn(
                  selectedYear === 2022 && "bg-primary/40 text-white"
                )}
              >
                2022
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button type="button" color="secondary" asChild>
            <Link href="#">Selecionar Data</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-2 ">
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 justify-start w-full bg-transparent h-full">
            {cards.map((item, index) => (
              <div
                className={cn(
                  "flex flex-col gap-1.5 rounded-md p-4 overflow-hidden data-[state=inactive]:opacity-50 items-start  relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden data-[state=active]:shadow-none data-[state=active]:before:block",
                  {
                    "bg-green-500 data-[state=active]:bg-green-50 dark:bg-primary/70":
                      item.color === "entry",
                    "bg-red-500 data-[state=active]:bg-red-50 dark:bg-orange-500":
                      item.color === "exit",
                  }
                )}
              >
                <span
                  className={cn(
                    "h-10 w-10 rounded-full bg-primary/40 absolute -top-3 -right-3 ring-8 ring-primary/30",
                    {
                      "bg-red-400 ring-red-200 dark:bg-orange-300 dark:ring-orange-400":
                        item.color === "exit",
                      "bg-green-400 ring-green-200 dark:bg-green-300 dark:ring-green-400":
                        item.color === "entry",
                    }
                  )}
                ></span>

                <span className="text-sm text-white dark:text-primary-foreground font-semibold capitalize relative z-10">
                  {item.text}
                </span>
                <span
                  className={`text-lg font-semibold text-white dark:text-primary-foreground`}
                >
                  {item.total}
                </span>
              </div>
            ))}
          </TabsList>
        </Tabs>
      </CardContent>
      <CardContent className="p-2">
        <CardTitle>Receitas x Despesas x À Receber x À Pagar</CardTitle>
        <FinanceChart series={selectedSeries} key={quarter} />
      </CardContent>
      <CardContent className="p-2 pb-10  flex flex-row justify-between">
        <Button
          className={` ${
            quarter === 0 ? "shadow-md shadow-primary text-primary" : ""
          } px-9 py-4 text-lg`}
          onClick={() => setQuarter(0)}
          type="button"
          color={quarter === 0 ? "secondary" : "primary"}
          asChild
        >
          <span>Na Semana</span>
        </Button>
        <Button
          className={` ${
            quarter === 1 ? "shadow-md shadow-primary text-primary" : ""
          } px-9 py-4 text-lg`}
          onClick={() => setQuarter(1)}
          type="button"
          color={quarter === 1 ? "secondary" : "primary"}
          asChild
        >
          <span>No Mês</span>
        </Button>
        <Button
          className={` ${
            quarter === 2 ? "shadow-md shadow-primary text-primary" : ""
          } px-9 py-4 text-lg`}
          onClick={() => setQuarter(2)}
          type="button"
          color={quarter === 2 ? "secondary" : "primary"}
          asChild
        >
          <span>No Trimestre</span>
        </Button>
        <Button
          className={` ${
            quarter === 3 ? "shadow-md shadow-primary text-primary" : ""
          } px-9 py-4 text-lg`}
          onClick={() => setQuarter(3)}
          type="button"
          color={quarter === 3 ? "secondary" : "primary"}
          asChild
        >
          <span>No Semestre</span>
        </Button>
      </CardContent>
    </Card>
  );
}
