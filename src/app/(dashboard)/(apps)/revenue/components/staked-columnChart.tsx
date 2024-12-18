"use client";
import dynamic from "next/dynamic";

// Carregar o ApexCharts dinamicamente
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface StackedColumnChartProps {
  series: ApexAxisChartSeries;
  categories: string[];
}

const StackedColumnChart = ({
  series,
  categories,
}: StackedColumnChartProps) => {
  // Calcular os totais acumulados para cada mês
  const totals = categories.map((_, index) =>
    series.reduce((acc, serie) => {
      const value = serie.data[index];
      return acc + (typeof value === "number" ? value : 0);
    }, 0)
  );

  const options: any = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%", // Ajustar largura das colunas
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [series.length - 1], // Apenas na última série
      formatter: (_: any, { dataPointIndex }: { dataPointIndex: number }) =>
        `Total: R$${totals[dataPointIndex].toLocaleString()}`,
      offsetY: 40, // Posição do total no topo
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        colors: ["#1E3A8A"], // Azul escuro para todas as labels de total
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: ["#1E3A8A", "#1E3A8A", "#1E3A8A"], // Azul escuro para todas as labels
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#94A3B8"], // Cinza claro para o eixo Y
          fontSize: "12px",
        },
        formatter: (value: number) => `R$${value.toLocaleString()}`,
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    grid: {
      show: false, // Remove a grade
    },
    colors: ["#2563EB", "#60A5FA", "#1E3A8A"], // Cores organizadas para as séries
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      markers: {
        width: 16, // Aumenta o tamanho da bolinha
        height: 16,
        shape: "circle", // Garante que seja redonda
      },
      labels: {
        colors: "#1E3A8A", // Cor do texto na legenda
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <Chart options={options} series={series} type="bar" height={400} />
    </div>
  );
};

export default StackedColumnChart;
