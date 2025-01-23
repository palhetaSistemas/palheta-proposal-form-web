"use client";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import Image from "next/image";
import { Plus, Search, Tags } from "lucide-react";
import { Pagination } from "@/src/components/ui/pagination";
import { useState } from "react";
import CreateTask from "./CreateLaunch";
import CreateLaunch from "./CreateLaunch";
import { cn } from "@/src/lib/utils";

interface User {
  id: number;
  name: string;
  task: string;
  deadline: string;
  overdue: string;
  avatar: { src: string };
}
const TableWithCards = () => {
  const cards = [
    {
      id: 1,
      title: "QNT. PROJETOS",
      total: "20",
      price: "R$10,234",
      imageSrc: "images/tableCard.png",
    },
    {
      id: 2,
      title: "QNT. PROJETOS",
      total: "20",
      price: "R$10,234",
      imageSrc: "images/tableCard2.png",
    },
    {
      id: 3,
      title: "PROJETADO",
      total: "20",
      price: "R$10,234",
      imageSrc: "images/tableCard3.png",
    },
    {
      id: 4,
      title: "PROJETADO",
      total: "20",
      price: "R$10,234",
      imageSrc: "images/tableCard4.png",
    },
  ];
  const columns = [
    { key: "isProfit", label: "" },
    { key: "origin", label: "Origin" },
    { key: "date", label: "Date" },
    { key: "value", label: "Value" },
    { key: "project", label: "Project" },
    { key: "destinationAccount", label: "Destination Account" },
    { key: "monthReference", label: "Month Reference" },
    { key: "status", label: "Status" },
  ];
  const transactions = [
    {
      id: 1,
      origin: "PR SAMUEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "PAID",
      isProfit: true,
    },
    {
      id: 2,
      origin: "DESPESA X",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
    },
    {
      id: 3,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "PAID",
      isProfit: true,
    },
    {
      id: 4,
      origin: "PR ADRIANO",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "DINHEIRO",
      monthReference: "FEVEREIRO",
      status: "PAID",
      isProfit: true,
    },
    {
      id: 5,
      origin: "PR SAMUEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "DINHEIRO",
      monthReference: "FEVEREIRO",
      status: "PAID",
      isProfit: true,
    },
    {
      id: 6,
      origin: "PR RAFAEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "DINHEIRO",
      monthReference: "FEVEREIRO",
      status: "PAID",
      isProfit: true,
    },
    {
      id: 7,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
  ];
  const [openLaunchBoard, setOpenLaunchBoard] = useState(false);
  const [selected, setSelected] = useState("1");
  const closeCreateLaunchBoard = () => {
    setOpenLaunchBoard(false);
  };
  return (
    <>
      <Card className="h-full">
        <CardHeader className="flex-row justify-between items-center mb-0">
          <div className="flex flex-row w-full items-center">
            <div className="flex flex-col w-1/2 gap-4 justify-between">
              <div className="flex flex-row items-center gap-2 justify-between">
                <Button
                  onClick={() => setOpenLaunchBoard(true)}
                  color="primary"
                >
                  <Plus className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
                  LANÇAMENTO
                </Button>
                <Button
                  className={cn(
                    "bg-white text-primary border border-primary",
                    selected === "1" && "bg-primary text-white"
                  )}
                  onClick={() => setSelected("1")}
                >
                  <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> BALANÇO
                </Button>
                <Button
                  className={cn(
                    "bg-white text-primary border border-primary",
                    selected === "2" && "bg-primary text-white"
                  )}
                  onClick={() => setSelected("2")}
                >
                  <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> ENTRADAS E
                  SAÍDAS
                </Button>
                <Button
                  className={cn(
                    "bg-white text-primary border border-primary",
                    selected === "3" && "bg-primary text-white"
                  )}
                  onClick={() => setSelected("3")}
                >
                  <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> INVESTIMENTOS
                </Button>
              </div>
              <div className="w-full h-10 rounded-lg flex flex-row items-center gap-1 p-0.5 border border-zinc-400">
                <Search className="text-zinc-400 h-4 w-4" />
                <input
                  className="outline-none text-zinc-400 placeholder:text-zinc-400 flex-w"
                  placeholder="Procurar"
                />
              </div>
            </div>
            <div className="flex items-center flex-1  w-[40%] flex-row justify-end gap-4">
              {cards.map((item) => (
                <div className="flex relative flex-col items-center justify-evenly text-center bg-primary text-white h-24  w-28 border border-[#013466] shadow-md  bg-cover bg-center bg-no-repeat shadow-[#013466] overflow-hidden rounded-lg">
                  <h3 className="text-[10px]">{item.title}</h3>
                  <h3 className="text-sm font-bold">{item.total}</h3>
                  <h3 className="text-sm">{item.price}</h3>
                </div>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-0 pb-0 overflow-x-auto">
          <Table>
            <TableHeader className="- pr-8">
              <TableRow className="gap-[1px] ">
                {columns.map((column) => (
                  <TableHead
                    key={column.key}
                    className="text-sm font-semibold self-center  text-center h-12 last:text-start "
                  >
                    <p className="text-center">{column.label}</p>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow
                  key={transaction.id}
                  className="hover:bg-default-100 text-center"
                >
                  <TableCell className="text-sm font-medium  py-1 ">
                    <div
                      className={` ${
                        transaction.isProfit ? "bg-primary" : "bg-[#DC2626]"
                      } rounded-md overflow-hidden flex py-1  items-center justify-center`}
                    >
                      <Image
                        src={"/images/folderIcon.svg"}
                        alt=""
                        width={500}
                        height={500}
                        className="h-5 w-5"
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-sm font-medium text-[#020817]  py-1 whitespace-nowrap">
                    {transaction.origin}
                  </TableCell>
                  <TableCell className="text-sm   text-[#475569] font-bold py-1 whitespace-nowrap">
                    {transaction.date}
                  </TableCell>
                  <TableCell className="text-sm font-bold text-primary py-1 whitespace-nowrap">
                    {transaction.value}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-primar py-1 whitespace-nowrap">
                    {transaction.project}
                  </TableCell>
                  <TableCell className="text-sm font-medium  text-primar py-1 whitespace-nowrap">
                    {transaction.destinationAccount}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-primar py-1 whitespace-nowrap">
                    {transaction.monthReference}
                  </TableCell>
                  <TableCell
                    className={`text-sm font-medium text-primar py-4 whitespace-nowrap items-center justify-center `}
                  >
                    <div
                      className={` rounded-full self-center text-center  ${
                        transaction.status === "PAID"
                          ? "bg-[#22C55E]/50"
                          : "bg-[#DC2626]/50"
                      }`}
                    >
                      {transaction.status}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <CreateLaunch open={openLaunchBoard} onClose={closeCreateLaunchBoard} />
    </>
  );
};

export default TableWithCards;
