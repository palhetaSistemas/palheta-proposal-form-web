"use client";
import { morbidityStaticData } from "@/src/@staticData/morbidity";
import { BarChartWithDropdown } from "@/src/components/charts/BarChartWithDropdown";
import LogoWhite from "@/public/images/logo/logo-white.png";
import Image from "next/image";
import Icon from "@/public/images/logo/icon.png";
import CountUp from "react-countup";
import { ChevronUp } from "lucide-react";
import SimpleTable from "../../(tables)/tailwindui-table/simple-table";

export function MortalityTabContent() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-8">
      <div className="col-span-4 grid gap-4">
        <Image src={LogoWhite} alt="logo" width={200} height={200} />
        <div className="relative flex w-full flex-col gap-14 rounded-3xl bg-[#202020] p-4 lg:h-52 xl:h-50">
          <span className="text-2xl">Quantidade de animais</span>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <span className="text-3xl font-semibold">
                <CountUp end={33222} />
              </span>
              <div className="flex flex-col text-[#09BD3C]">
                <ChevronUp size={16} />
                <span className="text-xs">+0,5%</span>
              </div>
            </div>
            <span className="text-sm text-[#09BD3C]">
              Em relação a mês passado
            </span>
          </div>
          <Image
            src={Icon}
            alt=""
            width={500}
            height={500}
            className="absolute bottom-2 right-2 w-28 object-contain opacity-50"
          />
        </div>
        <div className="relative flex w-full flex-col gap-14 rounded-3xl bg-[#202020] p-4 lg:h-52 xl:h-50">
          <span className="text-2xl">Quantidade de animais</span>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <span className="text-3xl font-semibold">
                <CountUp end={33222} />
              </span>
              <div className="flex flex-col text-[#09BD3C]">
                <ChevronUp size={16} />
                <span className="text-xs">+0,5%</span>
              </div>
            </div>
            <span className="text-sm text-[#09BD3C]">
              Em relação a mês passado
            </span>
          </div>
          <Image
            src={Icon}
            alt=""
            width={500}
            height={500}
            className="absolute bottom-2 right-2 w-28 object-contain opacity-50"
          />
        </div>
        <SimpleTable />
      </div>
      <div className="col-span-8 flex flex-col gap-4">
        <BarChartWithDropdown
          categories={morbidityStaticData.chartData.categories}
          series={morbidityStaticData.chartData.series}
        />
        <BarChartWithDropdown
          categories={morbidityStaticData.chartData.categories}
          series={morbidityStaticData.chartData.series}
        />
      </div>
    </div>
  );
}
