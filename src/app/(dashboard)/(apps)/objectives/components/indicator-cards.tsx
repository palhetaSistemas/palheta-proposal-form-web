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
      value: "R$ 100.000,00",
      text: "FATURAMENTO",
    },
    {
      value: "10",
      text: "CONTRATOS",
    },
    {
      value: "10",
      text: "LEADS",
    },
    {
      value: "10",
      text: "PROJETOS",
    },
    {
      value: "10",
      text: "PROPOSTAS",
    },
    {
      value: "R$ 10.000,00",
      text: "TICKET MÉDIO",
    },
    {
      value: "55%",
      text: "CONVERSÃO",
    },
  ];
  return (
    <Card>
      <Tabs defaultValue="all">
        <TabsList className="flex flex-col gap-4 justify-start w-full bg-transparent h-full">
          {cards.map((item) => (
            <div
              className={cn(
                "flex flex-col gap-1.5 w-full rounded-md p-4 overflow-hidden data-[state=inactive]:opacity-50 bg-primary/70  items-start  relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden data-[state=active]:shadow-none data-[state=active]:before:block"
              )}
            >
              <span
                className={cn(
                  "h-10 w-10 rounded-full bg-primary/40 absolute -top-3 -right-3 ring-8  bg-primary ring-primary/50 "
                )}
              ></span>

              <span className="text-sm text-white dark:text-primary-foreground font-semibold capitalize relative z-10">
                {item.text}
              </span>
              <span
                className={`text-lg font-semibold text-white dark:text-primary-foreground`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </TabsList>
      </Tabs>
    </Card>
  );
}
