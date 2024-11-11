import GaugeChart from "@/src/components/charts/GaugeChart";
import MultiValueBarChart from "@/src/components/charts/MultiValuesBarChart";
import BaseTable from "@/src/components/tables/baseTable";

export function RoundEfficiencyTabContent() {
  return (
    <div className="lg:grid lg:grid-cols-12 flex flex-col gap-4 mt-8">
      <div className="lg:col-span-12 lg:grid lg:grid-cols-12 flex flex-col gap-4">
        <div className="col-span-7 ">
          <MultiValueBarChart />
        </div>
        <div className="col-span-5">
          <BaseTable />
        </div>
      </div>
      <div className="lg:col-span-12 lg:grid lg:grid-cols-12 flex flex-col gap-4">
        <div className="col-span-7">
          <BaseTable />
        </div>
        <div className="col-span-5">
          <GaugeChart />
        </div>
      </div>
    </div>
  );
}
