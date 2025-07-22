"use client";
import { CompassPlugin } from "@photo-sphere-viewer/compass-plugin";
import "@photo-sphere-viewer/compass-plugin/index.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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

  const panoramas = ["panorama1.jpg", "panorama2.avif", "panorama3.avif"];

  // State to track current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update current index when imageId changes
  useEffect(() => {
    const index = panoramas.findIndex((panorama) => panorama === imageId);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [imageId]);

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + panoramas.length) % panoramas.length;
    router.push(`/tour/${panoramas[prevIndex]}`);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % panoramas.length;
    router.push(`/tour/${panoramas[nextIndex]}`);
  };

  // Debug logging (remove in production)
  console.log("Current imageId:", imageId);
  console.log("Current index:", currentIndex);
  console.log("Available panoramas:", panoramas);

  return (
    <div className="App relative">
      <button
        onClick={() => router.push("/")}
        className="cursor-pointer flex z-10 bg-black/50 text-white p-2 rounded-md items-center gap-2 absolute right-4 top-4"
      >
        <ChevronLeft />
        <span>Voltar</span>
      </button>

      <button
        onClick={goToPrevious}
        className="cursor-pointer left-4 absolute top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-md flex items-center gap-2 z-10"
      >
        <ChevronLeft />
        <span>Anterior</span>
      </button>

      <button
        onClick={goToNext}
        className="cursor-pointer right-4 absolute top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-md flex items-center gap-2 z-10"
      >
        <ChevronRight />
        <span>Próximo</span>
      </button>

      <ReactPhotoSphereViewer
        key={imageId} // Force re-render when imageId changes
        src={`/${imageId}`}
        height={"100vh"}
        width={"100%"}
        plugins={plugins}
      />
    </div>
  );
}
