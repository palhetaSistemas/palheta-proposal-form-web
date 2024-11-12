import { morbidityStaticData } from "@/src/@staticData/morbidity";
import { BarChartWithDropdown } from "@/src/components/charts/BarChartWithDropdown";
import TableWithDropdown from "@/src/components/tables/TableWithDropdown";
import { MortalityByRace } from "./mortalityByRace";

export function MedicationAnalyticsTabContent() {
  return (
    <div className="lg:grid lg:grid-cols-12 flex flex-col gap-4 mt-8">
      <div className="lg:col-span-12 gap-4 lg:grid lg:grid-cols-12 flex flex-col ">
        <div className="col-span-6">
          <MortalityByRace />
        </div>
        <div className="col-span-6">
          <TableWithDropdown />
        </div>
      </div>
      <div className="lg:col-span-12 gap-4 lg:grid lg:grid-cols-12 flex flex-col pb-28 md:pb-10">
        <div className="col-span-6">
          <TableWithDropdown />
        </div>
        <div className="col-span-6">
          <BarChartWithDropdown
            categories={morbidityStaticData.chartData.categories}
            series={morbidityStaticData.chartData.series}
          />
        </div>
      </div>
    </div>
  );
}
