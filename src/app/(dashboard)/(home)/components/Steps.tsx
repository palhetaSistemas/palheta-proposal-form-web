import Image from "next/image";

export function Steps() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full p-2 pb-0 lg:p-0">
        <div className="w-full lg:w-5/6 h-full justify-center flex flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <div className="flex lg:w-[575px] flex-col">
              <span className="text-primary font-semibold text-xl lg:text-4xl">
                ETAPAS DO PROJETO
              </span>
              <span>
                Veja de forma detalhada como funciona as etapas do Projeto
                Palheta Arquitetura
              </span>
            </div>
            <Image
              src="/images/logo/vertical-logo.png"
              alt=""
              width={200}
              height={1000}
              className="w-20 h-36 object-contain"
            />
          </div>
          <div className="w-full lg:w-5/6 mx-auto h-2/5 lg:h-3/5 gap-2 lg:gap-0 items-center justify-between flex">
            <div className="w-full lg:w-2/5 overflow-hidden rounded-3xl border border-primary h-full flex flex-col items-center justify-between">
              <div className="w-full border-b border-y-primary h-1/4 p-1 xl:p-4 flex items-center gap-2">
                <div className="flex w-4 h-4 min-w-4 min-h-4 max-w-4 max-h-4 md:w-6 md:h-6 md:max-w-6 md:max-h-6 md:min-w-6 md:min-h-6 xl:w-10 xl:min-h-10 xl:min-w-10 xl:max-w-10 xl:max-h-10 text-xs xl:text-xl xl:h-10 items-center justify-center rounded-full bg-primary text-white">
                  1.
                </div>
                <span className="w-[calc(100%-1.25rem)] xl:w-[calc(100%-2.5rem)] text-primary text-xs xl:text-2xl font-semibold">
                  ASSINATURA DO CONTRATO
                </span>
              </div>
              <div className="w-full border-b border-y-primary h-1/4 p-1 xl:p-4 flex items-center gap-2">
                <div className="flex w-4 h-4 min-w-4 min-h-4 max-w-4 max-h-4 md:w-6 md:h-6 md:max-w-6 md:max-h-6 md:min-w-6 md:min-h-6 xl:w-10 xl:min-h-10 xl:min-w-10 xl:max-w-10 xl:max-h-10 text-xs xl:text-xl xl:h-10 items-center justify-center rounded-full bg-primary text-white">
                  2.
                </div>
                <span className="w-[calc(100%-1.25rem)] xl:w-[calc(100%-2.5rem)] text-primary text-xs xl:text-2xl font-semibold">
                  PAGAMENTO DA ENTRADA
                </span>
              </div>
              <div className="w-full border-b border-y-primary h-1/4 p-1 xl:p-4 flex items-center gap-2">
                <div className="flex w-4 h-4 min-w-4 min-h-4 max-w-4 max-h-4 md:w-6 md:h-6 md:max-w-6 md:max-h-6 md:min-w-6 md:min-h-6 xl:w-10 xl:min-h-10 xl:min-w-10 xl:max-w-10 xl:max-h-10 text-xs xl:text-xl xl:h-10 items-center justify-center rounded-full bg-primary text-white">
                  3.
                </div>
                <span className="w-[calc(100%-1.25rem)] xl:w-[calc(100%-2.5rem)] text-primary text-xs xl:text-2xl font-semibold">
                  LEVANTAMENTO DE INFORMAÇÕES E REUNIÃO INICIAL
                </span>
              </div>
              <div className="w-full h-1/4 p-1 xl:p-4 flex items-center gap-2">
                <div className="flex w-4 h-4 min-w-4 min-h-4 max-w-4 max-h-4 md:w-6 md:h-6 md:max-w-6 md:max-h-6 md:min-w-6 md:min-h-6 xl:w-10 xl:min-h-10 xl:min-w-10 xl:max-w-10 xl:max-h-10 text-xs xl:text-xl xl:h-10 items-center justify-center rounded-full bg-primary text-white">
                  4.
                </div>
                <span className="w-[calc(100%-1.25rem)] xl:w-[calc(100%-2.5rem)] text-primary text-xs xl:text-2xl font-semibold">
                  CONCEPÇÃO DA PROPOSTA PROJETURAL
                </span>
              </div>
            </div>
            <div className="w-full lg:w-2/5 overflow-hidden rounded-3xl border border-primary h-full flex flex-col items-center justify-between">
              <div className="w-full border-b border-y-primary h-1/4 p-1 xl:p-4 flex items-center gap-2">
                <div className="flex w-4 h-4 min-w-4 min-h-4 max-w-4 max-h-4 md:w-6 md:h-6 md:max-w-6 md:max-h-6 md:min-w-6 md:min-h-6 xl:w-10 xl:min-h-10 xl:min-w-10 xl:max-w-10 xl:max-h-10 text-xs xl:text-xl xl:h-10 items-center justify-center rounded-full bg-primary text-white">
                  5.
                </div>
                <span className="w-[calc(100%-1.25rem)] xl:w-[calc(100%-2.5rem)] text-primary text-xs xl:text-2xl font-semibold">
                  APRESENTAÇÃO DO VÍDEO 3D REALISTA DA PROPOSTA
                </span>
              </div>
              <div className="w-full border-b border-y-primary h-1/4 p-1 xl:p-4 flex items-center gap-2">
                <div className="flex w-4 h-4 min-w-4 min-h-4 max-w-4 max-h-4 md:w-6 md:h-6 md:max-w-6 md:max-h-6 md:min-w-6 md:min-h-6 xl:w-10 xl:min-h-10 xl:min-w-10 xl:max-w-10 xl:max-h-10 text-xs xl:text-xl xl:h-10 items-center justify-center rounded-full bg-primary text-white">
                  6.
                </div>
                <span className="w-[calc(100%-1.25rem)] xl:w-[calc(100%-2.5rem)] text-primary text-xs xl:text-2xl font-semibold">
                  ALTERAÇÕES E AJUSTES, CASO NECESSÁRIO
                </span>
              </div>
              <div className="w-full border-b border-y-primary h-1/4 p-1 xl:p-4 flex items-center gap-2">
                <div className="flex w-4 h-4 min-w-4 min-h-4 max-w-4 max-h-4 md:w-6 md:h-6 md:max-w-6 md:max-h-6 md:min-w-6 md:min-h-6 xl:w-10 xl:min-h-10 xl:min-w-10 xl:max-w-10 xl:max-h-10 text-xs xl:text-xl xl:h-10 items-center justify-center rounded-full bg-primary text-white">
                  7.
                </div>
                <span className="w-[calc(100%-1.25rem)] xl:w-[calc(100%-2.5rem)] text-primary text-xs xl:text-2xl font-semibold">
                  REAPRESENTAÇÃO COM OS AJUSTES
                </span>
              </div>
              <div className="w-full h-1/4 p-1 xl:p-4 flex items-center gap-2">
                <div className="flex w-4 h-4 min-w-4 min-h-4 max-w-4 max-h-4 md:w-6 md:h-6 md:max-w-6 md:max-h-6 md:min-w-6 md:min-h-6 xl:w-10 xl:min-h-10 xl:min-w-10 xl:max-w-10 xl:max-h-10 text-xs xl:text-xl xl:h-10 items-center justify-center rounded-full bg-primary text-white">
                  8.
                </div>
                <span className="w-[calc(100%-1.25rem)] xl:w-[calc(100%-2.5rem)] text-primary text-xs xl:text-2xl font-semibold">
                  ENTREGA FINAL DO PROJETO COM DETALHES TÉCNICOS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-primary" />
    </>
  );
}
