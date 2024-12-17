"use client";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";

// avatar

import farm1 from "@/public/images/staticDataImage/farm1.png";
import farm2 from "@/public/images/staticDataImage/farm2.png";
import farm3 from "@/public/images/staticDataImage/farm3.png";
import farm4 from "@/public/images/staticDataImage/farm4.png";
import farm5 from "@/public/images/staticDataImage/farm5.png";
import farm6 from "@/public/images/staticDataImage/farm6.png";
import farm7 from "@/public/images/staticDataImage/farm7.png";
import farm8 from "@/public/images/staticDataImage/farm8.png";
import farm9 from "@/public/images/staticDataImage/farm9.png";
import farm10 from "@/public/images/staticDataImage/farm10.png";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Folder, Plus, Search, Tags } from "lucide-react";
import { Pagination } from "@/src/components/ui/pagination";
import DatePickerWithRange from "@/src/components/date-picker-with-range";

const columns = [
  {
    key: "employee",
    label: "Responsável",
  },
  {
    key: "task name",
    label: "Titulo",
  },
  {
    key: "deadline",
    label: "Data Final",
  },
];

interface User {
  id: number;
  name: string;
  task: string;
  deadline: string;
  overdue: string;
  avatar: { src: string };
}

const users: User[] = [
  {
    id: 1,
    name: "João da Silva",
    task: "Ligar para cliente x",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: farm1,
  },
  {
    id: 2,
    name: "João da Silva",
    task: "Enviar relatório para cliente",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: farm2,
  },
  {
    id: 3,
    name: "João da Silva",
    task: "Visitar o cliente",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: farm3,
  },
  {
    id: 4,
    name: "João da Silva",
    task: "Levar vacinas para fazenda",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: farm4,
  },
  {
    id: 5,
    name: "João da Silva",
    task: "Entregar produtos",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: farm5,
  },
];

const TableWithCards = () => {
  const cards = [
    {
      id: 1,
      title: "PROJETOS",
      total: "20",
      price: "R$:10,234",
      imageSrc: "images/tableCard.png",
    },
    {
      id: 2,
      title: "CLIENTES",
      total: "20",
      price: "R$:10,234",
      imageSrc: "images/tableCard2.png",
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
    {
      id: 8,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 9,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 10,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 11,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 12,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 13,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 13,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 13,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 13,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 13,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 13,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 13,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 13,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 13,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 13,
      origin: "PR GABRIEL",
      date: "25/02/2025",
      value: "R$ 6,500.00",
      project: "Igreja X",
      destinationAccount: "ITAÚ",
      monthReference: "FEVEREIRO",
      status: "OPEN",
      isProfit: true,
    },
    {
      id: 13,
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

  return (
    <Card className="h-full">
      <CardHeader className="flex-row justify-between items-center mb-0">
        <div className="flex flex-row w-full items-center">
          <div className="flex flex-col w-2/3 gap-4 justify-between">
            <div className="flex flex-row items-center gap-2 ">
              <Button>
                <Plus className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
                Adicionar Cliente
              </Button>
              <Button
                className="bg-white border border-primary "
                color="secondary"
              >
                <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> GERAL
              </Button>
              <Button
                className="bg-primary/70 text-white border border-primary "
                color="secondary"
              >
                <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> CONTRATADOS
              </Button>
              <Button
                className="bg-white border border-primary "
                color="secondary"
              >
                <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> NEGATIVADO
              </Button>
              <Button
                className="bg-white border border-primary "
                color="secondary"
              >
                <Tags className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> PENDENTES
              </Button>
            </div>
            <div className="items-center flex flex-row gap-4 ">
              <div className="w-[300px] h-6 rounded-lg flex flex-row items-center gap-1 p-0.5 border border-zinc-400">
                <Search className="text-zinc-400 h-4 w-4" />
                <input
                  className="outline-none text-zinc-400 placeholder:text-zinc-400 flex-w"
                  placeholder="Procurar"
                />
              </div>
              <Button
                className="bg-white border border-primary "
                color="secondary"
              >
                <Calendar className="w-4 h-4 ltr:mr-1 rtl:ml-1" /> Selecionar
                Data
              </Button>
            </div>
          </div>
          <div className="flex items-center flex-1  w-1/3 flex-row justify-end gap-4">
            {cards.map((item) => (
              <div
                style={{ backgroundImage: `url(${item.imageSrc})` }}
                className="flex relative flex-col items-center justify-evenly text-center text-white h-24  w-28 border border-[#013466] shadow-md  bg-cover bg-center bg-no-repeat shadow-[#013466] overflow-hidden rounded-lg"
              >
                <h3 className="text-[10px]">{item.title}</h3>
                <h3 className="text-md font-bold">{item.total}</h3>
                <h3 className="text-sm">{item.price}</h3>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0 overflow-x-auto">
        <Table>
          <TableHeader className="">
            <TableRow className="gap-[1px]">
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="text-sm font-semibold text-center uppercase h-12 last:text-start "
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="hover:bg-default-100">
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
                <TableCell className="text-sm font-medium text-primary py-1 whitespace-nowrap">
                  {transaction.value}
                </TableCell>
                <TableCell className="text-sm font-medium text-primar py-1 whitespace-nowrap">
                  {transaction.project}
                </TableCell>
                <TableCell className="text-sm font-medium text-primar py-1 whitespace-nowrap">
                  {transaction.destinationAccount}
                </TableCell>
                <TableCell className="text-sm font-medium text-primar py-1 whitespace-nowrap">
                  {transaction.monthReference}
                </TableCell>
                <TableCell
                  className={`text-sm py-1  flex items-center justify-end text-primary font-bold  `}
                >
                  <div
                    className={` rounded-full px-2 ${
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
  );
};

export default TableWithCards;
