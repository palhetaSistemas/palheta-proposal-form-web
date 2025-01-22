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

// avatar

import avatar1 from "@/public/images/avatar/avatar-1.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import Link from "next/link";
import { ScrollArea } from "@/src/components/ui/scroll-area";

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
    task: "Fazer Abc",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "João da Silva",
    task: "Fazer Abc",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "João da Silva",
    task: "Fazer Abc",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar3,
  },
  {
    id: 4,
    name: "João da Silva",
    task: "Fazer Abc",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar4,
  },
  {
    id: 5,
    name: "João da Silva",
    task: "Fazer Abc",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar5,
  },
  {
    id: 6,
    name: "João da Silva",
    task: "Fazer Abc",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar1,
  },
  {
    id: 7,
    name: "João da Silva",
    task: "Fazer Abc",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar2,
  },
  {
    id: 8,
    name: "João da Silva",
    task: "Fazer Abc",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar3,
  },
  {
    id: 9,
    name: "João da Silva",
    task: "Fazer Abc",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar4,
  },
  {
    id: 10,
    name: "João da Silva",
    task: "Fazer Abc",
    deadline: "21 Jan 2024",
    overdue: "01",
    avatar: avatar5,
  },
];

const Task = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row justify-between items-center mb-0">
        <CardTitle>Atividades</CardTitle>
        <Button type="button" color="secondary" asChild>
          <Link href="#">+ Atividades</Link>
        </Button>
      </CardHeader>
      <CardContent className="px-0 pb-0 overflow-x-auto h-[30rem]">
        <ScrollArea>
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
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Task;
