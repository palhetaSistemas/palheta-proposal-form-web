"use client";
import { Button } from "@/src/components/ui/button";
import CountUp from "react-countup";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/src/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function Hero() {
  const [selectedFacade, setSelectedFacade] = useState(0);
  return (
    <div className="flex flex-col justify-between p-2 lg:p-0 h-screen w-full">
      <div className="w-full h-20 p-2 flex items-center justify-center lg:justify-end gap-2">
        <Button
          className="rounded-full px-2 lg:px-4 text-xs lg:text-base"
          variant="outline"
        >
          Acessar App Cliente
        </Button>
        <Button className="rounded-full px-2 lg:px-4 text-xs lg:text-base">
          Conversar com Escritório
        </Button>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col lg:pl-16 lg:pr-8 gap-2">
          <Image
            src="/images/logo/vertical-logo.png"
            alt=""
            width={200}
            height={1000}
            className="w-20 h-36 object-contain"
          />
          <span className="lg:text-lg xl:text-2xl">
            Projeto desenvolvido para:
          </span>
          <span className="text-2xl lg:text-3xl xl:text-6xl font-semibold text-primary">
            Pastor Edí Palheta
          </span>
          <span className="text-sm xl:text-xl font-light">
            Somos o primeiro escritório especializado exclusivamente em projetos
            de igrejas evangélicas com sede na Av. Paulista, nossa expertise é a
            comprovado por mais:
          </span>
          <div className="w-full flex items-center">
            <div className="w-1/2 flex flex-col">
              <CountUp
                end={5}
                duration={2}
                className="font-semibold text-2xl lg:text-3xl xl:text-6xl"
              />
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary w-4 h-4 xl:w-6 xl:h-6" />
                <span className="text-base xl:text-xl text-primary">
                  PAÍSES
                </span>
              </div>
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="flex items-center gap-2">
                <CountUp
                  end={130}
                  duration={2}
                  className="font-semibold text-2xl lg:text-3xl xl:text-6xl"
                />
                <span className="text-primary font-semibold text-2xl lg:text-3xl xl:text-6xl">
                  +
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary w-4 h-4 xl:w-6 xl:h-6" />
                <span className="text-base xl:text-xl text-primary">
                  IGREJAS
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 items-center flex gap-8 h-full ">
          <Swiper slidesPerView={2} spaceBetween={10}>
            <SwiperSlide className="flex items-center h-full my-auto">
              <div
                className={cn(
                  "border-primary overflow-hidden border-2 w-full 2xl:w-[400px] relative h-[250px] 2xl:h-[600px] transition duration-300 rounded-3xl",
                  selectedFacade !== 0 && "scale-75 transition duration-300"
                )}
                onClick={() => setSelectedFacade(0)}
              >
                {selectedFacade !== 0 && (
                  <div className="absolute w-full h-full bg-primary/50" />
                )}
                <Image
                  src="/images/staticDataImage/facade2.png"
                  alt=""
                  width={500}
                  height={1500}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center h-full my-auto">
              <div
                className={cn(
                  "border-primary overflow-hidden border-2 w-full 2xl:w-[400px] relative h-[250px] 2xl:h-[600px] transition duration-300 rounded-3xl",
                  selectedFacade !== 1 && "scale-75 transition duration-300"
                )}
                onClick={() => setSelectedFacade(1)}
              >
                {selectedFacade !== 1 && (
                  <div className="absolute w-full h-full bg-primary/50" />
                )}
                <Image
                  src="/images/staticDataImage/facade2.png"
                  alt=""
                  width={500}
                  height={1500}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="my-0 w-full h-0.5 bg-primary" />
    </div>
  );
}
