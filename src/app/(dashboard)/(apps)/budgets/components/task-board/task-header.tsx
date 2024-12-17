"use client";

import { Input } from "@/src/components/ui/input";
import { Plus, Search, Settings, Tags } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Icon } from "@iconify/react";
import { Button } from "@/src/components/ui/button";

const TaskHeader = ({
  taskViewHandler,
  openCreateBoard,
  taskView,
}: {
  taskViewHandler: (value: "kanban" | "list") => void;
  openCreateBoard: () => void;
  taskView: string;
}) => {
  return (
    <div className="flex items-center flex-wrap justify-between gap-4">
      <div className=" flex items-center   gap-4">
        {/* search task */}
        <div className="relative min-w-[240px]">
          <span className="absolute top-1/2 -translate-y-1/2 ltr:left-2 rtl:right-2">
            <Search className="w-4 h-4 text-default-500" />
          </span>
          <Input
            type="text"
            placeholder="Pesquisar Clientes"
            className="ltr:pl-7 rtl:pr-7"
            size="lg"
          />
        </div>
      </div>
      <div className=" flex items-center gap-4">
        <Button className="bg-primary/70">
          <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> STATUS
        </Button>
        <Button className="border border-primary font-bold" color="secondary">
          <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> TIPO DE PROJETO
        </Button>
        <Button className="border border-primary font-bold" color="secondary">
          <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> TRIMESTRE
        </Button>
        <Button className="border border-primary font-bold" color="secondary">
          <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> ESTADO
        </Button>
      </div>
      <div className="flex-none flex items-center gap-4">
        <Button onClick={openCreateBoard}>
          <Plus className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> Novo Orçamento
        </Button>
      </div>
    </div>
  );
};

export default TaskHeader;
