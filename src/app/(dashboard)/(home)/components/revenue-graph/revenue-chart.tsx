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

interface RevenueChartProps {
  series: ApexAxisChartSeries;
  chartColor?: string;
  height?: number;
}

const RevenueChart = ({
  series,
  chartColor,
  height = 300,
}: RevenueChartProps) => {
  const { theme: config, setTheme: setConfig } = useThemeStore();
  const { theme: mode } = useTheme();

  const theme = themes.find((theme) => theme.name === config);

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
      colors: ["#21C45D", "#fff"],
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
            height: 200,
          },
        },
      },
      {
        breakpoint: 1440,
        options: {
          chart: {
            height: 250,
          },
        },
      },
      {
        breakpoint: 1920,
        options: {
          chart: {
            height: 350,
          },
        },
      },
      {
        breakpoint: 2560,
        options: {
          chart: {
            height: 400,
          },
        },
      },
      {
        breakpoint: 2561,
        options: {
          chart: {
            height: 400,
          },
        },
      },
    ],
  };
  return <Chart options={options} series={series} type="area" width={"100%"} />;
};

export default RevenueChart;
