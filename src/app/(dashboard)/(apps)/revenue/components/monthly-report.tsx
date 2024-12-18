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
      key: "employee",
      label: "Responsável",
    },
    {
      key: "task name",
      label: "Titulo",
    },
    {
      key: "deadline",
      label: "Data Final",
    },
  ];

  interface User {
    id: number;
    name: string;
    task: string;
    deadline: string;
    overdue: string;
  }

  const users: User[] = [
    {
      id: 1,
      name: "João da Silva",
      task: "Ligar para cliente x",
      deadline: "21 Jan 2024",
      overdue: "01",
    },
    {
      id: 2,
      name: "João da Silva",
      task: "Enviar relatório para cliente",
      deadline: "21 Jan 2024",
      overdue: "01",
    },
    {
      id: 3,
      name: "João da Silva",
      task: "Visitar o cliente",
      deadline: "21 Jan 2024",
      overdue: "01",
    },
    {
      id: 4,
      name: "João da Silva",
      task: "Levar vacinas para fazenda",
      deadline: "21 Jan 2024",
      overdue: "01",
    },
    {
      id: 5,
      name: "João da Silva",
      task: "Entregar produtos",
      deadline: "21 Jan 2024",
      overdue: "01",
    },
  ];
  return (
    <Card className="h-full rounded-r-none">
      <CardHeader className="flex-row  justify-between items-center mb-0">
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
                  className="text-sm font-semibold text-default-800 last:text-right  h-12"
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id} className="hover:bg-default-100">
                <TableCell className="text-sm font-medium text-default-600 py-1 overflow-hidden text-ellipsis whitespace-nowrap max-w-[181px]">
                  {item.task}
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-1 whitespace-nowrap">
                  {item.deadline}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
