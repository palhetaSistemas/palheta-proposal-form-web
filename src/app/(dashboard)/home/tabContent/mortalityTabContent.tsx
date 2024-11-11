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
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 mt-8">
      <div className="lg:col-span-4 lg:grid gap-4 flex flex-col">
        <Image
          src={LogoWhite}
          alt="logo"
          width={200}
          height={200}
          className="self-center"
        />
        <div className="relative h-max flex w-full flex-col gap-2 rounded-3xl bg-[#202020] p-4 ">
          <span className="text-xl lg:text-2xl">Quantidade de animais</span>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <span className="lg:text-3xl text-2xl font-semibold">
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
            className="absolute bottom-2 right-2 lg:w-20 w-16 object-contain opacity-50"
          />
        </div>
        <div className="relative flex  h-max  w-full flex-col gap-2 rounded-3xl bg-[#202020] p-4 ">
          <span className="text-xl lg:text-2xl">Quantidade de animais</span>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <span className="lg:text-3xl text-2xl font-semibold">
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
            className="absolute bottom-2 right-2 lg:w-20 w-16 object-contain opacity-50"
          />
        </div>
        <div className="relative flex  h-max  w-full flex-col gap-2 rounded-3xl bg-[#202020] p-4 ">
          <span className="text-xl lg:text-2xl">Quantidade de animais</span>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <span className="lg:text-3xl text-2xl font-semibold">
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
            className="absolute bottom-2 right-2 lg:w-20 w-16 object-contain opacity-50"
          />
        </div>
        <SimpleTable />
      </div>
      <div className="col-span-8 flex flex-col gap-4">
        <BarChartWithDropdown
          height={380}
          categories={morbidityStaticData.chartData.categories}
          series={morbidityStaticData.chartData.series}
        />
        <BarChartWithDropdown
          height={380}
          categories={morbidityStaticData.chartData.categories}
          series={morbidityStaticData.chartData.series}
        />
      </div>
    </div>
  );
}
