"use client";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";

export function HorizontalBarGraph() {
  const indicadores = [
    { nome: "FATURAMENTO", goal: "R$100.000,00", atualValue: "R$20.000,00" },
    { nome: "CONTRATOS", goal: "10", atualValue: "9" },
    { nome: "LEADS", goal: "10", atualValue: "5" },
    { nome: "PROJETOS", goal: "10", atualValue: "4" },
    { nome: "PROPOSTAS", goal: "10", atualValue: "3" },
    { nome: "TICKET MÉDIO", goal: "R$10.000,00", atualValue: "R$9.000,00" },
    { nome: "CONVERSÃO", goal: "55%", atualValue: "38.5%" },
  ];

  interface Indicador {
    nome: string;
    goal: string;
    atualValue: string;
  }

  const calculateWidth = (goal: string, atualValue: string): string => {
    const goalNumber = parseFloat(goal.replace(/[^\d.-]/g, ""));
    const atualValueNumber = parseFloat(atualValue.replace(/[^\d.-]/g, ""));
    return ((atualValueNumber / goalNumber) * 100).toFixed(2) + "%";
  };

  return (
    <div className="w-full mt-4 flex-1 flex flex-col gap-4 ">
      {indicadores.map((indicador, index) => (
        <div key={index} className="flex items-center mb-4 relative">
          {/* Nome do Indicador */}
          <div className="w-1/5 text-sm font-bold text-[#013466]">
            {indicador.nome}
          </div>

          {/* Barra Alcançada */}
          <div className="w-3/5 relative group ">
            <div className="absolute hidden gap-2 group-hover:flex  -top-10 border border-white rounded-md bg-primary text-white font-bold text-lg left-10 px-8 py-2  ">
              <span className="lowercase first-letter:uppercase">
                {indicador.nome}
              </span>{" "}
              {indicador.nome === "FATURAMENTO"
                ? "Atual:"
                : indicador.nome === "TICKET MÉDIO"
                ? "Atual:"
                : indicador.nome === "CONVERSÃO"
                ? "Atual:"
                : "Atuais:"}{" "}
              {""}
              {indicador.atualValue}
            </div>
            <div className="h-10 border  bg-gradient-to-r from-[#3792a9] to-[#013466]  border-[#013466] overflow-hidden rounded-r-lg  w-full">
              <div className="flex flex-row w-full h-full items-center">
                <div
                  className="h-full    rounded-r-lg"
                  style={{
                    width: calculateWidth(indicador.goal, indicador.atualValue),
                  }}
                ></div>
                <div className="h-full  bg-white flex-1"></div>
              </div>
            </div>
          </div>
          <div className="w-1/5 text-start ml-4 pr-8 text-sm  text-[#013466]">
            {indicador.goal}
          </div>
        </div>
      ))}
    </div>
  );
}
