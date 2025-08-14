"use client";
import { useProposalContext } from "@/src/context/Contex";
import { CompassPlugin } from "@photo-sphere-viewer/compass-plugin";
import "@photo-sphere-viewer/compass-plugin/index.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { PluginConfig } from "react-photo-sphere-viewer";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

// Tipo opcional para clareza (ajusta se seu contexto já tipa isso)
type Image3D = {
  id: string;
  url: string;
  projectId?: string;
};

export default function Tour() {
  const router = useRouter();
  const params = useParams();
  // Em rotas /tour/[imageId], o parâmetro vem como string
  const imageId = Array.isArray(params?.imageId)
    ? params.imageId[0]
    : (params?.imageId as string | undefined);

  const { proposalData } = useProposalContext();

  // Garante um array mesmo quando ainda não carregou
  const images: Image3D[] = useMemo(
    () => proposalData?.image3ds ?? [],
    [proposalData]
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // Sincroniza o índice com a URL (id) e trata ausência de imageId
  useEffect(() => {
    if (!images.length) return; // nada para mostrar ainda

    if (!imageId) {
      // Se a rota veio sem [imageId], normaliza para o primeiro
      router.replace(`/tour/${images[0].id}`);
      return;
    }

    const idx = images.findIndex((i) => i.id === imageId);
    setCurrentIndex(idx >= 0 ? idx : 0);
  }, [imageId, images, router]);

  const hasMultiple = images.length > 1;

  const goToPrevious = () => {
    if (!images.length) return;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    router.push(`/tour/${images[prevIndex].id}`);
  };

  const goToNext = () => {
    if (!images.length) return;
    const nextIndex = (currentIndex + 1) % images.length;
    router.push(`/tour/${images[nextIndex].id}`);
  };

  const plugins: PluginConfig[] = [
    [
      CompassPlugin,
      {
        hotspots: [
          { yaw: "0deg" },
          { yaw: "90deg" },
          { yaw: "180deg" },
          { yaw: "270deg" },
        ],
      },
    ],
  ];

  // Imagem atual (se existir)
  const current = images[currentIndex];

  // Logs de debug (remova em produção)
  if (typeof window !== "undefined") {
    console.log("Current imageId:", imageId);
    console.log("Current index:", currentIndex);
    console.log("Images count:", images.length);
    console.log("Current image:", current);
  }

  // Estados de carregamento/sem dados
  if (!proposalData) {
    return (
      <div className="min-h-screen grid place-items-center text-sm text-zinc-400">
        Carregando dados da proposta…
      </div>
    );
  }

  if (!images.length) {
    return (
      <div className="min-h-screen grid place-items-center text-center p-6">
        <div className="space-y-2">
          <p className="text-lg font-medium">Nenhuma imagem 3D disponível.</p>
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 rounded-md bg-black/70 text-white px-3 py-2"
          >
            <ChevronLeft /> Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App relative">
      <button
        onClick={() => router.push(`/?projectId=${proposalData.id}`)}
        className="cursor-pointer flex z-10 bg-black/50 text-white p-2 rounded-md items-center gap-2 absolute right-4 top-4"
      >
        <ChevronLeft />
        <span>Voltar</span>
      </button>

      {/* Navegação entre imagens (esconde quando só há 1) */}
      <button
        onClick={goToPrevious}
        disabled={!hasMultiple}
        className={`cursor-pointer left-4 absolute top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-md flex items-center gap-2 z-10 ${
          !hasMultiple ? "opacity-50 pointer-events-none" : ""
        }`}
        aria-disabled={!hasMultiple}
        hidden={!hasMultiple}
      >
        <ChevronLeft />
        <span>Anterior</span>
      </button>

      <button
        onClick={goToNext}
        disabled={!hasMultiple}
        className={`cursor-pointer right-4 absolute top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-md flex items-center gap-2 z-10 ${
          !hasMultiple ? "opacity-50 pointer-events-none" : ""
        }`}
        aria-disabled={!hasMultiple}
        hidden={!hasMultiple}
      >
        <ChevronRight />
        <span>Próximo</span>
      </button>

      <ReactPhotoSphereViewer
        key={current.id} // Força re-render quando o id muda
        src={current.url} // Usa a URL vinda da API
        height={"100vh"}
        width={"100%"}
        plugins={plugins}
      />
    </div>
  );
}
