"use client";
import Image from "next/image";
import CountUp from "react-countup";
import { twMerge } from "tailwind-merge";

export function GeneralTabContent() {
  return (
    <div>
      <div className="mt-8 flex flex-col gap-8">
        <div className="relative flex h-full w-full flex-col items-center justify-evenly lg:h-40 lg:flex-row">
          <Image
            src="/sideArt2.png"
            alt=""
            width={500}
            height={500}
            quality={100}
            className="absolute left-4 top-1/4 h-40 w-auto"
          />
          <Image
            src="/sideArt.png"
            alt=""
            width={500}
            height={200}
            quality={100}
            className="absolute right-0 top-1/2 h-40 w-auto -translate-y-1/2"
          />
          <span className="mx-auto w-[90%] text-lg font-semibold lg:w-2/5 lg:text-2xl">
            Veja os Números atualizados diariamente sobre todo o uso da
            Plataforma Legis AI pelos usuários e quais sãos as funcionalidades
            mais populares
          </span>
          <Image
            src="/logoWhitee.png"
            alt=""
            width={500}
            height={250}
            quality={100}
            className="mx-auto w-[90%] lg:w-auto"
          />
        </div>
        <div className="mx-auto flex w-[95%] flex-col gap-4 lg:flex-row">
          <div className="flex w-full flex-col gap-4">
            <div
              className={twMerge(
                "flex  flex-col transition delay-200 duration-500 ease-in-out"
              )}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/smallLogo.png"
                  alt=""
                  width={100}
                  height={50}
                  className="h-10 w-auto rotate-90"
                />
                <span className="font-semibold text-primary">
                  Criação de Documentos Legislativos
                </span>
              </div>
              <span className="w-full text-sm text-[#828690] xl:w-3/5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </span>
            </div>
            <div
              className={twMerge(
                "flex flex-col transition delay-[400ms] duration-500 ease-in-out"
              )}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/smallLogo.png"
                  alt=""
                  width={100}
                  height={50}
                  className="h-10 w-auto rotate-90"
                />
                <span className="font-semibold text-primary">
                  Criação de Documentos Legislativos
                </span>
              </div>
              <span className="w-full text-sm text-[#828690] xl:w-3/5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </span>
            </div>
            <div
              className={twMerge(
                "flex  flex-col  transition delay-[600ms] duration-500 ease-in-out"
              )}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/smallLogo.png"
                  alt=""
                  width={100}
                  height={50}
                  className="h-10 w-auto rotate-90"
                />
                <span className="font-semibold text-primary">
                  Criação de Documentos Legislativos
                </span>
              </div>
              <span className="w-full text-sm text-[#828690] xl:w-3/5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </span>
            </div>
            <button className="group flex w-full items-center gap-2 rounded-full border border-[#00A15D] p-2 transition duration-200 hover:border-primary hover:bg-primary lg:w-max">
              <div className="relative flex h-6 w-8 items-end justify-center gap-0.5 rounded bg-primary pb-1 transition duration-200 group-hover:bg-white">
                <div className="h-1 w-[2px] rounded bg-[#202020]" />
                <div className="h-2 w-[2px] rounded bg-[#202020]" />
                <div className="h-3 w-[2px] rounded bg-[#202020]" />
              </div>
              <span>
                CLIQUE AQUI PARA VER MAIS DAS{" "}
                <strong>FUNÇÕES MAIS USADAS</strong>
              </span>
            </button>
          </div>
          <div className="flex w-full flex-col gap-4">
            <div
              className={twMerge(
                "flex w-full  items-center gap-4 transition delay-200 duration-500 ease-in-out"
              )}
            >
              <div className="flex h-32 w-full flex-col rounded-md bg-[#202020] p-2 xl:h-auto xl:p-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold">
                      <CountUp end={562} enableScrollSpy scrollSpyOnce />
                    </span>
                    <span className="text-sm font-semibold text-[#828690]">
                      Usos totais
                    </span>
                  </div>
                  <Image
                    src="/graphGreen.png"
                    alt=""
                    width={200}
                    height={200}
                    quality={100}
                    className="h-6 w-auto lg:h-16"
                  />
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-primary">+2%</span>
                  <span className="text-[#828690]">do que semana passada</span>
                </div>
              </div>
              <div className="flex h-32 w-full flex-col rounded-md bg-[#202020] p-2 xl:h-auto xl:p-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold">
                      <CountUp end={82} enableScrollSpy scrollSpyOnce />%
                    </span>
                    <span className="text-sm font-semibold text-[#828690]">
                      Satisfação de Uso
                    </span>
                  </div>
                  <Image
                    src="/graphBlue.png"
                    alt=""
                    width={200}
                    height={200}
                    quality={100}
                    className="h-6 w-auto lg:h-16"
                  />
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-red-500">-2%</span>
                  <span className="text-[#828690]">do que no mês passado</span>
                </div>
              </div>
            </div>
            <div
              className={twMerge(
                "flex w-full  items-center gap-4  transition delay-[400ms] duration-500 ease-in-out"
              )}
            >
              <div className="p-2xl:h-auto flex h-32 w-full flex-col rounded-md bg-[#202020] xl:p-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold">
                      <CountUp end={562} enableScrollSpy scrollSpyOnce />
                    </span>
                    <span className="text-sm font-semibold text-[#828690]">
                      Usos totais
                    </span>
                  </div>
                  <Image
                    src="/graphGreen.png"
                    alt=""
                    width={200}
                    height={200}
                    quality={100}
                    className="h-6 w-auto lg:h-16"
                  />
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-primary">+2%</span>
                  <span className="text-[#828690]">do que semana passada</span>
                </div>
              </div>
              <div className="flex h-32 w-full flex-col rounded-md bg-[#202020] p-2 xl:h-auto xl:p-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold">
                      <CountUp end={82} enableScrollSpy scrollSpyOnce />%
                    </span>
                    <span className="text-sm font-semibold text-[#828690]">
                      Satisfação de Uso
                    </span>
                  </div>
                  <Image
                    src="/graphBlue.png"
                    alt=""
                    width={200}
                    height={200}
                    quality={100}
                    className="h-6 w-auto lg:h-16"
                  />
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-red-500">-2%</span>
                  <span className="text-[#828690]">do que no mês passado</span>
                </div>
              </div>
            </div>
            <div
              className={twMerge(
                "flex w-full  items-center gap-4  transition delay-[600ms] duration-500 ease-in-out"
              )}
            >
              <div className="flex h-32 w-full flex-col rounded-md bg-[#202020] p-2 xl:h-auto xl:p-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold">
                      <CountUp end={562} enableScrollSpy scrollSpyOnce />
                    </span>
                    <span className="text-sm font-semibold text-[#828690]">
                      Usos totais
                    </span>
                  </div>
                  <Image
                    src="/graphGreen.png"
                    alt=""
                    width={200}
                    height={200}
                    quality={100}
                    className="h-6 w-auto lg:h-16"
                  />
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-primary">+2%</span>
                  <span className="text-[#828690]">do que semana passada</span>
                </div>
              </div>
              <div className="flex h-32 w-full flex-col rounded-md bg-[#202020] p-2 xl:h-auto xl:p-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold">
                      <CountUp end={82} enableScrollSpy scrollSpyOnce />%
                    </span>
                    <span className="text-sm font-semibold text-[#828690]">
                      Satisfação de Uso
                    </span>
                  </div>
                  <Image
                    src="/graphBlue.png"
                    alt=""
                    width={200}
                    height={200}
                    quality={100}
                    className="h-6 w-auto lg:h-16"
                  />
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-red-500">-2%</span>
                  <span className="text-[#828690]">do que no mês passado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
