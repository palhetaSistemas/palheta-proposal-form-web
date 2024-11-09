import { morbidityStaticData } from "@/src/@staticData/morbidity";
import ChartWithTable from "@/src/components/charts/chartWithTable";

export function TreatmentFinancialTabContent() {
  return (
    <div className="gap-4 flex flex-col">
      <ChartWithTable
        title="Custo de Aplicação"
        subtitle="Por Doenças"
        chartTitle=""
        colors={["#22C55E"]}
        height={220}
        chartData={morbidityStaticData.chartData}
        tableData={morbidityStaticData.tableData}
      />
      <ChartWithTable
        title="Custo de Aplicação"
        subtitle="Por medicamento"
        height={220}
        chartTitle=""
        chartData={morbidityStaticData.chartData}
        tableData={morbidityStaticData.tableData}
      />
    </div>
  );
}
