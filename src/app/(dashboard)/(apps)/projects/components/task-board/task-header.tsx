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
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const TaskHeader = ({
  taskViewHandler,
  openCreateBoard,
  taskView,
}: {
  taskViewHandler: (value: "kanban" | "list") => void;
  openCreateBoard: () => void;
  taskView: string;
}) => {
  const [selected, setSelected] = useState("all");
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
        <Button
          className={cn(
            "border border-primary font-bold",
            selected !== "all" && "bg-secondary text-primary"
          )}
          onClick={() => setSelected("all")}
        >
          {" "}
          <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> TODOS
        </Button>
        <Button
          className={cn(
            "border border-primary font-bold",
            selected !== "done" && "bg-secondary text-primary"
          )}
          onClick={() => setSelected("done")}
        >
          {" "}
          <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> ENCERRADOS
        </Button>
        <Button
          className={cn(
            "border border-primary font-bold",
            selected !== "pending" && "bg-secondary text-primary"
          )}
          onClick={() => setSelected("pending")}
        >
          {" "}
          <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> A INICIAR
        </Button>
      </div>
      <div className="flex-none flex items-center gap-4">
        <Button onClick={openCreateBoard}>
          <Plus className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> Novo Projeto
        </Button>
      </div>
    </div>
  );
};

export default TaskHeader;
