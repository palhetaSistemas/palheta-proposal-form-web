import { morbidityStaticData } from "@/src/@staticData/morbidity";
import { BarChartWithDropdown } from "@/src/components/charts/BarChartWithDropdown";
import TableWithDropdown from "@/src/components/tables/TableWithDropdown";

export function MedicationAnalyticsTabContent() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-8">
      <div className="col-span-12 gap-4 grid grid-cols-12 ">
        <div className="col-span-6"></div>
        <div className="col-span-6">
          <TableWithDropdown />
        </div>
      </div>
      <div className="col-span-12 gap-4 grid grid-cols-12 ">
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
