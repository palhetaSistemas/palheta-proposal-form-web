import { getProjects } from "@/src/config/project-config";
import ProjectsView from "./projects-view";
import ReportsSnapshot from "../../(home2)/dashboard/components/reports-snapshot";
import UsersStat from "@/src/components/landing-page/color-schemas/users-stat";
import { morbidityStaticData } from "@/src/@staticData/morbidity";
import ChartWithTable from "@/src/components/charts/chartWithTable";
import ReportsArea from "./reports-area";
import { AnimalsDonutGraph } from "./animalsDonutGraph";
import { RaceDonutGraph } from "./raceDonutGraph";

export default async function ProjectPage({ params }: { params: string }) {
  const projects = await getProjects();

  return (
    <div>
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
        <div className="flex gap-4 items-center flex-wrap justify-between col-span-12 lg:col-span-4 w-full">
          <ReportsArea />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <AnimalsDonutGraph />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <RaceDonutGraph />
        </div>
      </div>
    </div>
  );
}
