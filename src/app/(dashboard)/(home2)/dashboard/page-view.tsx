"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import ReportsSnapshot from "./components/reports-snapshot";
import CountryMap from "./components/country-map";
import UserDeviceReport from "./components/user-device-report";
import UserStats from "./components/user-stats-chart";
import UsersStat from "../../../../components/charts/chartWithTable";
import ReportsArea from "./components/reports-area";
import DashboardSelect from "@/src/components/dasboard-select";
import TopTen from "./components/top-ten";
import TopPage from "./components/top-page";
import DatePickerWithRange from "@/src/components/date-picker-with-range";
import { morbidityStaticData } from "@/src/@staticData/morbidity";
import WorksNote from "../project/components/works-note";
import UpcomingDeadline from "../project/components/upcoming-deadlines";
import OverdueTask from "../project/components/overdue-task";
import ChartWithTable from "../../../../components/charts/chartWithTable";

interface DashboardPageViewProps {
  trans: {
    [key: string]: string;
  };
}
const DashboardPageView = ({ trans }: DashboardPageViewProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">
          Dashboard Inicial
        </div>
        <DatePickerWithRange />
      </div>
      {/* reports area */}
      <div className="grid grid-cols-12  gap-6 ">
        <div className="col-span-12 lg:col-span-8">
          <ReportsSnapshot />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ChartWithTable
            chartData={morbidityStaticData.chartData}
            chartTitle="Titulo"
            subtitle="subtitulo"
            tableData={morbidityStaticData.tableData}
            title="Titulo"
          />
        </div>
      </div>
      <div className="flex justify-between w-full gap-4">
        <ReportsArea />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <WorksNote />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <TopTen />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7">
          <OverdueTask />
        </div>
        <div className="col-span-5">
          <UpcomingDeadline />
        </div>
      </div>
    </div>
  );
};

export default DashboardPageView;
