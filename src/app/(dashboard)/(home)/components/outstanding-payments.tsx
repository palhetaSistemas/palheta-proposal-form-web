"use client";
import { ChevronDown, Eye } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import DashboardDropdown from "@/src/components/dashboard-dropdown";
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
import { Button } from "@/src/components/ui/button";
const pending = [
  {
    id: 1,
    name: "John Doe",
    church: "Igreja Batista",
    quantity: "4963",
    date: "2023-10-01",
    isOverdue: false,
    image: farm1,
  },
  {
    id: 2,
    name: "Jane Smith",
    church: "Igreja Presbiteriana",
    quantity: "2963",
    date: "2023-09-15",
    isOverdue: true,
    image: farm2,
  },
  {
    id: 3,
    name: "Michael Johnson",
    church: "Igreja Metodista",
    quantity: "1963",
    date: "2023-08-20",
    isOverdue: true,
    image: farm3,
  },
  {
    id: 4,
    name: "Emily Davis",
    church: "Igreja Católica",
    quantity: "963",
    date: "2023-10-10",
    isOverdue: false,
    image: farm4,
  },
  {
    id: 5,
    name: "David Wilson",
    church: "Igreja Adventista",
    quantity: "663",
    date: "2023-09-25",
    isOverdue: true,
    image: farm5,
  },
];
const OutstandingPayments = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center justify-between border-none pb-0">
        <CardTitle> À Receber Pendente </CardTitle>
        {/* <DashboardDropdown /> */}
        <Image
          className=" w-8 h-8"
          alt=""
          width={400}
          height={400}
          src={"/images/logo/logo.svg"}
        />
      </CardHeader>
      <CardContent className="px-0">
        <div className="flex flex-col">
          {pending.map((item, index) => (
            <div
              className="flex flex-wrap  gap-2 border-b border-b-zinc-400 hover:bg-default-50 py-[11px] px-4"
              key={`social-item-${index}`}
            >
              <div className="flex-1 flex items-center gap-3">
                <div className="w-8 h-8 md:h-10 md:w-10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full rounded-lg object-cover"
                    priority={true}
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-default-600">
                    {item.name}
                  </div>
                  <div className="text-sm font-medium text-default-600">
                    {item.church}
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col gap-1.5">
                <div className="text-lg text-default-600"> {item.quantity}</div>
                <div className="text-sm  text-default-600"> {item.date}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full items-center pt-4 justify-center">
          <Button color="secondary">
            <span>Ver Todos</span>
            <ChevronDown />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OutstandingPayments;
