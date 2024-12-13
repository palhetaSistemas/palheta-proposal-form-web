"use client";
import { Eye } from "lucide-react";
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
const socials = [
  {
    id: 1,
    name: "Rancho Sol",
    link: "Sinop - MT",
    total: "4963",
    image: farm1,
  },
  {
    id: 2,
    name: "Fazenda Boa",
    link: "Sorriso - MT",
    total: "2963",
    image: farm2,
  },
  {
    id: 3,
    name: "Estância Forte",
    link: "Dourados - MS",
    total: "1963",
    image: farm3,
  },
  {
    id: 4,
    name: "Rancho Verde",
    link: "Belo Horizonte - MG",
    total: "963",
    image: farm4,
  },
  {
    id: 5,
    name: "Sítio Ouro",
    link: "Beltim - MG",
    total: "663",
    image: farm5,
  },
  {
    id: 6,
    name: "Fazenda Vale",
    link: "Contagem - MG",
    total: "363",
    image: farm6,
  },
  {
    id: 7,
    name: "Rancho Paz",
    link: "Goiânia - GO",
    total: "333",
    image: farm7,
  },
  {
    id: 8,
    name: "Estância Rio",
    link: "Luziânia - GO",
    total: "293",
    image: farm8,
  },
  {
    id: 9,
    name: "Fazenda Céu",
    link: "Anápolis - GO",
    total: "213",
    image: farm9,
  },
  {
    id: 10,
    name: "Rancho Brisa",
    link: "Formosa - GO",
    total: "113",
    image: farm10,
  },
];
const TopTen = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center justify-between border-none pb-0">
        <CardTitle> Lista de Clientes </CardTitle>
        {/* <DashboardDropdown /> */}
      </CardHeader>
      <CardContent className="px-0">
        <div>
          {socials.map((item, index) => (
            <div
              className="flex flex-wrap  gap-2 hover:bg-default-50 py-[11px] px-4"
              key={`social-item-${index}`}
            >
              <div className="flex-1 flex items-center gap-3">
                <div className="w-8 h-8 md:h-10 md:w-10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    priority={true}
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-default-600">
                    {item.name}
                  </div>
                  <div className="text-xs text-default-500"> {item.link}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="text-base font-medium text-default-600">
                  {" "}
                  {item.total}
                </div>
                <div className="h-5 w-5 rounded-full bg-primary bg-opacity-10  justify-center items-center hidden md:flex">
                  <Eye className="w-2.5 h-2.5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopTen;
