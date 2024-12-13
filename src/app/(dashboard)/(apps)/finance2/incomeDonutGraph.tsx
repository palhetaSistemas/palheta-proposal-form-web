"use client";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
// import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function IncomeDonutGraph() {
  const options = {
    series: [2200, 850, 1450],
    options: {
      labels: ["Fazenda Amaral", "Fazenda Santa Luzia", "Fazenda Sorriso"],
      chart: {
        type: "donut" as const,
        animations: {
          enabled: false,
        },
        background: "transparent",
      },
      legend: {
        show: true,
        position: "bottom" as const,
        horizontalAlign: "center" as const,
        floating: false,
        offsetY: 0,
        offsetX: 0,
        labels: {
          useSeriesColors: false,
          colors: "#fff",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "70%",
            background: "transparent",
            labels: {
              show: true,
              name: {
                fontSize: "16px",
                color: undefined,
                offsetY: 5,
              },
              value: {
                fontSize: "15px",
                color: "#A3A3A3",
              },
              total: {
                show: true,
                showAlways: true,
                label: "Total",
                fontSize: "22px",
                fontWeight: 600,
                color: "#A3A3A3",
              },
            },
          },
        },
      },
      colors: ["#22C55E", "#1F6D3C", "#7BAF8E"],
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 150,
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
              height: 200,
            },
          },
        },
        {
          breakpoint: 2561,
          options: {
            chart: {
              height: 450,
            },
          },
        },
      ],
    },
  };

  return (
    <Card className="h-full">
      <CardHeader className="border-none pb-0 mb-5">
        <div className="text-xl font-semibold text-default-900">
          Top 3 Maiores Receitas
        </div>
      </CardHeader>
      <CardContent>
        <ReactApexChart
          options={options.options}
          series={options.series}
          type="donut"
        />
      </CardContent>
    </Card>
  );
}
