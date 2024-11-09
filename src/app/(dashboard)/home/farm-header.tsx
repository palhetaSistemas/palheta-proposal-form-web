"use client";
import Image from "next/image";
import { Badge } from "@/src/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import avatar1 from "@/public/images/avatar/avatar-7.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import { FarmProps } from "@/src/@types/farm";
import moment from "moment";
import "moment/locale/pt-br";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Plus } from "lucide-react";

moment.locale("pt-br");
const FarmHeader = ({ farm }: { farm: FarmProps }) => {
  const users = [
    { image: avatar1, label: "John Doe", value: "john.doe" },
    { image: avatar2, label: "Jane Smith", value: "jane.smith" },
    { image: avatar3, label: "Bob Johnson", value: "bob.johnson" },
    { image: avatar4, label: "Alice Lee", value: "alice.lee" },
  ];
  return (
    <>
      <CardHeader className="flex-row items-center">
        <div className="flex-none flex items-center gap-3">{/* elipsis */}</div>
      </CardHeader>
      <CardContent className="border-b border-default-200 flex flex-row justify-between">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-none">
            <div className="h-[148px] w-[148px] rounded">
              <Image
                src={farm.image}
                alt="dashtail"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap justify-between gap-4">
              <div className="text-xl font-medium text-default-950 truncate">
                {" "}
                {farm.name}{" "}
              </div>
            </div>
            <div className="text-sm text-default-600 w-full  mt-1">
              {farm.city + "-" + farm.state}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 lg:gap-6">
              <div className="border border-dashed border-default-300 rounded py-2.5 px-3 min-w-fit lg:min-w-[148px]">
                <div className="text-sm font-medium text-default-500 capitalize">
                  Data de Início
                </div>
                <div className="text-sm font-medium text-default-900">
                  {moment(farm.startDate).format("DD [de] MMM [de] YYYY")}
                </div>
              </div>
              <div className="border border-dashed border-default-300 rounded py-2.5 px-3 min-w-fit lg:min-w-[148px]">
                <div className="text-sm font-medium text-default-500 capitalize">
                  Última Atualização
                </div>
                <div className="text-sm font-medium text-default-900">
                  {moment(farm.lastUpdate).format("DD [de] MMM [de] YYYY")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-dashed gap-8 flex flex-col border-default-300 rounded py-2.5 px-3 min-w-fit lg:min-w-[148px]">
            <div className="flex w-full justify-between ">
              <div className="text-sm font-medium text-default-500 capitalize">
                Integrantes
              </div>
              <div className="bg-default-200 p-px rounded-sm">
                <Plus className="w-6 h-6 text-default-600" />
              </div>
            </div>
            {users.length > 0 && (
              <div>
                <AvatarGroup max={3} total={users.length}>
                  {users?.map((user, index) => (
                    <Avatar
                      key={index}
                      className=" ring-1 ring-primary-500 ring-offset-[1px]  ring-offset-primary-500"
                    >
                      <AvatarImage className="" src={user?.image?.src} />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                  ))}
                </AvatarGroup>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </>
  );
};

export default FarmHeader;
