"use client";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import DashboardSelect from "@/src/components/dasboard-select";
import MapClusterExpand from "../../../(map)/map-unovis-leaflet/cluster-expand";

const ActiveProjectsComponent = () => {
  const allProjectsData = [
    {
      id: 1,
      city: "São Paulo",
      percentage: 80,
    },
    {
      id: 2,
      city: "Rio de Janeiro",
      percentage: 60,
    },
    {
      id: 3,
      city: "Minas Gerais",
      percentage: 40,
    },
    {
      id: 4,
      city: "Bahia",
      percentage: 20,
    },
    {
      id: 5,
      city: "Pernambuco",
      percentage: 10,
    },
    {
      id: 6,
      city: "Paraná",
      percentage: 5,
    },
  ];
  return (
    <Card className="h-full">
      <CardHeader className="border-none pb-0">
        <div className="flex items-center gap-2 flex-wrap ">
          <div className="flex-1">
            <div className="text-xl font-semibold text-default-900 whitespace-nowrap">
              Obras Ativas no Momento
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-1 md:p-5">
        <div className="grid grid-cols-6 gap-4">
          {allProjectsData.map((item, index) => (
            <div
              className="flex col-span-1 flex-col items-center gap-1  py-1 px-4"
              key={`social-item-${index}`}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="h-2 w-2 min-w-2 min-h-2 rounded-full bg-primary" />
                <div className="text-[12px]  text-primary truncate max-w-[83%] w-[83%] ">
                  {item.city}
                </div>
              </div>
              <div className="text-sm text-primary font-bold">
                {item.percentage}%
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardContent className="p-1 md:p-5">
        <MapClusterExpand />
      </CardContent>
    </Card>
  );
};

export default ActiveProjectsComponent;
