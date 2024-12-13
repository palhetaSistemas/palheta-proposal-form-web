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
      text: "Despesas",
      total: "R$10,234",
      color: "exit",
    },
    {
      value: "event",
      text: "Receitas",
      total: "R$10,234",
      color: "entry",
    },
    {
      value: "Receitas",
      text: "à receber (Neste mês)",
      total: "R$10,234",
      color: "entry",
    },
    {
      value: "newuser",
      text: "à pagar (Neste mês)",
      total: "R$10,234",
      color: "exit",
    },
  ];
  return (
    <Tabs defaultValue="all">
      <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 justify-start w-full bg-transparent h-full">
        {cards.map((item, index) => (
          <div
            className={cn(
              "flex flex-col gap-1.5 rounded-md p-4 overflow-hidden data-[state=inactive]:opacity-50 items-start  relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden data-[state=active]:shadow-none data-[state=active]:before:block",
              {
                "bg-green-500 data-[state=active]:bg-green-50 dark:bg-primary/70":
                  item.color === "entry",
                "bg-red-500 data-[state=active]:bg-red-50 dark:bg-orange-500":
                  item.color === "exit",
              }
            )}
          >
            <span
              className={cn(
                "h-10 w-10 rounded-full bg-primary/40 absolute -top-3 -right-3 ring-8 ring-primary/30",
                {
                  "bg-red-400 ring-red-200 dark:bg-orange-300 dark:ring-orange-400":
                    item.color === "exit",
                  "bg-green-400 ring-green-200 dark:bg-green-300 dark:ring-green-400":
                    item.color === "entry",
                }
              )}
            ></span>

            <span className="text-sm text-white dark:text-primary-foreground font-semibold capitalize relative z-10">
              {item.text}
            </span>
            <span
              className={`text-lg font-semibold text-white dark:text-primary-foreground`}
            >
              {item.total}
            </span>
          </div>
        ))}
      </TabsList>
    </Tabs>
  );
}
