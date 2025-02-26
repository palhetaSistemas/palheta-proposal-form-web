"use client";
import { ProposalDataProps, useProposalContext } from "@/src/context/Contex";
import Image from "next/image";

export function View3d() {
  const { proposalData } = useProposalContext();

  return (
    <>
      {proposalData &&
        Object.values(proposalData).filter((value) => value).length >= 2 &&
        (Object.values(proposalData).filter((value) => value).length === 2 ||
          Object.values(proposalData).filter((value) => value).length > 3) && (
          <>
            <div className="flex flex-col items-center justify-center h-screen w-full p-2 lg:p-0">
              <div className="w-full lg:w-5/6 h-full justify-center flex flex-col gap-2">
                <div className="flex w-full items-center justify-end">
                  <div className="flex items-center gap-2">
                    <div className="flex w-full lg:w-[575px] text-end flex-col">
                      <span className="text-primary font-semibold text-xl xl:text-4xl">
                        {Object.keys(proposalData).filter(
                          (key) => proposalData[key as keyof ProposalDataProps]
                        )[1] === "architectural"
                          ? "ARQUITETÔNICO"
                          : Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
                            )[1] === "view3d"
                          ? "VISUALIZAÇÃO 3D"
                          : Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
                            )[1] === "structural"
                          ? "ESTRUTURAL"
                          : Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
                            )[1] === "electrical"
                          ? "ELÉTRICO"
                          : ""}
                      </span>
                      <span className="text-sm xl:text-base">
                        Imersão total no seu projeto antes da construção.
                        Visualizações realistas para uma experiência completa.
                      </span>
                    </div>
                    <Image
                      src="/images/logo/vertical-logo.png"
                      alt=""
                      width={200}
                      height={1000}
                      className="w-20 h-36 object-contain"
                    />
                  </div>
                </div>
                <div className="w-full h-2/6 border-2 border-primary rounded-3xl overflow-hidden flex">
                  <div className="w-7/12 h-full flex flex-col bg-[#E6EBF0]">
                    <div className="w-full p-2 lg:p-0 lg:w-3/4 mx-auto h-full justify-center flex flex-col">
                      <span className="md:text-xl lg:text-base 2xl:text-3xl font-semibold text-primary">
                        O QUE VOCÊ RECEBERÁ:
                      </span>
                      <div className="flex text-primary flex-col text-xs md:text-sm lg:text-xs 2xl:text-base lg:gap-2">
                        <span>- VÍDEO 3D REALISTA E IMAGENS</span>
                        <span>- PASSEIO VIRTUAL 360º</span>
                        <span>- VÍDEO PARA O INSTAGRAM</span>
                        <span>- LINK DE COMPARTILHAMENTO</span>
                        <span>- PAISAGISMO DO ENTORNO</span>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/images/staticDataImage/facade2.png"
                    alt=""
                    width={1200}
                    height={1500}
                    className="w-5/12 h-full object-cover"
                  />
                </div>
                <div className="w-full h-2/6 flex items-center gap-2 2xl:gap-8">
                  <div className="hidden h-full w-full lg:w-1/2 group cursor-pointer relative overflow-hidden rounded-3xl lg:flex flex-col items-center justify-end p-8">
                    <Image
                      src="/images/staticDataImage/facade2.png"
                      alt=""
                      width={1200}
                      height={1500}
                      className="w-full absolute top-0 group-hover:scale-105 group-hover:-rotate-2 transition duration-300 right-0 h-full object-cover"
                    />
                    <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-b from-transparent to-primary z-10" />
                    <div className="flex z-20 items-center text-white text-center flex-col gap-2">
                      <span className="w-max">
                        CLIQUE E ASSISTA
                        <div className="w-full -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 h-px bg-white transition duration-300" />
                      </span>
                      <span className="text-lg xl:text-2xl font-semibold">
                        DEPOIMENTO DO PASTOR UESLEN THOMAZ
                      </span>
                      <span className="text-base xl:text-xl">
                        PORTO VELHO, RONDÔNIA
                      </span>
                    </div>
                  </div>
                  <div className="h-full w-full lg:w-1/4 rounded-3xl flex flex-col overflow-hidden">
                    <Image
                      src="/images/staticDataImage/facade2.png"
                      alt=""
                      width={1200}
                      height={1500}
                      className="w-full h-1/3 lg:h-1/2 object-cover"
                    />
                    <div className="w-full border justify-between lg:leading-4 2xl:leading-normal border-primary rounded-b-3xl h-2/3 lg:h-1/2 text-primary flex flex-col p-2 lg:py-1 2xl:p-8">
                      <span className="text-xs md:text-sm lg:text-xs leading-3 xl:text-sm">
                        “Foi sensacional por Desenvolver um projeto tão
                        grandioso e moderno.”
                      </span>
                      <div className="flex flex-col">
                        <span className="font-semibold leading-3 text-[10px] md:text-sm lg:text-[10px] xl:text-sm">
                          IGREJA NOVA ALIANÇA COM DEUS
                        </span>
                        <span className="text-[10px] md:text-sm lg:text-[10px] leading-3 xl:text-xs 2xl:text-sm">
                          PORTO VELHO, RONDÔNIA
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-full lg:w-1/4 rounded-3xl flex flex-col overflow-hidden">
                    <Image
                      src="/images/staticDataImage/facade2.png"
                      alt=""
                      width={1200}
                      height={1500}
                      className="w-full h-1/3 lg:h-1/2 object-cover"
                    />
                    <div className="w-full border lg:leading-4 2xl:leading-normal border-primary rounded-b-3xl h-2/3 lg:h-1/2 text-primary flex flex-col p-2 lg:py-1 justify-between 2xl:p-8">
                      <span className="text-xs md:text-sm lg:text-xs leading-3 xl:text-sm">
                        “Foi sensacional por Desenvolver um projeto tão
                        grandioso e moderno.”
                      </span>
                      <div className="flex flex-col">
                        <span className="font-semibold leading-3 text-[10px] md:text-sm lg:text-[10px] xl:text-sm">
                          IGREJA BATISTA COMUNIDADE ALIANÇA
                        </span>
                        <span className="text-[10px] leading-3 md:text-xs lg:text-[10px] xl:text-xs 2xl:text-sm">
                          VENCESLAU BRÁS, PARANÁ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:hidden h-60 w-full lg:w-1/2 group cursor-pointer relative overflow-hidden rounded-3xl flex flex-col items-center justify-end p-8">
                  <Image
                    src="/images/staticDataImage/facade2.png"
                    alt=""
                    width={1200}
                    height={1500}
                    className="w-full absolute top-0 group-hover:scale-105 group-hover:-rotate-2 transition duration-300 right-0 h-full object-cover"
                  />
                  <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-b from-transparent to-primary z-10" />
                  <div className="flex z-20 items-center text-white text-center flex-col gap-2">
                    <span className="w-max">
                      CLIQUE E ASSISTA
                      <div className="w-full -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 h-px bg-white transition duration-300" />
                    </span>
                    <span className="lg:text-2xl font-semibold">
                      DEPOIMENTO DO PASTOR UESLEN THOMAZ
                    </span>
                    <span className="text-sm lg:text-xl">
                      PORTO VELHO, RONDÔNIA
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-0.5 bg-primary" />
          </>
        )}
    </>
  );
}
