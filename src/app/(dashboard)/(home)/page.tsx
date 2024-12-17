import DatePickerWithRange from "@/src/components/date-picker-with-range";
import { morbidityStaticData } from "@/src/@staticData/morbidity";
import { IndicatorCard } from "./components/indicator-cards";
import { IncomeDonutGraph } from "./components/income-DonutGraph";
import { FinancialOverview } from "./components/financial-overview";
import RevenueComponent from "./components/revenue-graph/revenue-component";
import OutstandingPayments from "./components/outstanding-payments";
import Task from "./components/overdue-task";
import ActiveProjectsComponent from "./components/active-projects/active-project-component";
export default async function Dashboard({ params }: { params: string }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">Dashboard</div>
        <DatePickerWithRange />
      </div>
      {/* reports area */}
      <div className="grid grid-cols-12  gap-6 ">
        <div className="col-span-12 ">
          <IndicatorCard />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <FinancialOverview />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <IncomeDonutGraph />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <RevenueComponent />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <OutstandingPayments />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <ActiveProjectsComponent />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Task />
        </div>
      </div>
    </div>
  );
}
