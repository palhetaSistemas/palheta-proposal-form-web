import { Button } from "@/src/components/ui/button";
import { Apple } from "lucide-react";
import Image from "next/image";

export function Apps() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-2 pb-0 lg:p-0">
      <div className="w-full lg:w-5/6 h-full justify-center flex flex-col gap-2">
        <div className="flex w-full items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="flex lg:w-[575px] flex-col">
              <span className="text-primary text-center font-semibold text-xl lg:text-4xl">
                APLICATIVO PALHETA ARQUITETURA
              </span>
              <span>
                Aplicativo para acompanhamento de todo o processo da sua obra
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-3/5 items-center gap-2 lg:gap-8 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-full rounded-3xl bg-primary relative flex flex-col items-center justify-end p-8">
            <div className="gap-2 flex flex-col">
              <span className="font-semibold text-white text-2xl">
                Baixe seu app para iOS iPadOS
              </span>
              <span className="text-white">
                Aplicativo Atualizado constantemente e servirá como central de
                relação com o escritório Palheta
              </span>
              <Button className=" gap-2 bg-white text-primary hover:bg-white hover:text-primary rounded-full">
                <Image
                  src="/images/apple.png"
                  alt=""
                  width={200}
                  height={200}
                  className="w-6 h-max object-contain"
                />
                <span>Download para iOS</span>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full rounded-3xl border relative flex flex-col items-center justify-end p-8">
            <div className="gap-2 flex flex-col">
              <span className="font-semibold text-primary text-2xl">
                Baixe seu app para iOS iPadOS
              </span>
              <span className="text-primary">
                Aplicativo Atualizado constantemente e servirá como central de
                relação com o escritório Palheta
              </span>
              <Button className=" gap-2 bg-primary text-white hover:bg-primary hover:text-white rounded-full">
                <Image
                  src="/images/android.png"
                  alt=""
                  width={200}
                  height={200}
                  className="w-6 h-max object-contain"
                />
                <span>Download para Android</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
