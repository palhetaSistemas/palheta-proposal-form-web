import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { DataRows, users } from "./data";
import { Button } from "@/src/components/ui/button";
import { ScrollArea } from "@/src/components/ui/scroll-area";

const SimpleTable = () => {
  const columns: { key: string; label: string }[] = [
    {
      key: "name",
      label: "name",
    },
    {
      key: "title",
      label: "title",
    },
    {
      key: "email",
      label: "email",
    },
    {
      key: "role",
      label: "role",
    },
    {
      key: "action",
      label: "action",
    },
  ];
  return (
    <div className="border border-default-900 rounded-lg  h-[320px]  ">
      <ScrollArea className="h-full">
        <Table className="">
          <TableHeader className="border-default-900">
            <TableRow className="border-default-900">
              {columns.map((column) => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...users, ...users].map((item: DataRows) => (
              <TableRow className="border-default-900" key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  <span className="capitalize font-medium">{item.role}</span>
                </TableCell>
                <TableCell className="ltr:pr-5 rtl:pl-5">
                  <Button className="p-0 h-auto hover:bg-transparent bg-transparent text-primary hover:text-primary/80  hover:underline">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default SimpleTable;
