"use client";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Tags } from "lucide-react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function HigherCostsDonutGraph() {
  const series = [2200, 850, 1450];
  const labels = ["Colaboradores", "Escritório", "Viagens e Vales"];

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
      position: "right" as const,
      horizontalAlign: "center" as const,
      markers: {
        size: 12,
      },
      formatter: function (seriesName: string, opts: any) {
        return `<span>${seriesName}</span>`;
      },
    },
    dataLabels: {
      enabled: false,
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
    colors: ["#DC2626", "#FFD1A7", "#FF9E69"],
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
          Top 3 Maiores Custos
        </div>
      </CardHeader>
      <CardContent>
        <ReactApexChart options={options} series={series} type="donut" />
      </CardContent>
      <CardContent className="flex items-center justify-center">
        <Button
          color="secondary"
          className="border bg-white border-primary font-bold"
        >
          <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
          <span>ENTRADAS E SAÍDAS</span>
        </Button>
      </CardContent>
    </Card>
  );
}
