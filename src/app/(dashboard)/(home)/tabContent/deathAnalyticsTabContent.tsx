import { morbidityStaticData } from "@/src/@staticData/morbidity";
import { BarChartWithDropdown } from "@/src/components/charts/BarChartWithDropdown";
import LineChart from "@/src/components/charts/LineChart";
import BaseTable from "@/src/components/tables/baseTable";

export function DeathAnalyticsTabContent() {
  return (
    <div className="lg:grid lg:grid-cols-12 flex flex-col gap-4 mt-8">
      <div className="col-span-12">
        <BarChartWithDropdown
          height={280}
          categories={morbidityStaticData.chartData.categories}
          series={morbidityStaticData.chartData.series}
        />
      </div>
      <div className="lg:col-span-12 lg:grid lg:grid-cols-12 flex flex-col gap-4 pb-28 md:pb-10">
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
