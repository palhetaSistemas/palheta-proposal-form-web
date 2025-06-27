"use client";
import { CompassPlugin } from "@photo-sphere-viewer/compass-plugin";
import "@photo-sphere-viewer/compass-plugin/index.css";
import { ChevronLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import type { PluginConfig } from "react-photo-sphere-viewer";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

export default function Tour() {
  const router = useRouter();
  const params = useParams();
  const imageId = params.id as string;

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

  return (
    <div className="App relative">
      <button
        onClick={() => router.back()}
        className="cursor-pointer flex z-10 bg-black/50 text-white p-2 rounded-md items-center gap-2 absolute right-4 top-4"
      >
        <ChevronLeft />
        <span>Voltar</span>
      </button>
      <ReactPhotoSphereViewer
        src={`/${imageId}`} // or however you want to map IDs to images
        height={"100vh"}
        width={"100%"}
        plugins={plugins}
      />
    </div>
  );
}
