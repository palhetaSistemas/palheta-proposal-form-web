import { Button } from "@/src/components/ui/button";
import Image from "next/image";

export function Plans() {
  return (
    <>
      <div className="flex flex-col items-center xl:gap-8 lg:justify-center h-screen w-full p-2 lg:p-0">
        <Image
          src="/images/logo/vertical-logo.png"
          alt=""
          width={200}
          height={1000}
          className="w-20 h-36 object-contain"
        />
        <div className="text-primary text-center flex flex-col font-bold">
          <span className="xl:text-2xl">CONFIANÇA E TRANSPARÊNCIA</span>
          <span className="text-xl xl:text-4xl">INVESTIMENTO</span>
        </div>
        <div className="flex w-full lg:w-5/6 mx-auto items-center lg:h-1/2 flex-col gap-4">
          <div className="flex items-center gap-2">
            <Button className="rounded-full">Em até 7 dias</Button>
            <Button className="rounded-full" variant="outline">
              Pós 7 dias*
            </Button>
          </div>
          <div className="w-full justify-center h-full flex flex-col lg:flex-row gap-4 items-center">
            <div className="w-full lg:w-1/4 text-center items-center justify-between h-full rounded-3xl border border-primary flex flex-col p-2 gap-2">
              <span className="text-xl xl:text-4xl font-semibold text-primary">
                SOMENTE ARQUITETURA
              </span>
              <span className="text-xl xl:text-4xl font-semibold text-primary">
                R$9.997
              </span>
              <div className="w-5/6 mx-auto h-px bg-primary" />
              <Button className="rounded-full">ESCOLHO ESTE</Button>
            </div>
            <div className="w-full lg:w-1/4 bg-primary text-center items-center justify-between h-full rounded-3xl border border-primary flex flex-col p-2 gap-2">
              <div className="flex flex-col items-center gap-2">
                <Button className="w-max bg-white text-primary rounded-full">
                  MAIS ESCOLHIDO
                </Button>
                <span className="text-xl xl:text-4xl font-semibold text-white">
                  TODOS OS SERVIÇOS
                </span>
              </div>
              <span className="text-xl xl:text-4xl font-semibold text-white">
                R$12.997
              </span>
              <div className="flex flex-col text-white">
                <span className="text-sm xl:text-xl">
                  EM 3X NO BOLETO OU PIX
                </span>
                <span className="text-sm xl:text-xl">
                  EM 5X NO CARTÃO DE CRÉDITO
                </span>
              </div>
              <Button
                variant="outline"
                className="rounded-full hover:bg-white hover:text-primary bg-white text-primary"
              >
                ESCOLHO ESTE
              </Button>
            </div>
            <div className="w-full lg:w-1/4 text-center items-center justify-between h-full rounded-3xl border border-primary flex flex-col p-2 gap-2">
              <span className="text-xl xl:text-4xl font-semibold text-primary">
                ARQUITETURA E VISUALIZAÇÃO 3D
              </span>
              <span className="text-xl xl:text-4xl font-semibold text-primary">
                R$6.997
              </span>
              <div className="w-5/6 mx-auto h-px bg-primary" />
              <Button className="rounded-full">ESCOLHO ESTE</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-primary" />
    </>
  );
}
