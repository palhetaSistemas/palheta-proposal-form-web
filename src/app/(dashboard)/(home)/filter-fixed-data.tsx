"use client";
import { twMerge } from "tailwind-merge";
import {
  ChevronUp,
  File,
  Flag,
  GraduationCap,
  Loader2,
  Rss,
  Settings,
  UserCheck,
} from "lucide-react";
import CountUp from "react-countup";
import LogoWhite from "@/public/images/logo/logo-white.png";
import Icon from "@/public/images/logo/icon.png";
import BackgroundCard from "@/public/images/projects/background_card.png";

import Image from "next/image";
export function FilterFixedData() {
  return (
    <div className="mt-10">
      <div className="flex w-full flex-col items-center gap-4 lg:flex-row ">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-gradient-to-r from-primary-500 via-[#000] to-primary-500 p-6 lg:h-48 xl:h-48 xl:w-1/2">
          <div className="absolute -top-20 left-2/3 h-40 w-40 rounded-full bg-primary-500 opacity-50" />
          <div className="z-10 flex w-full flex-col items-center justify-between lg:flex-row">
            <div className="gap-2 flex flex-col w-full">
              <div>
                <span className="font-semibold text-base lg:text-xl">
                  Nome da Fazenda:{" "}
                </span>
                <span className="text:sm lg:text-lg"> Fazenda do Zé</span>
              </div>
              <div>
                <span className="font-semibold text-base lg:text-xl">
                  Localização:{" "}
                </span>
                <span className="text:sm lg:text-lg"> Sinop - MT</span>
              </div>
              <div>
                <span className="font-semibold text-base lg:text-xl">
                  Nome da Fazenda:{" "}
                </span>
                <span className="text:sm lg:text-lg"> Fazenda do Zé</span>
              </div>
              <div>
                <span className="font-semibold text-base lg:text-xl">
                  Colaboradores:{" "}
                </span>
                <span className="text:sm lg:text-lg"> 15</span>
              </div>
            </div>
            <div>
              <Image
                src={LogoWhite}
                alt="Logo"
                className="w-56 opacity-10 lg:opacity-100 lg:block lg:relative absolute top-0 right-0 bottom-0 left-0 m-auto"
              />
            </div>
          </div>
        </div>
        <div className="relative flex w-full flex-col gap-14 rounded-3xl bg-[#202020] p-4 lg:h-48 xl:h-50 xl:w-1/4">
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
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl lg:h-48 xl:h-50 xl:w-1/4">
          <div className="z-20 mx-auto flex h-full w-[90%] flex-col items-center justify-between py-2 text-center">
            <span className="text-lg font-medium leading-5 xl:text-2xl xl:leading-7">
              Ganhe Vantagem usando <br />{" "}
              <span className="font-bold">Foco AI</span>
            </span>
            <span className="text-sm leading-5">
              Supere outros colegas usando o máximo do FocoAI no dia a dia.
            </span>
            <button className="group flex items-center gap-2 text-nowrap rounded-3xl border border-primary-500 p-1 pr-4 transition duration-200 hover:bg-primary-500 hover:font-semibold hover:text-default-900">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500">
                <GraduationCap className="text-background group-hover:text-default-900" />
              </div>
              <span>INICIAR AGORA</span>
            </button>
          </div>
          <Image
            src={BackgroundCard}
            className="absolute left-0 top-0 w-full rounded-3xl"
            height={500}
            width={500}
            alt=""
          />
          <div className="absolute left-0 top-0 z-10 h-full w-full rounded-3xl bg-gradient-to-b from-[#20202060] to-[#202020]" />
        </div>
      </div>
      <div className="flex mt-4 w-full flex-col gap-2 rounded-2xl bg-[#202020] p-4">
        <div className="flex w-full  items-center justify-between lg:flex-row">
          <div className="flex flex-col ">
            <span className="font-semibold">
              Notícias recentes que podem te interessar
            </span>
            <span className="text-sm text-[#828690]">
              Um pouco dos sites que estamos constantemente recebendo
              informações
            </span>
          </div>
          <div className="justify-end gap-4 lg:block hidden">
            <button className="flex items-center  justify-center rounded-3xl border border-primary bg-primary px-8 py-2 leading-4 transition duration-200 hover:border-primary hover:bg-transparent hover:font-semibold hover:text-primary-500">
              Ver todos recentes
            </button>
          </div>
        </div>
        <div className="relative flex h-full w-full flex-col items-center gap-4 lg:flex-row xl:h-64">
          <div
            className={twMerge(
              "flex w-full flex-col gap-2 rounded-xl border border-default-900 p-2  transition delay-200 duration-500 lg:w-1/3 xl:p-4"
            )}
          >
            <span className="font-semibold">
              BOLSONARO É PRESO TENTANDO FAZER ABC ENQUANTO SEU GRUPO FAZ ABC NO
              LOCAL COMBINADO, VEJA AGORA
            </span>
            <span className="text-sm text-[#828690]">
              “Em breve resumo, usando a inteligência artificial da FocoAI
              podemos acreditar que abc abc abc mas não só isso (...)”{" "}
              <span className="italic text-primary-500">
                REALIZADO POR <strong>FOCO.AI*</strong>
              </span>
            </span>
            <span className="w-max cursor-pointer text-xs font-semibold hover:underline">
              LER NA ÍNTEGRA
            </span>
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              <div className="flex gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9D8160]">
                  <div className="inline-block size-6 rotate-45 rounded-full border-[6px] border-current border-t-transparent text-default-900" />
                </div>
                <div className="flex w-40 flex-col text-[#828690]">
                  <span className="text-xs opacity-80">
                    Todos direitos reservados para o autor
                  </span>
                  <span className="text-xs">Date: 12/05/2020</span>
                </div>
              </div>
              <button className="mt-4 rounded bg-primary-500/60 px-4 py-2 text-xs text-default-900 transition duration-200 hover:bg-primary-500/80 hover:font-semibold">
                LER RESUMO
              </button>
            </div>
          </div>
          <div
            className={twMerge(
              "flex w-full flex-col gap-2 rounded-xl border border-default-900 p-2  transition  duration-500 lg:w-1/3 xl:p-4"
            )}
          >
            <span className="font-semibold">
              BOLSONARO É PRESO TENTANDO FAZER ABC ENQUANTO SEU GRUPO FAZ ABC NO
              LOCAL COMBINADO, VEJA AGORA
            </span>
            <span className="text-sm text-[#828690]">
              “Em breve resumo, usando a inteligência artificial da FocoAI
              podemos acreditar que abc abc abc mas não só isso (...)”{" "}
              <span className="italic text-primary-500">
                REALIZADO POR <strong>FOCO.AI*</strong>
              </span>
            </span>
            <span className="w-max cursor-pointer text-xs font-semibold hover:underline">
              LER NA ÍNTEGRA
            </span>
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              <div className="flex gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9D8160]">
                  <div className="inline-block size-6 rotate-45 rounded-full border-[6px] border-current border-t-transparent text-default-900" />
                </div>
                <div className="flex w-40 flex-col text-[#828690]">
                  <span className="text-xs opacity-80">
                    Todos direitos reservados para o autor
                  </span>
                  <span className="text-xs">Date: 12/05/2020</span>
                </div>
              </div>
              <button className="mt-4 rounded bg-primary-500/60 px-4 py-2 text-xs text-default-900 transition duration-200 hover:bg-primary-500/80 hover:font-semibold">
                LER RESUMO
              </button>
            </div>
          </div>
          <div
            className={twMerge(
              "flex w-full flex-col gap-2 rounded-xl border border-default-900 p-2  transition duration-500 lg:w-1/3 xl:p-4"
            )}
          >
            <span className="font-semibold">
              BOLSONARO É PRESO TENTANDO FAZER ABC ENQUANTO SEU GRUPO FAZ ABC NO
              LOCAL COMBINADO, VEJA AGORA
            </span>
            <span className="text-sm text-[#828690]">
              “Em breve resumo, usando a inteligência artificial da FocoAI
              podemos acreditar que abc abc abc mas não só isso (...)”{" "}
              <span className="italic text-primary-500">
                REALIZADO POR <strong>FOCO.AI*</strong>
              </span>
            </span>
            <span className="w-max cursor-pointer text-xs font-semibold hover:underline">
              LER NA ÍNTEGRA
            </span>
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              <div className="flex gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9D8160]">
                  <div className="inline-block size-6 rotate-45 rounded-full border-[6px] border-current border-t-transparent text-default-900" />
                </div>
                <div className="flex w-40 flex-col text-[#828690]">
                  <span className="text-xs opacity-80">
                    Todos direitos reservados para o autor
                  </span>
                  <span className="text-xs">Date: 12/05/2020</span>
                </div>
              </div>
              <button className="mt-4 rounded bg-primary-500/60 px-4 py-2 text-xs text-default-900 transition duration-200 hover:bg-primary-500/80 hover:font-semibold">
                LER RESUMO
              </button>
            </div>
          </div>
          <div className="justify-end gap-4 lg:hidden block">
            <button className="flex items-center  justify-center rounded-3xl border border-primary bg-primary px-8 py-2 leading-4 transition duration-200 hover:border-primary hover:bg-transparent hover:font-semibold hover:text-primary-500">
              Ver todos recentes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
