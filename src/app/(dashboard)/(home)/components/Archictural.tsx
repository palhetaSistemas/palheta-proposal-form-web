"use client";
import { ProposalDataProps, useProposalContext } from "@/src/context/Contex";
import Image from "next/image";

export function Architectural() {
  const { proposalData } = useProposalContext();

  return (
    <>
      {proposalData &&
        (Object.values(proposalData).filter((value) => value).length <= 3 ||
          Object.values(proposalData).filter((value) => value).length > 3) && (
          <>
            <div className="flex flex-col items-center justify-center h-screen w-full p-2 pb-0 lg:p-0">
              <div className="w-full lg:w-5/6 h-full justify-center flex flex-col gap-2">
                <div className="flex flex-col lg:flex-row w-full items-end lg:items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/logo/vertical-logo.png"
                      alt=""
                      width={200}
                      height={1000}
                      className="w-20 h-36 object-contain"
                    />
                    <div className="flex w-full lg:w-[575px] flex-col">
                      <span className="text-primary font-semibold text-xl xl:text-4xl">
                        SEU PROJETO{" "}
                        {Object.keys(proposalData).find(
                          (key: string) =>
                            proposalData[key as keyof ProposalDataProps]
                        ) === "architectural"
                          ? "ARQUITETÔNICO"
                          : Object.keys(proposalData).find(
                              (key: string) =>
                                proposalData[key as keyof ProposalDataProps]
                            ) === "view3d"
                          ? "VISUALIZAÇÃO 3D"
                          : Object.keys(proposalData).find(
                              (key: string) =>
                                proposalData[key as keyof ProposalDataProps]
                            ) === "structural"
                          ? "ESTRUTURAL"
                          : Object.keys(proposalData).find(
                              (key: string) =>
                                proposalData[key as keyof ProposalDataProps]
                            ) === "electrical"
                          ? "ELÉTRICO"
                          : ""}
                      </span>
                      <span className="text-sm xl:text-base">
                        Soluções arquitetônicas completas, da concepção à
                        execução. Planejamento detalhado para viabilidade e
                        excelência.
                      </span>
                    </div>
                  </div>
                  <div className="flex text-right flex-col">
                    <span>Específico para: </span>
                    <span className="text-xl font-semibold text-primary">
                      Pastor Edí Palheta
                    </span>
                  </div>
                </div>
                <div className="w-full h-3/5 border-2 border-primary rounded-3xl overflow-hidden flex flex-col lg:flex-row">
                  <Image
                    src="/images/staticDataImage/facade2.png"
                    alt=""
                    width={1200}
                    height={1500}
                    className="w-full h-1/3 lg:h-full lg:w-5/12 object-cover"
                  />
                  <div className="w-full h-2/3 lg:w-7/12 lg:h-full flex flex-col bg-[#E6EBF0]">
                    <div className="w-full p-2 lg:p-0 lg:w-3/4 mx-auto h-full justify-center flex flex-col">
                      <span className="md:text-xl lg:text-base xl:text-3xl font-semibold text-primary">
                        O QUE VOCÊ RECEBE:
                      </span>
                      <div className="flex text-xs md:text-sm lg:text-xs xl:text-base text-primary flex-col gap-1 2xl:gap-2">
                        <span>- ANÁLISE DE NORMAS E LEGISLAÇÃO</span>
                        <span>- ESTUDO DE VIABILIDADE FINANCEIRA</span>
                        <span>- IMPLANTAÇÃO DA EDIF. NO TERRENO</span>
                        <span>- PLANTA BAIXA DE PISO</span>
                        <span>- ACESSIBILIDADE INTEGRADA</span>
                        <span>- PROJETO DE FORRO</span>
                        <span>- PROJETO DE COBERTURA</span>
                        <span>- DESIGN DA FACHADAS</span>
                        <span>- TRATAMENTO ACÚSTIC0 INTEGRADO</span>
                        <span>- DEFINIÇÃO DAS ETAPAS DA OBRA</span>
                        <span>- QUANTIDADE DE MATERIAIS/ETAPA</span>
                        <span>- CUSTO TOTAL DA OBRA E POR ETAPAS</span>
                        <span>- ENTREGA EM 50 DIAS CORRIDOS</span>
                        <span>- PROJETO EM FORMATO DIGITAL</span>
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
