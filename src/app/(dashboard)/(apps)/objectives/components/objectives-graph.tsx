"use client";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { Tabs, TabsList } from "@/src/components/ui/tabs";
import { useState } from "react";
import RevenueChart from "../../../(home)/components/revenue-graph/revenue-chart";
import { Settings2 } from "lucide-react";
import { HorizontalBarGraph } from "./objectiver-chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

interface ObjectivesGraphProps {
  openSheet: () => void;
}

export function ObjectivesGraph({ openSheet }: ObjectivesGraphProps) {
  const [selectedYear, setSelectedYear] = useState(2025);
  return (
    <Card className="h-full">
      <CardHeader className="flex-row justify-between items-center mb-0">
        <Button onClick={openSheet}>
          <Settings2 className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> AJUSTAR METAS
        </Button>
        <div className="flex flex-row items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button type="button" color="primary" asChild>
                <Link href="#">{selectedYear}</Link>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuArrow />
              <DropdownMenuItem
                onSelect={() => setSelectedYear(2025)}
                className={cn(
                  selectedYear === 2025 && "bg-primary/40 text-white"
                )}
              >
                2025
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setSelectedYear(2024)}
                className={cn(
                  selectedYear === 2024 && "bg-primary/40 text-white"
                )}
              >
                2024
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setSelectedYear(2023)}
                className={cn(
                  selectedYear === 2023 && "bg-primary/40 text-white"
                )}
              >
                2023
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setSelectedYear(2022)}
                className={cn(
                  selectedYear === 2022 && "bg-primary/40 text-white"
                )}
              >
                2022
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button type="button" color="secondary" asChild>
            <Link href="#">Selecionar Data</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-2 ">
        <HorizontalBarGraph />
      </CardContent>
    </Card>
  );
}
