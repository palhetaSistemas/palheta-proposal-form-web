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

const Task = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row justify-between items-center mb-0">
        <CardTitle>Tarefas</CardTitle>
        <Button type="button" color="secondary" asChild>
          <Link href="#">+ Tarefas</Link>
        </Button>
      </CardHeader>
      <CardContent className="px-0 pb-0 overflow-x-auto">
        <Table>
          <TableHeader className="bg-default-200">
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="text-sm font-semibold text-default-800 last:text-right  h-12"
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id} className="hover:bg-default-100">
                <TableCell className="flex items-center gap-2 py-1">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={item?.avatar?.src} alt="" />
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-defualt-600 py-1 whitespace-nowrap">
                    {item.name}
                  </span>
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-1 overflow-hidden text-ellipsis whitespace-nowrap max-w-[181px]">
                  {item.task}
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 py-1 whitespace-nowrap">
                  {item.deadline}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default Task;
