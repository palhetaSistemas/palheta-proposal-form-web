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

export function ObjectivesGraph() {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row justify-between items-center mb-0">
        <Button>
          <Settings2 className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> AJUSTAR METAS
        </Button>
        <div className="flex flex-row items-center gap-2">
          <Button type="button" color="primary" asChild>
            <Link href="#">2024</Link>
          </Button>
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
