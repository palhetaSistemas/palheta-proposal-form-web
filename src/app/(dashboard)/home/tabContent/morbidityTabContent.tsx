"use client";

import { morbidityStaticData } from "@/src/@staticData/morbidity";
import { CardWithIcon } from "@/src/components/cards/CardWithIcon";
import DoubleBarChart from "@/src/components/charts/DoubleBarChart";
import ChartWithTable from "@/src/components/charts/chartWithTable";
import { Docs } from "@/src/components/svg";

export function MorbidityTabContent() {
  return (
    <div className="mt-8">
      <div className="lg:grid lg:grid-cols-12 flex flex-col gap-4">
        <div className="col-span-6 grid gap-4 ">
          <div className="flex w-full flex-col lg:flex-row gap-4">
            <CardWithIcon
              id={1}
              name={"Total Project"}
              count={"1206"}
              rate={"8.2"}
              icon={<Docs className="w-6 h-6 text-primary" />}
              color={"primary"}
            />
            <CardWithIcon
              id={1}
              name={"Total Project"}
              count={"1206"}
              rate={"8.2"}
              icon={<Docs className="w-6 h-6 text-primary" />}
              color={"primary"}
            />
          </div>
          <DoubleBarChart />
        </div>
        <div className="col-span-6">
          <ChartWithTable
            title="Morbidade Média por Mês"
            subtitle="Últimos 12 Meses"
            chartTitle="Meses"
            chartData={morbidityStaticData.chartData}
            tableData={morbidityStaticData.tableData}
          />
        </div>
      </div>
    </div>
  );
}
