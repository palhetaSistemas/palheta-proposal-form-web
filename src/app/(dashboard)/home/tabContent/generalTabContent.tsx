"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { twMerge } from "tailwind-merge";
import LogoWhite from "@/public/images/logo/logo-white.png";
import LogoIcon from "@/public/images/logo/icon.png";
import BlueGraph from "@/public/images/graph/blueGraph.png";
import RedGraph from "@/public/images/graph/redGraph.png";

export function GeneralTabContent() {
  const data = [
    {
      title: "Mortalidade",
      subtitle: "Referente aos Níveis de Mortalidade da Fazenda",
      firstCardDescription: "Mortes Totais",
      firstCardValue: 562,
      firstCardPercentage: 2,
      secondCardDescription: "Mortes percentuais",
      secondCardValue: 82,
      secondCardPercentage: -2,
    },
    {
      title: "Morbidade",
      subtitle: "Referente aos Níveis de Morbidade da Fazenda",
      firstCardDescription: "Animais Tratados",
      firstCardValue: 562,
      firstCardPercentage: 2,
      secondCardDescription: "Taxa de Morbidade",
      secondCardValue: 82,
      secondCardPercentage: -2,
    },
    {
      title: "Letalidade",
      subtitle: "Referente aos Níveis de Letalidade da Fazenda",
      firstCardDescription: "Animais Tratados",
      firstCardValue: 562,
      firstCardPercentage: 2,
      secondCardDescription: "Mortes",
      secondCardValue: 82,
      secondCardPercentage: -2,
    },
  ];

  return (
    <div>
      <div className="mt-8 flex flex-col gap-8">
        <div className="relative flex h-full w-full items-center flex-col-reverse justify-between lg:h-40 lg:flex-row">
          <span className="text-lg font-semibold lg:w-2/5 lg:text-2xl">
            Alguns Números Gerais de sua Fazenda, sua Criação e seus
            Investimentos:
          </span>
          <Image
            src={LogoWhite}
            alt=""
            width={500}
            height={250}
            quality={100}
            className=" w-2/4 lg:w-auto"
          />
        </div>
        {data.map((item, index) => (
          <div className="mx-auto flex w-full flex-col lg:items-center gap-4 lg:flex-row pb-4  ">
            <div className="flex  flex-col lg:flex-row w-full justify-between">
              <div className="flex w-full  flex-col transition delay-200 duration-500 ease-in-out lg:w-[80vw]">
                <div className="flex items-start gap-2">
                  <Image
                    src={LogoIcon}
                    alt=""
                    width={100}
                    height={50}
                    className="h-10 w-auto"
                  />
                  <span className="font-semibold text-3xl text-primary-300">
                    {item.title}
                  </span>
                </div>
                <span className="w-full text-base text-default-800  xl:w-3/5 mt-4">
                  {item.subtitle}
                </span>
                <div className="flex flex-col self-center lg:self-start items-center justify-start w-max text-xs mt-4 px-2 py-1 bg-primary-500 rounded-md">
                  Qual a taxa normal de {item.title}? <br />
                  <div>
                    (<span className="underline">Clique Aqui</span>)
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col mt-4 lg:w-3/4 lg:flex-row  items-center gap-4 transition delay-200 duration-500 ease-in-out">
                <div className="flex py-4 w-full h-max flex-col rounded-md bg-[#202020] p-2 xl:p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold">
                        <CountUp
                          end={item.firstCardValue}
                          enableScrollSpy
                          scrollSpyOnce
                        />
                      </span>
                      <span className="text-sm font-semibold text-[#828690]">
                        {item.firstCardDescription}
                      </span>
                    </div>
                    <Image
                      src={RedGraph}
                      alt=""
                      width={200}
                      height={200}
                      quality={100}
                      className="h-8 w-auto lg:h-16"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-primary">
                      {item.firstCardPercentage}%
                    </span>
                    <span className="text-[#828690]">
                      do que semana passada
                    </span>
                  </div>
                </div>
                <div className="flex py-4 w-full flex-col rounded-md bg-[#202020] p-2 xl:h-auto xl:p-4">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold">
                        <CountUp
                          end={item.secondCardValue}
                          enableScrollSpy
                          scrollSpyOnce
                        />
                        %
                      </span>
                      <span className="text-sm font-semibold text-[#828690]">
                        {item.secondCardDescription}
                      </span>
                    </div>
                    <Image
                      src={BlueGraph}
                      alt=""
                      width={200}
                      height={200}
                      quality={100}
                      className="h-6 w-auto lg:h-16"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-red-500">
                      {item.secondCardPercentage}%
                    </span>
                    <span className="text-[#828690]">
                      do que no mês passado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
