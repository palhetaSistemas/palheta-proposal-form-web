"use client";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function IncomeDonutGraph() {
  const series = [2200, 850, 1450, 1300, 900];
  const labels = [
    "Cliente A",
    "Cliente B",
    "Cliente C",
    "Cliente D",
    "Cliente E",
  ];

  const options = {
    labels: labels,
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
      markers: {
        size: 8,
      },
      formatter: function (seriesName: string, opts: any) {
        return `<span>${seriesName}</span>`;
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return `${val.toFixed(1)}%`;
      },
      style: {
        fontSize: "14px",
        fontWeight: "bold",
      },
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
              fontWeight: 500,
              offsetY: 5,
            },
            value: {
              fontSize: "15px",
              color: "#A3A3A3",
              fontWeight: 500,
            },
            total: {
              show: true,
              showAlways: true,
              label: "Total",
              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce(
                  (a: number, b: number) => a + b,
                  0
                );
              },
              color: "#A3A3A3",
              fontSize: "20px",
              fontWeight: 600,
            },
          },
        },
      },
    },
    colors: ["#F97400", "#013466", "#0095FF", "#FF5733", "#FFC300"],
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: { height: 200 },
        },
      },
      {
        breakpoint: 1920,
        options: {
          chart: { height: 300 },
        },
      },
      {
        breakpoint: 2560,
        options: {
          chart: { height: 200 },
        },
      },
      {
        breakpoint: 2561,
        options: {
          chart: { height: 450 },
        },
      },
    ],
  };

  return (
    <Card className="h-full">
      <CardHeader className="border-none pb-0 mb-5">
        <div className="text-xl font-semibold text-default-900">
          Receitas por Cliente
        </div>
      </CardHeader>
      <CardContent className="h-full flex items-center justify-center">
        <ReactApexChart options={options} series={series} type="donut" />
      </CardContent>
    </Card>
  );
}
