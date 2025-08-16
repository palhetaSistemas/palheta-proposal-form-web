"use client";
import { useProposalContext } from "@/src/context/Contex";
import { toYouTubeEmbed } from "@/src/lib/toYouTubeEmbed";
import {
  CircleDollarSign,
  Copy as CopyIcon,
  Instagram,
  Layers,
  Printer,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function ProjectView() {
  const router = useRouter();
  const { proposalData } = useProposalContext();

  const [showPixModal, setShowPixModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = async (text: string) => {
    if (!text) return false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.error("Failed to copy: ", err);
        return false;
      }
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      let ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (err) {
        console.error("Fallback: Copy failed", err);
      }
      document.body.removeChild(textarea);
      return ok;
    }
  };

  const handleCopyPix = async () => {
    const key = proposalData?.churchPixKey ?? "";
    const ok = await copyToClipboard(key);
    if (ok) {
      toast.success("Chave PIX copiada com sucesso!");
    }
  };

  const src = toYouTubeEmbed(proposalData?.videoUrl ?? "", {
    debug: true,
    noCookie: true,
  });
  return (
    <div className="bg-[#123262] gap-8 lg:bg-[#07234E] relative flex w-full lg:w-[500px] lg:mx-auto items-center flex-col h-screen min-h-screen max-h-screen">
      <div className="w-full relative h-40 rounded-b-3xl flex items-end p-4 justify-center overflow-hidden">
        <Image
          src={proposalData?.imageUrl ?? ""}
          alt="Capa do projeto"
          width={500}
          height={350}
          className="w-full h-max absolute -top-10 left-0 object-cover"
        />
        <span className=" text-white bg-black/50 z-10 p-2 rounded-md font-semibold text-xl">
          DETALHES DO PROJETO
        </span>
      </div>

      <div className="items-center gap-8 justify-between w-full  h-full flex flex-col p-4">
        <div className="flex flex-col items-center gap-8 w-full">
          <span className="text-white font-semibold text-lg">
            {proposalData?.name}
          </span>
          {src ? (
            <iframe
              width="100%"
              height="315"
              src={src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; web-share"
            ></iframe>
          ) : (
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/MwBJLRX6VVM?si=VJn_pyotkC7Nx0AH"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen;gyroscope; web-share"
            ></iframe>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="w-full grid grid-cols-2 gap-4 justify-evenly">
            <button
              onClick={() => {
                const first360Id = proposalData?.image3ds?.[0]?.id;
                if (first360Id) router.push(`/tour/${first360Id}`);
              }}
              className="bg-[#174570] border w-full  border-white p-2 px-4 gap-2 flex flex-row items-center justify-center rounded-md disabled:opacity-50"
              disabled={!proposalData?.image3ds?.length}
            >
              <Layers color="white" size={20} />
              <span className="text-white font-semibold">TOUR 360</span>
            </button>

            <button
              onClick={() =>
                router.push(`/images?projectId=${proposalData?.id}`)
              }
              className="bg-[#174570] border w-full border-white p-2 px-4 gap-2 flex flex-row items-center justify-center rounded-md"
            >
              <Printer color="white" size={20} />
              <span className="text-white font-semibold">IMAGENS</span>
            </button>
          </div>

          {proposalData?.churchPixKey && (
            <button
              onClick={() => setShowPixModal(true)}
              className="bg-[#174570] border border-white p-2 px-4 gap-2 flex flex-row items-center justify-center rounded-md "
            >
              <CircleDollarSign color="white" size={20} />
              <span className="text-white font-semibold">
                SEJA UM INVESTIDOR! VER CHAVE PIX
              </span>
            </button>
          )}
        </div>

        <div className="flex flex-col items-center justify-center self-center rounded-md px-6 py-2  ">
          <div className="flex flex-row gap-2 items-center">
            <div className="h-10 w-10 flex items-center justify-center  rounded-md">
              <Image
                src="/iconWhite.png"
                alt="logo"
                width={100}
                height={100}
                className="h-10 w-max object-contain"
              />
            </div>
            <Instagram className="h-10 w-max" color={"white"} size={38} />
            <Youtube className="h-10 w-max" color={"white"} size={38} />
          </div>
        </div>
      </div>

      {/* Modal PIX */}
      {showPixModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setShowPixModal(false)}
          />

          <div className="relative z-10 w-[92%] max-w-md rounded-2xl bg-white p-5 shadow-2xl">
            <button
              aria-label="Fechar"
              onClick={() => setShowPixModal(false)}
              className="absolute right-2.5 top-2.5 rounded-md p-1 hover:bg-zinc-100"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-lg font-semibold text-zinc-900">Chave PIX</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Use a chave abaixo para contribuir com o projeto.
            </p>

            <div className="mt-4 flex items-center gap-2 rounded-lg bg-zinc-100 p-2">
              <span className="font-mono text-sm truncate select-all">
                {proposalData?.churchPixKey ?? "Chave não disponível"}
              </span>
              <button
                onClick={handleCopyPix}
                disabled={!proposalData?.churchPixKey}
                className="ml-auto inline-flex items-center gap-2 rounded-md bg-[#174570] px-3 py-1.5 text-white disabled:opacity-40"
              >
                <CopyIcon className="h-4 w-4" /> Copiar
              </button>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowPixModal(false)}
                className="rounded-md border border-zinc-300 px-3 py-1.5 text-zinc-700 hover:bg-zinc-50"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
