"use client";
import { CompassPlugin } from "@photo-sphere-viewer/compass-plugin";
import "@photo-sphere-viewer/compass-plugin/index.css";
import { useParams } from "next/navigation";
import type { PluginConfig } from "react-photo-sphere-viewer";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

export default function Tour() {
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
    <div className="App">
      <ReactPhotoSphereViewer
        src={`/${imageId}`} // or however you want to map IDs to images
        height={"100vh"}
        width={"100%"}
        plugins={plugins}
      />
    </div>
  );
}
