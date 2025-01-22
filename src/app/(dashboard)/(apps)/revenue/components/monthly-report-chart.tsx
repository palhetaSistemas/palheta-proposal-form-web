import { Chart } from "@/src/components/svg";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { themes } from "@/src/config/thems";
import {
  getGridConfig,
  getXAxisConfig,
  getYAxisConfig,
} from "@/src/lib/appex-chart-options";
import { cn } from "@/src/lib/utils";
import { useThemeStore } from "@/src/store";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export function MonthlyReportChart() {
  const [reportPeriod, setReportPeriod] = useState(0); // 0: Mensal, 1: Trimestral, 2: Anual
  const [selectedOption, setSelectedOption] = useState("Mês");
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const allUsersSeries = [
    {
      data: [
        10, 50, 90, 130, 160, 135, 120, 140, 128, 150, 182, 190, 200, 180, 157,
        138, 120, 108, 70, 42, 10, 50, 90, 130, 160, 135, 120, 140, 128, 150,
        182, 190, 200, 180, 157, 138, 120, 108, 70, 42, 10, 50, 90, 130, 160,
        135, 120, 140, 128, 150, 182, 190, 200, 180, 157, 138, 120, 108, 70, 42,
        10, 50, 90, 130, 160, 135, 120, 140, 128, 150, 182, 190, 200, 180, 157,
        138, 120, 108, 70, 42, 10, 50, 90, 130, 160, 135, 120, 140, 128, 150,
        182, 190, 200, 180, 157, 138, 120, 108, 70, 42, 10, 50, 90, 130, 160,
        135, 120, 140, 128, 150, 182, 190, 200, 180, 157, 138, 120,
      ],
    },
  ];

  const options: any = {
    chart: {
      animations: {
        enabled: true,
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 5,
    },
    colors: ["#013466"],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird})`
    ),
    fill: {
      type: "gradient",
      colors: ["#013466", "#000"],
      gradient: {
        shadeIntensity: 0.1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [50, 100, 0],
      },
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    xaxis: getXAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 175,
          },
        },
      },
      {
        breakpoint: 1440,
        options: {
          chart: {
            height: 200,
          },
        },
      },
      {
        breakpoint: 1920,
        options: {
          chart: {
            height: 250,
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
            height: 300,
          },
        },
      },
    ],
  };

  return (
    <Card className="h-full rounded-l-none">
      <CardHeader className="flex-row p-2 justify-between items-center mb-0">
        <CardTitle>Em Gráficos</CardTitle>
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

      <ReactApexChart
        options={options}
        series={allUsersSeries}
        type="area"
        width={"100%"}
      />
      <CardFooter className="w-full h-12 bg-primary text-white items-center p-0 px-2 flex flex-row justify-evenly">
        <span
          onClick={() => setSelectedOption("Mês")}
          className={cn(
            "text-white cursor-pointer text-sm opacity-50 flex items-center justify-center flex-col gap-0.5",
            selectedOption === "Mês" && "font-semibold opacity-100"
          )}
        >
          Mês
          <div
            className={cn(
              "w-2/3 h-px hidden bg-white",
              selectedOption === "Mês" && "block"
            )}
          />
        </span>
        <span
          onClick={() => setSelectedOption("Leads")}
          className={cn(
            "text-white cursor-pointer text-sm opacity-50 flex items-center justify-center flex-col gap-0.5",
            selectedOption === "Leads" && "font-semibold opacity-100"
          )}
        >
          Leads
          <div
            className={cn(
              "w-2/3 h-px hidden bg-white",
              selectedOption === "Leads" && "block"
            )}
          />
        </span>
        <span
          onClick={() => setSelectedOption("Conversão")}
          className={cn(
            "text-white cursor-pointer text-sm opacity-50 flex items-center justify-center flex-col gap-0.5",
            selectedOption === "Conversão" && "font-semibold opacity-100"
          )}
        >
          Conversão
          <div
            className={cn(
              "w-2/3 h-px hidden bg-white",
              selectedOption === "Conversão" && "block"
            )}
          />
        </span>
        <span
          onClick={() => setSelectedOption("Contratos")}
          className={cn(
            "text-white cursor-pointer text-sm opacity-50 flex items-center justify-center flex-col gap-0.5",
            selectedOption === "Contratos" && "font-semibold opacity-100"
          )}
        >
          Contratos
          <div
            className={cn(
              "w-2/3 h-px hidden bg-white",
              selectedOption === "Contratos" && "block"
            )}
          />
        </span>
        <span
          onClick={() => setSelectedOption("Ticket Médio")}
          className={cn(
            "text-white cursor-pointer text-sm opacity-50 flex items-center justify-center flex-col gap-0.5",
            selectedOption === "Ticket Médio" && "font-semibold opacity-100"
          )}
        >
          Ticket Médio
          <div
            className={cn(
              "w-2/3 h-px hidden bg-white",
              selectedOption === "Ticket Médio" && "block"
            )}
          />
        </span>
        <span
          onClick={() => setSelectedOption("Faturamento")}
          className={cn(
            "text-white cursor-pointer text-sm opacity-50 flex items-center justify-center flex-col gap-0.5",
            selectedOption === "Faturamento" && "font-semibold opacity-100"
          )}
        >
          Faturamento
          <div
            className={cn(
              "w-2/3 h-px hidden bg-white",
              selectedOption === "Faturamento" && "block"
            )}
          />
        </span>
      </CardFooter>
    </Card>
  );
}
