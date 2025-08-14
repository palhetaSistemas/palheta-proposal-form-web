"use client";
import ErrorBlock from "@/src/components/error-block";
import { useProposalContext } from "@/src/context/Contex";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Tipo opcional para clareza
type Photo = {
  id: string;
  projectId: string;
  url: string;
};

export default function Images() {
  const router = useRouter();
  const search = useSearchParams();
  const projectId = search.get("projectId") ?? undefined;

  const { proposalData } = useProposalContext();

  const photos = proposalData?.photos ?? [];

  // const photos: Photo[] = [
  //   {
  //     id: "1",
  //     projectId: "ebb7e0a0-6bed-4ec0-ba14-5553d62e2f2d",
  //     url: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VtfGVufDB8fDB8fHww",
  //   },
  //   {
  //     id: "2",
  //     projectId: "ebb7e0a0-6bed-4ec0-ba14-5553d62e2f2d",
  //     url: "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
  //   },
  //   {
  //     id: "3",
  //     projectId: "ebb7e0a0-6bed-4ec0-ba14-5553d62e2f2d",
  //     url: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg",
  //   },
  //   {
  //     id: "4",
  //     projectId: "ebb7e0a0-6bed-4ec0-ba14-5553d62e2f2d",
  //     url: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80",
  //   },
  //   {
  //     id: "5",
  //     projectId: "ebb7e0a0-6bed-4ec0-ba14-5553d62e2f2d",
  //     url: "https://www.shutterstock.com/image-photo/traveler-woman-arms-raised-triumph-260nw-2457990309.jpg",
  //   },
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Garante índice válido quando houver atualização dos dados
  useEffect(() => {
    if (!photos.length) return;
    if (currentIndex >= photos.length) setCurrentIndex(0);
  }, [photos, currentIndex]);

  const hasMultiple = photos.length > 1;
  const current = photos[currentIndex];

  const goToPrevious = () => {
    if (!photos.length) return;
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    if (!photos.length) return;
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  // Logs de debug (remova em produção)
  if (typeof window !== "undefined") {
    console.log("projectId:", projectId);
    console.log("Total photos:", photos.length);
    console.log("currentIndex:", currentIndex);
    console.log("current:", current);
  }

  // Estados de carregamento/sem dados
  if (!proposalData) {
    return (
      <div className="min-h-screen grid place-items-center text-sm text-zinc-400">
        Carregando dados da proposta…
      </div>
    );
  }

  if (!projectId) {
    return <ErrorBlock />;
  }

  if (!photos.length) {
    return (
      <div className="min-h-screen grid place-items-center text-center p-6">
        <div className="space-y-2">
          <p className="text-lg font-medium">
            Nenhuma foto encontrada para este projeto.
          </p>
          <button
            onClick={() => router.push(`/?projectId=${proposalData.id}`)}
            className="inline-flex items-center gap-2 rounded-md bg-black/70 text-white px-3 py-2"
          >
            <ChevronLeft /> Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black">
      {/* Voltar */}
      <button
        onClick={() => router.push(`/?projectId=${proposalData.id}`)}
        className="cursor-pointer flex z-10 bg-black/50 text-white p-2 rounded-md items-center gap-2 absolute right-4 top-4"
      >
        <ChevronLeft />
        <span>Voltar</span>
      </button>

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

      <div className="w-full h-screen grid place-items-center">
        <Image
          src={current.url}
          priority
          alt="Foto do projeto"
          width={2000}
          height={2000}
          className="max-h-screen  object-contain select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
