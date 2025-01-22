"use client";
import { Button } from "@/src/components/ui/button";
import { Calendar } from "@/src/components/ui/calendar";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "@/src/components/ui/sheet";
import { cn } from "@/src/lib/utils";

import { CalendarDays, X } from "lucide-react";
import { useEffect, useState } from "react";
import Select from "react-select";

const ObjectivesSheet = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [invoicing, setInvoicing] = useState<number | string>("");
  const [contracts, setContracts] = useState("");
  const [projects, setProjects] = useState("");
  const [leads, setLeads] = useState("");
  const [proposals, setProposals] = useState("");
  const [averageTicket, setAverageTicket] = useState("");
  const [conversion, setConversion] = useState("");
  function handleInvoicingChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    // Remove o prefixo R$ e caracteres não numéricos para atualizar o estado
    const numericValue = inputValue.replace(/[^\d]/g, ""); // Remove tudo que não for número
    setInvoicing(numericValue);
  }
  function handleAverageTicketChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    // Remove o prefixo R$ e caracteres não numéricos para atualizar o estado
    const numericValue = inputValue.replace(/[^\d]/g, ""); // Remove tudo que não for número
    setAverageTicket(numericValue);
  }
  function handleConversionChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;

    // Remove qualquer caractere não numérico e garante que o valor fique entre 0 e 100
    const numericValue = Math.min(
      100,
      Math.max(0, parseInt(inputValue.replace(/[^\d]/g, ""), 10) || 0)
    );
    setConversion(numericValue);
  }

  function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    setConversion(e.target.value); // Atualiza o estado com o valor do slider
  }
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="pt-5">
        <SheetHeader className="flex-row items-center justify-between mb-4">
          <span className="text-lg font-semibold text-default-900">
            Ajustar Metas
          </span>
        </SheetHeader>
        <form className=" h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <Label htmlFor="invoicing" className="mb-1.5 text-default-600">
                Faturamento
              </Label>
              <div>
                <Input
                  id="invoicing"
                  value={
                    invoicing
                      ? `R$ ${Number(invoicing).toLocaleString("pt-BR")}`
                      : ""
                  }
                  onChange={(e) => handleInvoicingChange(e)}
                  placeholder="R$100.000,00"
                  type="text" // Mantém o tipo de entrada como texto para aceitar R$
                />
              </div>
            </div>
            <div className="flex flex-row w-full justify-between gap-4">
              <div>
                <Label htmlFor="contracts" className="mb-1.5 text-default-600">
                  Contratos
                </Label>
                <Input type="number" id="contracts" placeholder="10" />
              </div>
              <div>
                <Label htmlFor="projects" className="mb-1.5 text-default-600">
                  Projetos
                </Label>
                <Input type="number" id="projects" placeholder="10" />
              </div>
            </div>
            <div>
              <Label htmlFor="leads" className="mb-1.5 text-default-600">
                Leads
              </Label>
              <Input type="number" id="leads" placeholder="10" />
            </div>

            <div>
              <Label htmlFor="proposals" className="mb-1.5 text-default-600">
                Propostas
              </Label>
              <Input type="number" id="proposals" placeholder="10" />
            </div>
            <div>
              <Label
                htmlFor="averageTicket"
                className="mb-1.5 text-default-600"
              >
                Ticket Médio
              </Label>
              <Input
                value={
                  averageTicket
                    ? `R$ ${Number(averageTicket).toLocaleString("pt-BR")}`
                    : ""
                }
                onChange={(e) => handleAverageTicketChange(e)}
                type="text"
                id="averageTicket"
                placeholder="10.000,00"
              />
            </div>
            <div>
              <Label htmlFor="conversion" className="mb-1.5 text-default-600">
                Conversão
              </Label>
              <div className="flex flex-row items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={conversion}
                  onChange={(e) => handleSliderChange(e)}
                  className="w-full bg-primary rounded-full"
                />
                <Input
                  type="text"
                  id="conversion"
                  placeholder="55%"
                  value={conversion !== "" ? `${conversion}%` : ""}
                  onChange={(e) => handleConversionChange(e)}
                  className="w-20"
                />
              </div>
            </div>
          </div>
          <SheetFooter className="pb-10 gap-4">
            <SheetClose asChild>
              <Button type="button" color="primary" variant="outline">
                Cancelar
              </Button>
            </SheetClose>
            <Button>Confirmar Alteração</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default ObjectivesSheet;
