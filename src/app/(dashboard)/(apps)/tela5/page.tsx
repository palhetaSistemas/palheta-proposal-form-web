"use client";
import { Button } from "@/src/components/ui/button";
import React from "react";
import { Releases } from "./components/releases";

export default function financialPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">Financeiro</div>
        <div className="flex flex-row items-center gap-2">
          <Button>BALANÇO</Button>
          <Button>ENTRADAS E SAÍDAS</Button>
          <Button>INVESTIMENTOS</Button>
        </div>
        <Button>LANÇAMENTOS</Button>
      </div>

      <div className="grid grid-cols-12  gap-6 ">
        <div className="col-span-12 lg:col-span-8">
          <Releases />
        </div>
      </div>
    </div>
  );
}
