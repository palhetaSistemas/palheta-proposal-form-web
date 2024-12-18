"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { ChevronDown } from "lucide-react";
import FinanceChart from "./invoicing-chart";

export function InvoicingCard() {
  const [quarter, setQuarter] = useState(0); // 0: Mensal, 1: Trimestral, 2: Anual

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
          <Button type="button" color="primary">
            <span>2024</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
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
        {cards.map((item) => (
          <button
            type="button"
            key={item}
            className={`flex flex-col gap-1.5 w-full rounded-md p-4 ${
              activeCards.includes(item)
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => toggleCard(item)}
          >
            {item}
          </button>
        ))}
      </CardContent>

      {/* Gráfico */}
      <CardContent className="px-2 py-2 overflow-x-auto">
        <FinanceChart
          series={safeSeries}
          key={quarter + activeCards.join(",")}
        />
      </CardContent>
    </Card>
  );
}
