import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function MonthlyReportChart() {
  const [reportPeriod, setReportPeriod] = useState(0); // 0: Mensal, 1: Trimestral, 2: Anual
  return (
    <Card className="h-full rounded-l-none">
      <CardHeader className="flex-row  justify-between items-center mb-0">
        <CardTitle>Dados de Faturamento</CardTitle>
        <div className="flex flex-row items-center gap-2">
          <div className="bg-primary/20 relative p-2 rounded-md gap-2 flex">
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
      <CardContent className="px-2 py-2 overflow-x-auto pr-2 flex flex-row justify-between"></CardContent>

      {/* Botões de indicadores */}
      <CardContent className="px-2 py-2 flex flex-row justify-between gap-2"></CardContent>

      {/* Gráfico */}
      <CardContent className="px-2 py-2 overflow-x-auto"></CardContent>
    </Card>
  );
}
