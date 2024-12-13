"use client";
import { cn } from "@/src/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Card, CardContent } from "@/src/components/ui/card";
import { FileWarning } from "lucide-react";
export function IndicatorCard() {
  const cards = [
    {
      value: "all",
      text: "Projetos Ativos",
      total: "11",
      color: "primary",
    },
    {
      value: "event",
      text: "Propostas",
      total: "39",
      color: "warning",
    },
    {
      value: "Receitas",
      text: "Animais Vendidos",
      total: "R$ 444.333,99",
      color: "success",
    },
    {
      value: "newuser",
      text: "Despesas",
      total: "R$ 11.222,33",
      color: "info",
    },
  ];
  return (
    <Card className="h-full">
      <CardContent className="p-1 md:p-5">
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 justify-start w-full bg-transparent h-full">
            {cards.map((item, index) => (
              <div
                className={cn(
                  "flex flex-col gap-1.5 rounded-md p-4 overflow-hidden data-[state=inactive]:opacity-50 items-start  relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden data-[state=active]:shadow-none data-[state=active]:before:block",
                  {
                    "bg-primary/30 data-[state=active]:bg-primary/30 dark:bg-primary/70":
                      item.color === "primary",
                    "bg-orange-50 data-[state=active]:bg-orange-50 dark:bg-orange-500":
                      item.color === "warning",
                    "bg-green-50 data-[state=active]:bg-green-50 dark:bg-green-500":
                      item.color === "success",
                    "bg-cyan-50 data-[state=active]:bg-cyan-50 dark:bg-cyan-500 ":
                      item.color === "info",
                  }
                )}
              >
                <span
                  className={cn(
                    "h-10 w-10 rounded-full bg-primary/40 absolute -top-3 -right-3 ring-8 ring-primary/30",
                    {
                      "bg-primary/50  ring-primary/20 dark:bg-primary dark:ring-primary/40":
                        item.color === "primary",
                      "bg-orange-200 ring-orange-100 dark:bg-orange-300 dark:ring-orange-400":
                        item.color === "warning",
                      "bg-green-200 ring-green-100 dark:bg-green-300 dark:ring-green-400":
                        item.color === "success",
                      "bg-cyan-200 ring-cyan-100 dark:bg-cyan-300 dark:ring-cyan-400":
                        item.color === "info",
                    }
                  )}
                ></span>
                <div className="w-8 h-8  border-dashed border-2 border-primary rounded-full p-0.5">
                  <div className="flex flex-row bg-primary  items-center justify-center rounded-full w-full h-full">
                    <FileWarning fill="white" size={16} />
                  </div>
                </div>
                <span className="text-sm text-default-800 dark:text-primary-foreground font-semibold capitalize relative z-10">
                  {item.text}
                </span>
                <span
                  className={`text-lg font-semibold text-${item.color}/80 dark:text-primary-foreground`}
                >
                  {item.total}
                </span>
              </div>
            ))}
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  );
}
