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
  return (
    <Tabs defaultValue="all">
      <TabsList className="flex flex-row gap-4 justify-start w-full bg-transparent h-full"></TabsList>
    </Tabs>
  );
}
