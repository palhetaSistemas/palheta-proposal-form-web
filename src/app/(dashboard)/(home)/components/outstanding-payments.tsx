"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import church1 from "@/public/images/staticDataImage/church1.png";
import church2 from "@/public/images/staticDataImage/church2.png";
import church3 from "@/public/images/staticDataImage/church3.png";
import church4 from "@/public/images/staticDataImage/church4.png";

import { Button } from "@/src/components/ui/button";
import { ScrollArea } from "@/src/components/ui/scroll-area";
const pending = [
  {
    id: 1,
    name: "Pedro Santos da Silva",
    church: "Igreja Batista",
    quantity: "R$ 10.000,00",
    date: "01/01/2025",
    isOverdue: false,
    image: church1,
  },
  {
    id: 2,
    name: "Paulo Santos",
    church: "Igreja Presbiteriana",
    quantity: "R$ 23.000,00",
    date: "30/08/2024",
    isOverdue: true,
    image: church2,
  },
  {
    id: 3,
    name: "Osmar Cardoso",
    church: "Igreja Metodista",
    quantity: "R$ 19.630,90",
    date: "30/07/2024",
    isOverdue: true,
    image: church3,
  },
  {
    id: 4,
    name: "Pedro Santos da Silva",
    church: "Igreja Católica",
    quantity: "R$ 9.620,00",
    date: "05/02/2025",
    isOverdue: false,
    image: church4,
  },
  {
    id: 5,
    name: "Paulo Santos",
    church: "Igreja Adventista",
    quantity: "R$ 6.630,00",
    date: "21/03/2025",
    isOverdue: false,
    image: church2,
  },
  {
    id: 6,
    name: "Pedro Santos da Silva",
    church: "Igreja Batista",
    quantity: "R$ 10.000,00",
    date: "01/01/2025",
    isOverdue: false,
    image: church1,
  },
  {
    id: 7,
    name: "Paulo Santos",
    church: "Igreja Presbiteriana",
    quantity: "R$ 23.000,00",
    date: "30/08/2024",
    isOverdue: true,
    image: church2,
  },
  {
    id: 8,
    name: "Osmar Cardoso",
    church: "Igreja Metodista",
    quantity: "R$ 19.630,90",
    date: "30/07/2024",
    isOverdue: true,
    image: church3,
  },
  {
    id: 9,
    name: "Pedro Santos da Silva",
    church: "Igreja Católica",
    quantity: "R$ 9.620,00",
    date: "05/02/2025",
    isOverdue: false,
    image: church4,
  },
  {
    id: 10,
    name: "Paulo Santos",
    church: "Igreja Adventista",
    quantity: "R$ 6.630,00",
    date: "21/03/2025",
    isOverdue: false,
    image: church2,
  },
];
const OutstandingPayments = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center justify-between border-none pb-0">
        <CardTitle> À Receber Pendente </CardTitle>
        {/* <DashboardDropdown /> */}
        <Image
          className=" w-32 h-10"
          alt=""
          width={400}
          height={400}
          src={"/images/logo/logo.png"}
        />
      </CardHeader>
      <CardContent className="px-0">
        <div className="flex flex-col  h-80">
          <ScrollArea className="h-full">
            {pending.map((item, index) => (
              <div
                className="flex flex-wrap  gap-2 border-b border-b-zinc-400 hover:bg-default-50 py-2 px-4"
                key={`social-item-${index}`}
              >
                <div className="flex-1 flex items-center gap-2">
                  <div className="w-8 h-8 md:h-10 md:w-10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full rounded-lg object-cover"
                      priority={true}
                    />
                  </div>
                  <div>
                    <div
                      className={` ${
                        item.isOverdue ? "text-[#FC5757]" : "text-primary"
                      } text-sm font-medium `}
                    >
                      {item.name}
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        item.isOverdue ? "text-[#FC5757]" : "text-primary"
                      }`}
                    >
                      {item.church}
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-col ">
                  <div
                    className={` font-bold ${
                      item.isOverdue ? "text-[#FC5757]" : "text-primary"
                    }`}
                  >
                    {" "}
                    {item.quantity}
                  </div>
                  <div
                    className={`text-xs ${
                      item.isOverdue ? "text-[#FC5757]" : "text-primary"
                    } `}
                  >
                    {" "}
                    {item.date}
                  </div>
                  {item.isOverdue && (
                    <div className="flex flex-row items-center gap-2">
                      <div className="border border-[#FC5757] rounded-full h-2 w-2" />
                      <div className={`text-[10px]  text-[#FC5757]`}>
                        {" "}
                        ATRASADA
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </ScrollArea>
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
