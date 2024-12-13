"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useState } from "react";
export function FinancialOverview() {
  const [quarter, setQuarter] = useState(0);
  return (
    <Card className="h-full">
      <CardHeader className="flex-row justify-between items-center mb-0">
        <CardTitle>Tarefas Atrasadas</CardTitle>
        <div className="flex flex-row items-center gap-2">
          <Button type="button" color="primary" asChild>
            <Link href="#">2024</Link>
          </Button>
          <Button type="button" color="secondary" asChild>
            <Link href="#">Ver Todos</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-2 py-2 overflow-x-auto pr-2  flex flex-row justify-between">
        <Button
          className={` ${
            quarter === 0 ? "shadow-md shadow-primary text-primary" : ""
          } px-9 py-4 text-lg`}
          onClick={() => setQuarter(0)}
          type="button"
          color={quarter === 0 ? "secondary" : "primary"}
          asChild
        >
          <Link href="#">1º Trimestre</Link>
        </Button>
        <Button
          className={` ${
            quarter === 1 ? "shadow-md shadow-primary text-primary" : ""
          } px-9 py-4 text-lg`}
          onClick={() => setQuarter(1)}
          type="button"
          color={quarter === 1 ? "secondary" : "primary"}
          asChild
        >
          <Link href="#">2º Trimestre</Link>
        </Button>
        <Button
          className={` ${
            quarter === 2 ? "shadow-md shadow-primary text-primary" : ""
          } px-9 py-4 text-lg`}
          onClick={() => setQuarter(2)}
          type="button"
          color={quarter === 2 ? "secondary" : "primary"}
          asChild
        >
          <Link href="#">3º Trimestre</Link>
        </Button>
        <Button
          className={` ${
            quarter === 3 ? "shadow-md shadow-primary text-primary" : ""
          } px-9 py-4 text-lg`}
          onClick={() => setQuarter(3)}
          type="button"
          color={quarter === 3 ? "secondary" : "primary"}
          asChild
        >
          <Link href="#">4º Trimestre</Link>
        </Button>
      </CardContent>
      <CardContent className="px-2 py-2 overflow-x-auto">
        <div className="w-full h-40 bg-red-500"></div>
      </CardContent>
    </Card>
  );
}
