"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/src/store";
import { useTheme } from "next-themes";
import { themes } from "@/src/config/thems";
import {
  getGridConfig,
  getXAxisConfig,
  getYAxisConfig,
} from "@/src/lib/appex-chart-options";

interface FinanceChartProps {
  series: ApexAxisChartSeries;
  height?: number;
}

const FinanceChart = ({ series, height = 300 }: FinanceChartProps) => {
  const { theme: config } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#EF4444", "#21C45D", "#2563EB", "#2563EB", "#2563EB", "#2563EB"], // Cores das linhas: Vermelha, Verde e Azul
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },

    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: ["#EF4444", "#21C45D", "#2563EB", "#2563EB", "#2563EB"],
      strokeWidth: 2,
    },
    yaxis: getYAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    xaxis: getXAxisConfig(
      `hsl(${theme?.cssVars[mode === "dark" ? "dark" : "light"].chartLabel})`
    ),
    legend: {
      show: false, // Esconde as legendas
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height={height}
      width={"100%"}
    />
  );
};

export default FinanceChart;
