"use client";
import { useThemeStore } from "@/src/store";
import { DirectionProvider as RadixDirectionProvider } from "@radix-ui/react-direction";
import React from "react";

const DirectionProvider = ({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) => {
  const { isRtl } = useThemeStore();

  const direction = lang === "ar" || isRtl ? "rtl" : "ltr";

  return (
    <div className="bg-[#123262]" dir={direction}>
      <RadixDirectionProvider dir={direction}>
        {children}
      </RadixDirectionProvider>
    </div>
  );
};

export default DirectionProvider;
