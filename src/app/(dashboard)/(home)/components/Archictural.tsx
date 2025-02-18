import Image from "next/image";

export function Architectural() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="w-5/6 h-full justify-center flex flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo/vertical-logo.png"
                alt=""
                width={200}
                height={1000}
                className="w-20 h-36 object-contain"
              />
              <div className="flex w-[575px] flex-col">
                <span className="text-primary font-semibold text-4xl">
                  SEU PROJETO ARQUITETÔNICO
                </span>
                <span>
                  Soluções arquitetônicas completas, da concepção à execução.
                  Planejamento detalhado para viabilidade e excelência.
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
          <div className="w-full h-3/5 border-2 border-primary rounded-3xl overflow-hidden flex">
            <Image
              src="/images/staticDataImage/facade2.png"
              alt=""
              width={1200}
              height={1500}
              className="w-5/12 h-full object-cover"
            />
            <div className="w-7/12 h-full flex flex-col bg-[#E6EBF0]">
              <div className="w-3/4 mx-auto h-full justify-center flex flex-col">
                <span className="text-3xl font-semibold text-primary">
                  O QUE VOCÊ RECEBE:
                </span>
                <div className="flex text-primary flex-col gap-2">
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
  );
}
