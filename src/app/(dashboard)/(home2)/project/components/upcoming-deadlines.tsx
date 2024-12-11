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
import { Progress } from "@/src/components/ui/progress";

// images
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

const columns = [
  {
    key: "employee",
    label: "Cliente",
  },
  {
    key: "task name",
    label: "Relatório",
  },
  {
    key: "deadline",
    label: "Prazo",
  },
  {
    key: "workload",
    label: "Progresso",
  },
];

interface DataItem {
  id: number;
  name: string;
  task: string;
  deadline: string;
  workload: number;
  avatar: {
    src: string;
  };
}

const upcomingDeadlineData: DataItem[] = [
  {
    id: 1,
    name: "Marcos Reis",
    task: "Relatório de animais",
    deadline: "21 Jan 2024",
    workload: 50,
    avatar: farm5,
  },
  {
    id: 2,
    name: "Marcos Reis",
    task: "Relatório de animais",
    deadline: "21 Jan 2024",
    workload: 40,
    avatar: farm6,
  },
  {
    id: 3,
    name: "Marcos Reis",
    task: "Relatório de animais",
    deadline: "21 Jan 2024",
    workload: 70,
    avatar: farm7,
  },
  {
    id: 4,
    name: "Marcos Reis",
    task: "Relatório de animais",
    deadline: "21 Jan 2024",
    workload: 80,
    avatar: farm8,
  },
  {
    id: 5,
    name: "Marcos Reis",
    task: "Relatório de animais",
    deadline: "21 Jan 2024",
    workload: 60,
    avatar: farm9,
  },
  {
    id: 6,
    name: "Marcos Reis",
    task: "Relatório de animais",
    deadline: "21 Jan 2024",
    workload: 90,
    avatar: farm10,
  },
];
const UpcomingDeadline = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-0">
        <CardTitle>Relatórios</CardTitle>
        <Button type="button" color="secondary">
          Ver Todos
        </Button>
      </CardHeader>
      <CardContent className="px-0 overflow-x-auto pb-0">
        <Table>
          <TableHeader className="bg-default-200">
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className="text-sm font-semibold text-default-800"
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {upcomingDeadlineData.map((item) => (
              <TableRow key={item.id} className="hover:bg-default-100">
                <TableCell className="flex items-center gap-2 py-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={item?.avatar.src} alt="" />
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-defualt-600 whitespace-nowrap">
                    {item.name}
                  </span>
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 overflow-hidden text-ellipsis whitespace-nowrap max-w-[181px] py-2">
                  {item.task}
                </TableCell>
                <TableCell className="text-sm font-medium text-default-600 whitespace-nowrap py-2">
                  {item.deadline}
                </TableCell>
                <TableCell className="min-w-[120px] text-sm font-medium text-default-600 last:text-end py-2">
                  <Progress value={item.workload} size="lg" showValue />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UpcomingDeadline;
