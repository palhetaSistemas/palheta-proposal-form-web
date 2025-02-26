"use client";
import { ProposalDataProps, useProposalContext } from "@/src/context/Contex";
import Image from "next/image";

export function Projects() {
  const { proposalData } = useProposalContext();

  return (
    <>
      {proposalData &&
        Object.values(proposalData).filter((value) => value).length >= 3 && (
          <>
            <div className="flex flex-col items-center justify-center h-screen w-full p-2 pb-0 lg:p-0">
              <div className="w-full lg:w-5/6 h-full justify-center flex flex-col gap-2">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/logo/vertical-logo.png"
                      alt=""
                      width={200}
                      height={1000}
                      className="w-20 h-36 lg:w-[3.75rem] lg:h-[6.75rem] xl:w-20 xl:h-36 object-contain"
                    />
                    <div className="flex w-full lg:w-[575px] flex-col">
                      <span className="text-primary font-semibold text-xl xl:text-4xl">
                        SEU PROJETO {""}
                        {Object.values(proposalData).filter((value) => value)
                          .length === 3
                          ? Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
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
                            : ""
                          : Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
                            )[2] === "architectural"
                          ? "ARQUITETÔNICO"
                          : Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
                            )[2] === "view3d"
                          ? "VISUALIZAÇÃO 3D"
                          : Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
                            )[2] === "structural"
                          ? "ESTRUTURAL"
                          : Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
                            )[2] === "electrical"
                          ? "ELÉTRICO"
                          : ""}
                      </span>
                      <span className="text-sm xl:text-base">
                        Segurança e eficiência desde a fundação. Cálculos
                        precisos para estruturas duráveis e seguras
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-1/4 border-2 border-primary rounded-3xl overflow-hidden flex">
                  <Image
                    src="/images/staticDataImage/facade2.png"
                    alt=""
                    width={1200}
                    height={1500}
                    className="w-5/12 h-full object-cover"
                  />
                  <div className="w-7/12 h-full flex flex-col bg-[#E6EBF0]">
                    <div className="w-full p-1 lg:p-0 lg:w-3/4 mx-auto h-full justify-center flex flex-col">
                      <span className="md:text-xl lg:text-base 2xl:text-3xl font-semibold text-primary">
                        O QUE VOCÊ RECEBERÁ:
                      </span>
                      <div className="text-[10px] xl:text-sm 2xl:text-base flex text-primary flex-col lg:flex-row xl:flex-col xl:flex-nowrap lg:flex-wrap justify-between w-full xl:gap-2">
                        <span>- VÍDEO 3D REALISTA E IMAGENS</span>
                        <span>- PASSEIO VIRTUAL 360º</span>
                        <span>- VÍDEO PARA O INSTAGRAM</span>
                        <span>- LINK DE COMPARTILHAMENTO</span>
                        <span>- PAISAGISMO DO ENTORNO</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-end justify-end text-end">
                  <div className="flex items-center gap-2">
                    <div className="flex w-full lg:w-[575px] flex-col">
                      <span className="text-primary font-semibold text-xl xl:text-4xl">
                        SEU PROJETO {""}
                        {Object.values(proposalData).filter((value) => value)
                          .length === 3
                          ? Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
                            )[2] === "architectural"
                            ? "ARQUITETÔNICO"
                            : Object.keys(proposalData).filter(
                                (key) =>
                                  proposalData[key as keyof ProposalDataProps]
                              )[2] === "view3d"
                            ? "VISUALIZAÇÃO 3D"
                            : Object.keys(proposalData).filter(
                                (key) =>
                                  proposalData[key as keyof ProposalDataProps]
                              )[2] === "structural"
                            ? "ESTRUTURAL"
                            : Object.keys(proposalData).filter(
                                (key) =>
                                  proposalData[key as keyof ProposalDataProps]
                              )[2] === "electrical"
                            ? "ELÉTRICO"
                            : ""
                          : Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
                            )[3] === "architectural"
                          ? "ARQUITETÔNICO"
                          : Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
                            )[3] === "view3d"
                          ? "VISUALIZAÇÃO 3D"
                          : Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
                            )[3] === "structural"
                          ? "ESTRUTURAL"
                          : Object.keys(proposalData).filter(
                              (key) =>
                                proposalData[key as keyof ProposalDataProps]
                            )[3] === "electrical"
                          ? "ELÉTRICO"
                          : ""}
                      </span>
                      <span className="text-sm xl:text-base">
                        Sistemas elétricos seguros e eficientes. Planejamento
                        estratégico para otimizar desempenho e consumo.
                      </span>
                    </div>
                    <Image
                      src="/images/logo/vertical-logo.png"
                      alt=""
                      width={200}
                      height={1000}
                      className="w-20 h-36 lg:w-[3.75rem] lg:h-[6.75rem] xl:w-20 xl:h-36 object-contain"
                    />
                  </div>
                </div>
                <div className="w-full h-1/4 border-2 border-primary rounded-3xl overflow-hidden flex">
                  <Image
                    src="/images/staticDataImage/facade2.png"
                    alt=""
                    width={1200}
                    height={1500}
                    className="w-5/12 h-full object-cover"
                  />
                  <div className="w-7/12 h-full flex flex-col bg-[#E6EBF0]">
                    <div className="w-full p-1 lg:p-0 lg:w-3/4 mx-auto h-full justify-center flex flex-col">
                      <span className="md:text-xl lg:text-base 2xl:text-3xl font-semibold text-primary">
                        O QUE VOCÊ RECEBERÁ:
                      </span>
                      <div className="text-[10px] xl:text-sm 2xl:text-base flex text-primary flex-col lg:flex-row xl:flex-col xl:flex-nowrap lg:flex-wrap justify-between w-full xl:gap-2">
                        <span>- DEFINIÇÃO DAS CARGAS ELÉTRICAS</span>
                        <span>- LOCALIZAÇÃO DE PONTOS ELÉTRICOS</span>
                        <span>- PROTEÇÃO CONTRA SURTOS</span>
                        <span>- DIMENSÃO DE CABOS</span>
                        <span>- INTEGRAÇÃO COM DEMAIS PROJETOS</span>
                        <span>- ESPECIFICAÇÃO DE MATERIAIS</span>
                      </div>
                    </div>
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
