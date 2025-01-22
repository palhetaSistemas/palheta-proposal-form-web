import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  TableBody,
  TableCell,
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { useState } from "react";

export function MonthlyReport() {
  const [reportPeriod, setReportPeriod] = useState(0); // 0: Mensal, 1: Trimestral, 2: Anual

  const columns = [
    {
      key: "month",
      label: "Mês",
    },
    {
      key: "conversion",
      label: "Leads",
    },
    {
      key: "conversion",
      label: "Conversão",
    },
    {
      key: "contracts",
      label: "Contratos",
    },
    {
      key: "avgSpend",
      label: "Ticket Médio",
    },
    {
      key: "revenue",
      label: "Faturamento",
    },
  ];

  interface User {
    id: number;
    month: string;
    conversion: number;
    contracts: number;
    avgSpend: number;
    revenue: number;
  }

  const users: User[] = [
    {
      id: 1,
      month: "Jan/24",
      conversion: 3548,
      contracts: 8,
      avgSpend: 3548,
      revenue: 35345.32,
    },
    {
      id: 2,
      month: "Fev/24",
      conversion: 3548,
      contracts: 8,
      avgSpend: 3548,
      revenue: 35345.32,
    },
    {
      id: 3,
      month: "Mar/24",
      conversion: 3548,
      contracts: 8,
      avgSpend: 3548,
      revenue: 35345.32,
    },
    {
      id: 4,
      month: "Abr/24",
      conversion: 3548,
      contracts: 8,
      avgSpend: 3548,
      revenue: 35345.32,
    },
    {
      id: 5,
      month: "Maio/24",
      conversion: 3548,
      contracts: 8,
      avgSpend: 3548,
      revenue: 35345.32,
    },
    {
      id: 6,
      month: "Jun/24",
      conversion: 3548,
      contracts: 8,
      avgSpend: 3548,
      revenue: 35345.32,
    },
    {
      id: 7,
      month: "Jul/24",
      conversion: 3548,
      contracts: 8,
      avgSpend: 3548,
      revenue: 35345.32,
    },
  ];

  return (
    <Card className="h-full rounded-r-none">
      <CardHeader className="flex-row  justify-between items-center mb-0 p-2">
        <CardTitle>Dados de Faturamento</CardTitle>
        <div className="flex flex-row items-center gap-2">
          <div className="bg-[#8C8C8C]/20 relative p-2 rounded-md gap-2 flex">
            <div className="w-full flex relative ">
              <div
                className="absolute   bg-white transition-transform duration-300 transform rounded-md h-full w-1/3"
                style={{
                  transform: `translateX(${reportPeriod * 100}%)`, // Mover 100% a cada botão clicado
                }}
              />
              {/* Botão Mensal */}
              <Button
                className="bg-transparent text-primary relative z-10 w-1/3"
                onClick={() => setReportPeriod(0)}
                type="button"
              >
                <span>Mensal</span>
              </Button>
              {/* Botão Trimestral */}
              <Button
                className="bg-transparent text-primary relative z-10 w-1/3"
                onClick={() => setReportPeriod(1)}
                type="button"
              >
                <span>Trimestral</span>
              </Button>
              {/* Botão Anual */}
              <Button
                className="bg-transparent text-primary relative z-10 w-1/3"
                onClick={() => setReportPeriod(2)}
                type="button"
              >
                <span>Anual</span>
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>

      {/* Botões de período */}
      <CardContent className="px-0  pb-0 overflow-x-auto">
        <Table>
          <TableHeader className="bg-default-200">
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="text-sm font-semibold text-white last:text-right bg-primary h-12"
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id} className="hover:bg-default-100 ">
                <TableCell className="text-sm font-medium text-default-600 py-4 whitespace-nowrap">
                  {item.month}
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-4 whitespace-nowrap">
                  {item.conversion}
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-4 whitespace-nowrap">
                  {item.conversion.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-4 whitespace-nowrap">
                  {item.contracts}
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-4 whitespace-nowrap">
                  {item.avgSpend.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-4 whitespace-nowrap">
                  {item.revenue.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
