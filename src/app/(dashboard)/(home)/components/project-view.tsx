"use client";
import {
  CircleDollarSign,
  Instagram,
  Layers,
  Printer,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ProjectView() {
  const router = useRouter();
  const [id, setId] = useState("panorama1.jpg");

  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      // modern clipboard API
      try {
        await navigator.clipboard.writeText(text);
        console.log("Copied!");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    } else {
      // fallback for unsupported browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed"; // avoid scrolling to bottom
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        document.execCommand("copy");
        console.log("Copied using fallback!");
      } catch (err) {
        console.error("Fallback: Copy failed", err);
      }

      document.body.removeChild(textarea);
    }
  };

  return (
    <div className="bg-[#123262] gap-8 lg:bg-[#07234E] relative flex w-full lg:w-[500px] lg:mx-auto items-center flex-col h-screen min-h-screen max-h-screen">
      <div className="w-full relative h-40 rounded-b-3xl flex items-end p-4 justify-center overflow-hidden">
        <Image
          src="/static1.png"
          alt=""
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
            IGREJA ASSEMBLEIA DE DEUS
          </span>
          <Image
            src="/static1.png"
            alt=""
            width={500}
            height={350}
            className="w-full h-max object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full flex items-center justify-between">
            <button
              onClick={() => {
                router.push(`/tour/${id}`);
              }}
              className="bg-[#174570] border border-white p-2 px-4 gap-2 flex flex-row items-center rounded-md "
            >
              <Layers color="white" size={20} />
              <span className="text-white font-semibold">Tour 360</span>
            </button>
            <button className="bg-[#174570] border border-white p-2 px-4 gap-2 flex flex-row items-center rounded-md ">
              <Printer color="white" size={20} />
              <span className="text-white font-semibold">Imagens</span>
            </button>
          </div>
          <button
            onClick={() =>
              copyToClipboard("a4639e31-df9d-43b7-a017-17fc0dffe294")
            }
            className="bg-[#174570] border border-white p-2 px-4 gap-2 flex flex-row items-center justify-center rounded-md "
          >
            <CircleDollarSign color="white" size={20} />
            <span className="text-white font-semibold">
              Seja um investidor! Copie a chave pix aqui
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center self-center rounded-md px-6 py-2  ">
          <div className="flex flex-row gap-2 items-center">
            <div className="h-10 w-10 flex items-center justify-center  rounded-md">
              <Image
                src="/iconWhite.png"
                alt=""
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
    </div>
  );
}
