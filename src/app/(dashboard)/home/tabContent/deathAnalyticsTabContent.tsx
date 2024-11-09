import { morbidityStaticData } from "@/src/@staticData/morbidity";
import { BarChartWithDropdown } from "@/src/components/charts/BarChartWithDropdown";
import LineChart from "@/src/components/charts/LineChart";
import BaseTable from "@/src/components/tables/baseTable";

export function DeathAnalyticsTabContent() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-8">
      <div className="col-span-12">
        <BarChartWithDropdown
          height={280}
          categories={morbidityStaticData.chartData.categories}
          series={morbidityStaticData.chartData.series}
        />
      </div>
      <div className="col-span-12 grid grid-cols-12 gap-4">
        <div className="col-span-5">
          <BaseTable />
        </div>
        <div className="col-span-7">
          <LineChart height={260} />
        </div>
      </div>
    </div>
  );
}
