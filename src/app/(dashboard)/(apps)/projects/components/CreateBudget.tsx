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

const users = [
  { value: "202", label: "Cleopetra" },
  { value: "203", label: "Nicolas" },
  { value: "204", label: "John Doe" },
];
const clients = [
  {
    value: "0",
    label: "Nenhum",
  },
  { value: "1", label: "Cliente 1" },
  { value: "2", label: "Cliente 2" },
  { value: "3", label: "Cliente 3" },
];
const sizes = [
  { value: "small", label: "Fazenda Pequena" },
  { value: "medium", label: "Fazenda Média" },
  { value: "large", label: "Fazenda Grande" },
];
const prioriy = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

const colorStyles = {
  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
    return {
      ...styles,
      color: isSelected ? "#000" : "#fff",
      background: isSelected ? "#fff" : "#000",
    };
  },
};
const CreateBudget = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [openDate, setOPenDate] = useState<boolean>(true);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="pt-5">
        <SheetHeader className="flex-row items-center justify-between mb-4">
          <span className="text-lg font-semibold text-default-900">
            Criar Cliente
          </span>
        </SheetHeader>
        <form className=" h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <Label htmlFor="farmName" className="mb-1.5 text-default-600">
                Nome da Fazenda*
              </Label>
              <Input id="farmName" placeholder="Nome da Fazenda" />
            </div>
            <div>
              <Label htmlFor="phone" className="mb-1.5 text-default-600">
                Telefone
              </Label>
              <Input id="phone" placeholder="Telefone" />
            </div>
            <div>
              <Label htmlFor="city" className="mb-1.5 text-default-600">
                Cidade
              </Label>
              <Input id="city" placeholder="Cidade " />
            </div>
            <div>
              <Label htmlFor="size" className="mb-1.5 text-default-600">
                Tamanho da Fazenda
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={sizes}
                styles={colorStyles}
                placeholder="Tamanho da Tarefa"
              />
            </div>
          </div>
          <SheetFooter className="pb-10">
            <SheetClose asChild>
              <Button type="button" color="primary" variant="outline">
                Cancelar
              </Button>
            </SheetClose>
            <Button>Criar Cliente</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CreateBudget;
