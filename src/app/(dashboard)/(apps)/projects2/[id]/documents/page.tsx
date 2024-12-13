import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Plus } from "lucide-react";
import DocCard from "./doc-card";
const data = [
  {
    id: 1,
    title: "Contrato de prestação de serviço",
    text: "Documento detalhando as condições, cláusulas e obrigações entre as partes contratantes para a prestação de um serviço específico.",
    last_view: "6 Jan 2024",
    time: "6:22PM",
  },
  {
    id: 2,
    title: "Relatório Agosto",
    text: "Resumo das atividades e resultados obtidos durante o mês de agosto, com destaque para metas alcançadas e pontos de atenção.",
    last_view: "6 Jan 2024",
    time: "9:51PM",
  },
  {
    id: 3,
    title: "Vistoria Sanitária",
    text: "Relatório da inspeção realizada para verificar o cumprimento das normas sanitárias em um determinado local.",
    last_view: "6 Jan 2024",
    time: "9:51PM",
  },
  {
    id: 4,
    title: "Relatório Sanitário",
    text: "Documento que detalha as condições sanitárias observadas, com recomendações e conclusões pertinentes.",
    last_view: "6 Jan 2024",
    time: "9:51PM",
  },
  {
    id: 5,
    title: "Contrato antigo",
    text: "Versão anterior do contrato estabelecido entre as partes, contendo os termos vigentes antes de atualizações ou renegociações.",
    last_view: "6 Jan 2024",
    time: "9:51PM",
  },
  {
    id: 6,
    title: "Contrato arrendamento",
    text: "Contrato estabelecendo as condições e prazos para o arrendamento de um bem ou propriedade.",
    last_view: "6 Jan 2024",
    time: "9:51PM",
  },
  {
    id: 7,
    title: "Recibo compra de vacinas",
    text: "Documento comprovando a aquisição de vacinas, incluindo detalhes como quantidade, valores e datas.",
    last_view: "6 Jan 2024",
    time: "9:51PM",
  },
];
export type Document = (typeof data)[number];
const Documents = () => {
  return (
    <Card className="mt-4">
      <CardHeader className="flex-col lg:flex-row lg:items-center gap-4 border-none mb-3">
        <div className="flex-1">
          <div className="text-xl font-medium text-default-900">
            Documentos da Fazenda
          </div>
          <div className="text-sm font-medium text-default-600">
            Total <span className="text-default-700">07</span> arquivos{" "}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[208px]">
            <Input type="text" placeholder="Buscar documento" />
          </div>
          <Button>
            <Plus className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
            Criar Documento
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-6">
          {data.map((item) => (
            <DocCard key={item.id} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Documents;
