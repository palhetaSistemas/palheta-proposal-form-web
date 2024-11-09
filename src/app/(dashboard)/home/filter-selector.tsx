import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Home } from "lucide-react";
import Background from "@/public/images/projects/selectorBackground.png";
import Image from "next/image";
import { FilterFixedData } from "./filter-fixed-data";
import { GeneralTabContent } from "./tabContent/generalTabContent";
import { MortalityTabContent } from "./tabContent/mortalityTabContent";
import { MorbidityTabContent } from "./tabContent/morbidityTabContent";
import { LethalityTabContent } from "./tabContent/lethalityTabContent";
import { RoundEfficiencyTabContent } from "./tabContent/roundEfficiencyTabContent";
import { MedicationAnalyticsTabContent } from "./tabContent/medicationAnalyticsTabContent";
import { DeathAnalyticsTabContent } from "./tabContent/deathAnalyticsTabContent";
import { TreatmentFinancialTabContent } from "./tabContent/treatmentFinancialTabContent";

export function FilterSelector() {
  const tabs = [
    {
      name: "Painel Geral",
      icon: Home,
      value: "general",
      component: GeneralTabContent,
    },
    {
      name: "Mortalidade",
      icon: Home,
      value: "mortality",
      component: MortalityTabContent,
    },
    {
      name: "Morbidade",
      icon: Home,
      value: "morbidity",
      component: MorbidityTabContent,
    },
    {
      name: "Letalidade",
      icon: Home,
      value: "lethality",
      component: LethalityTabContent,
    },
    {
      name: "Eficiência da Ronda",
      icon: Home,
      value: "round_efficiency",
      component: RoundEfficiencyTabContent,
    },
    {
      name: "Analítico Medicação",
      icon: Home,
      value: "medication_analytics",
      component: MedicationAnalyticsTabContent,
    },
    {
      name: "Analítico Morte",
      icon: Home,
      value: "death_analytics",
      component: DeathAnalyticsTabContent,
    },
    {
      name: "Financeiro Tratamento",
      icon: Home,
      value: "treatment_financial",
      component: TreatmentFinancialTabContent,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-8 ">
      <div>
        <Tabs defaultValue="general">
          <TabsList className="flex justify-center bg-primary-500 rounded-t-md rounded-b-none">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                <div className="flex items-center justify-center p-4">
                  <tab.icon className="w-6 h-6" />
                  <span className="ml-2 text-base">{tab.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <Image src={Background} alt="background" className="w-full" />
          <div>
            <FilterFixedData />
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <tab.component />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
