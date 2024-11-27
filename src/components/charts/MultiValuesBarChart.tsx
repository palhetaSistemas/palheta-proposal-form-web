"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useThemeStore } from "@/src/store";
import { useTheme } from "next-themes";
import { themes } from "@/src/config/thems";
import { getGridConfig, getYAxisConfig } from "@/src/lib/appex-chart-options";
import RevinueChart from "@/src/app/(dashboard)/(home2)/ecommerce/components/revinue-chart";
import DashboardSelect from "../dasboard-select";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const MultiValueBarChart = ({ height = 350 }) => {
  return (
    <Card>
      <CardHeader className="border-none pb-0 mb-0">
        <div className="flex flex-wrap items-center gap-3">
          <CardTitle className="flex-1 whitespace-nowrap">
            Average Revenue
          </CardTitle>
        </div>
      </CardHeader>
      <RevinueChart />
    </Card>
  );
};

export default MultiValueBarChart;
