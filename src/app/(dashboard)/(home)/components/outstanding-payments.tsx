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
    quantity: "R$ 10.000,00",
    date: "01/01/2025",
    isOverdue: false,
    image: farm1,
  },
  {
    id: 2,
    name: "Jane Smith",
    church: "Igreja Presbiteriana",
    quantity: "R$ 23.000,00",
    date: "30/08/2024",
    isOverdue: true,
    image: farm2,
  },
  {
    id: 3,
    name: "Michael Johnson",
    church: "Igreja Metodista",
    quantity: "R$ 19.630,90",
    date: "30/07/2024",
    isOverdue: true,
    image: farm3,
  },
  {
    id: 4,
    name: "Emily Davis",
    church: "Igreja Católica",
    quantity: "R$ 9.620,00",
    date: "05/02/2025",
    isOverdue: false,
    image: farm4,
  },
  {
    id: 5,
    name: "David Wilson",
    church: "Igreja Adventista",
    quantity: "R$ 6.630,00",
    date: "21/03/2025",
    isOverdue: false,
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
          className=" w-32 h-10"
          alt=""
          width={400}
          height={400}
          src={"/images/logo/logo.png"}
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
              <div className="flex items-center flex-col gap-1.5">
                <div
                  className={`text-lg font-bold ${
                    item.isOverdue ? "text-[#FC5757]" : "text-primary"
                  }`}
                >
                  {" "}
                  {item.quantity}
                </div>
                <div
                  className={`text-sm ${
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
