"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { ChevronDown } from "lucide-react";
import FinanceChart from "./invoicing-chart";
import { ApexOptions } from "apexcharts";
import { cn } from "@/src/lib/utils";
import dynamic from "next/dynamic";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import Link from "next/link";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export function InvoicingCard() {
  const [graphsSelected, setGraphsSelected] = useState({
    revenue: false,
    avgSpend: true,
    leads: false,
    contracts: true,
    conversion: true,
  });

  const [chartOptions, setChartOptions] = useState({
    series: [],

    options: {
      chart: {
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 5,
          left: 2,
          blur: 5,
          opacity: 0.1,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      theme: {
        mode: "light",
      },
      colors: ["#93c5fd", "#3b82f6", "#1d4ed8", "#1e3a8a", "#013466"],
      stroke: {
        curve: "smooth",
      },
      legend: {
        show: false,
      },
      tooltip: {},
      markers: {
        size: 1,
      },
      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],
      },
      yaxis: {
        min: 0,
        labels: {
          show: true,
          formatter: (value: number) => `R$${value.toLocaleString()} mil`,
        },
      },
      responsive: [
        {
          breakpoint: 1920,
          options: {
            chart: {
              height: 300,
            },
          },
        },
        {
          breakpoint: 2560,
          options: {
            chart: {
              height: 300,
            },
          },
        },
        {
          breakpoint: 2561,
          options: {
            chart: {
              height: 350,
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    const series = [
      {
        name: "Faturamento",
        data: graphsSelected.revenue
          ? [40, 30, 50, 70, 60, 90, 50, 70, 60, 90]
          : [],
      },
      {
        name: "Ticket Médio",
        data: graphsSelected.avgSpend
          ? [31, 21, 41, 61, 51, 81, 41, 61, 51, 81]
          : [],
      },
      {
        name: "Leads",
        data: graphsSelected.leads
          ? [22, 12, 32, 52, 42, 72, 32, 52, 42, 72]
          : [],
      },
      {
        name: "Contratos",
        data: graphsSelected.contracts
          ? [13, 3, 23, 43, 33, 63, 23, 43, 33, 63]
          : [],
      },
      {
        name: "Conversão",
        data: graphsSelected.conversion
          ? [4, 0, 14, 34, 24, 54, 14, 34, 24, 54]
          : [],
      },
    ].filter((series) => series.data.length > 0);

    setChartOptions((prevOptions: any) => ({ ...prevOptions, series }));
  }, [graphsSelected]);

  const [quarter, setQuarter] = useState(0); // 0: Mensal, 1: Trimestral, 2: Anual
  const [selectedYear, setSelectedYear] = useState(2025);

  const seriesData = {
    0: [
      { name: "Faturamento", data: [90, 60, 70, 80, 50, 40] },
      { name: "Ticket Médio", data: [50, 55, 40, 30, 35, 45] },
      { name: "Leads", data: [40, 45, 60, 65, 20, 35] },
      { name: "Contratos", data: [42, 47, 62, 48, 22, 37] },
      { name: "Conversão", data: [44, 49, 64, 50, 24, 39] },
    ],
    1: [
      { name: "Despesas", data: [85, 65, 75, 70, 55, 45] },
      { name: "Receitas", data: [55, 50, 45, 35, 40, 46] },
      { name: "Clientes", data: [45, 50, 55, 52, 25, 42] },
      { name: "Contratos", data: [43, 48, 63, 49, 23, 38] },
      { name: "Conversão", data: [41, 46, 61, 47, 21, 36] },
    ],
    2: [
      { name: "Despesas", data: [80, 70, 60, 90, 65, 50] },
      { name: "Receitas", data: [60, 65, 50, 40, 45, 51] },
      { name: "Clientes", data: [50, 55, 53, 57, 30, 47] },
      { name: "Contratos", data: [44, 50, 66, 52, 26, 40] },
      { name: "Conversão", data: [42, 47, 62, 48, 22, 37] },
    ],
  };
  const [activeCards, setActiveCards] = useState<string[]>([
    seriesData[0][0].name,
  ]);
  const cards = seriesData[0].map((item) => item.name); // Gerar nomes de botões

  // Alternar botão ativo/inativo
  const toggleCard = (cardName: string) => {
    setActiveCards((prev) => {
      if (prev.includes(cardName)) {
        // Evitar que todos fiquem desativados
        return prev.length > 1
          ? prev.filter((name) => name !== cardName)
          : prev;
      } else {
        return [...prev, cardName];
      }
    });
  };

  // Filtrar séries ativas
  const selectedSeries = (
    seriesData[quarter as keyof typeof seriesData]?.filter((item) =>
      activeCards.includes(item.name)
    ) || []
  ).filter((item) => Array.isArray(item.data) && item.data.length > 0);

  const safeSeries =
    selectedSeries.length > 0
      ? selectedSeries.map((item) => ({
          name: item.name,
          data: Array.isArray(item.data) ? item.data : [],
        }))
      : [{ name: "Sem Dados", data: [] }];

  return (
    <Card className="h-full">
      <CardHeader className="flex-row justify-between items-center mb-0">
        <CardTitle>Dados de Faturamento</CardTitle>
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
        </div>
      </CardHeader>

      {/* Botões de período */}
      <CardContent className="px-2 py-2 overflow-x-auto pr-2 flex flex-row justify-between">
        <div className="bg-primary/20 relative p-2 rounded-md gap-2 flex">
          <div className="w-full flex relative ">
            <div
              className="absolute   bg-white transition-transform duration-300 transform rounded-md h-full w-1/3"
              style={{
                transform: `translateX(${quarter * 100}%)`, // Mover 100% a cada botão clicado
              }}
            />
            {/* Botão Mensal */}
            <Button
              asChild
              className="bg-transparent text-primary relative z-10 w-1/3"
              onClick={() => setQuarter(0)}
              type="button"
            >
              <span>Mensal</span>
            </Button>
            {/* Botão Trimestral */}
            <Button
              className="bg-transparent text-primary relative z-10 w-1/3"
              onClick={() => setQuarter(1)}
              type="button"
            >
              <span>Trimestral</span>
            </Button>
            {/* Botão Anual */}
            <Button
              className="bg-transparent text-primary relative z-10 w-1/3"
              onClick={() => setQuarter(2)}
              type="button"
            >
              <span>Anual</span>
            </Button>
          </div>
        </div>
      </CardContent>

      {/* Botões de indicadores */}
      <CardContent className="px-2 py-2 flex flex-row justify-between gap-2">
        <button
          type="button"
          className={cn(
            "flex flex-col bg-gray-200 text-gray-600 gap-1.5 w-full rounded-md p-4 ",
            graphsSelected.revenue && "bg-primary text-white"
          )}
          onClick={() => {
            setGraphsSelected({
              ...graphsSelected,
              revenue: !graphsSelected.revenue,
            });
          }}
        >
          Faturamento
        </button>
        <button
          type="button"
          className={cn(
            "flex flex-col bg-gray-200 text-gray-600 gap-1.5 w-full rounded-md p-4 ",
            graphsSelected.avgSpend && "bg-primary text-white"
          )}
          onClick={() => {
            setGraphsSelected({
              ...graphsSelected,
              avgSpend: !graphsSelected.avgSpend,
            });
          }}
        >
          Ticket Médio
        </button>
        <button
          type="button"
          className={cn(
            "flex flex-col bg-gray-200 text-gray-600 gap-1.5 w-full rounded-md p-4 ",
            graphsSelected.leads && "bg-primary text-white"
          )}
          onClick={() => {
            setGraphsSelected({
              ...graphsSelected,
              leads: !graphsSelected.leads,
            });
          }}
        >
          Leads
        </button>
        <button
          type="button"
          className={cn(
            "flex flex-col bg-gray-200 text-gray-600 gap-1.5 w-full rounded-md p-4 ",
            graphsSelected.contracts && "bg-primary text-white"
          )}
          onClick={() => {
            setGraphsSelected({
              ...graphsSelected,
              contracts: !graphsSelected.contracts,
            });
          }}
        >
          Contratos
        </button>
        <button
          type="button"
          className={cn(
            "flex flex-col bg-gray-200 text-gray-600 gap-1.5 w-full rounded-md p-4 ",
            graphsSelected.conversion && "bg-primary text-white"
          )}
          onClick={() => {
            setGraphsSelected({
              ...graphsSelected,
              conversion: !graphsSelected.conversion,
            });
          }}
        >
          Conversão
        </button>
      </CardContent>

      {/* Gráfico */}
      <CardContent className="px-2 py-2 overflow-x-auto">
        <ReactApexChart
          options={chartOptions.options as ApexOptions}
          series={chartOptions.series}
          type="line"
        />
      </CardContent>
    </Card>
  );
}
