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
const statuses = [
  { value: "todo", label: "À Fazer" },
  { value: "inprogress", label: "Em Andamento" },
  { value: "completed", label: "Completado" },
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
const CreateTask = ({
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
            Criar Tarefa
          </span>
        </SheetHeader>
        <form className=" h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <Label htmlFor="boardTitle" className="mb-1.5 text-default-600">
                Nome da Tarefa*
              </Label>
              <Input id="boardTitle" placeholder="Nome da Tarefa" />
            </div>
            <div>
              <Label
                htmlFor="assignedMember"
                className="mb-1.5 text-default-600"
              >
                Responsável*
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={users}
                styles={colorStyles}
                isMulti
                placeholder="Reponsável pela Tarefa"
              />
            </div>
            <div>
              <Label htmlFor="status" className="mb-1.5 text-default-600">
                Tarefa com Cliente?
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={clients}
                styles={colorStyles}
                placeholder="Nome do Cliente"
              />
            </div>
            <div>
              <Label htmlFor="status" className="mb-1.5 text-default-600">
                Status*
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={statuses}
                styles={colorStyles}
                placeholder="Status da Tarefa"
              />
            </div>
            <div>
              <Label htmlFor="priority" className="mb-1.5 text-default-600">
                Prioridade*
              </Label>
              <Select
                className="react-select"
                classNamePrefix="select"
                options={prioriy}
                styles={colorStyles}
                placeholder="Prioridade da Tarefa"
              />
            </div>

            <div>
              <Label htmlFor="priority" className="mb-1.5 text-default-600">
                Data*
              </Label>

              <div className="relative">
                <Input placeholder="Data da Tarefa" />

                <CalendarDays className="w-4 h-4 text-default-400 absolute top-1/2 right-2 -translate-y-1/2" />
                <div
                  className={cn(
                    "absolute bottom-10 left-0 w-[300px] bg-background z-20 hidden",
                    {
                      block: openDate,
                    }
                  )}
                ></div>
              </div>
            </div>
          </div>
          <SheetFooter className="pb-10">
            <SheetClose asChild>
              <Button type="button" color="primary" variant="outline">
                Cancelar
              </Button>
            </SheetClose>
            <Button>Criar Tarefa</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CreateTask;
