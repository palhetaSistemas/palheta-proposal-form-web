import Image from "next/image";

export function Steps() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <div className="w-5/6 h-full justify-center flex flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <div className="flex w-[575px] flex-col">
              <span className="text-primary font-semibold text-4xl">
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
          <div className="w-5/6 mx-auto h-3/5 items-center justify-between flex">
            <div className="w-2/5 overflow-hidden rounded-3xl border border-primary h-full flex flex-col items-center justify-between">
              <div className="w-full border-b border-y-primary h-1/4 p-4 flex items-center gap-2">
                <div className="flex w-10 min-h-10 min-w-10 max-w-10 max-h-10 text-xl h-10 items-center justify-center rounded-full bg-primary text-white">
                  1.
                </div>
                <span className="w-[calc(100%-2.5rem)] text-primary text-2xl font-semibold">
                  ASSINATURA DO CONTRATO
                </span>
              </div>
              <div className="w-full border-b border-y-primary h-1/4 p-4 flex items-center gap-2">
                <div className="flex w-10 min-h-10 min-w-10 max-w-10 max-h-10 text-xl h-10 items-center justify-center rounded-full bg-primary text-white">
                  2.
                </div>
                <span className="w-[calc(100%-2.5rem)] text-primary text-2xl font-semibold">
                  PAGAMENTO DA ENTRADA
                </span>
              </div>
              <div className="w-full border-b border-y-primary h-1/4 p-4 flex items-center gap-2">
                <div className="flex w-10 min-h-10 min-w-10 max-w-10 max-h-10 text-xl h-10 items-center justify-center rounded-full bg-primary text-white">
                  3.
                </div>
                <span className="w-[calc(100%-2.5rem)] text-primary text-2xl font-semibold">
                  LEVANTAMENTO DE INFORMAÇÕES E REUNIÃO INICIAL
                </span>
              </div>
              <div className="w-full h-1/4 p-4 flex items-center gap-2">
                <div className="flex w-10 min-h-10 min-w-10 max-w-10 max-h-10 text-xl h-10 items-center justify-center rounded-full bg-primary text-white">
                  4.
                </div>
                <span className="w-[calc(100%-2.5rem)] text-primary text-2xl font-semibold">
                  CONCEPÇÃO DA PROPOSTA PROJETURAL
                </span>
              </div>
            </div>
            <div className="w-2/5 overflow-hidden rounded-3xl border border-primary h-full flex flex-col items-center justify-between">
              <div className="w-full border-b border-y-primary h-1/4 p-4 flex items-center gap-2">
                <div className="flex w-10 min-h-10 min-w-10 max-w-10 max-h-10 text-xl h-10 items-center justify-center rounded-full bg-primary text-white">
                  5.
                </div>
                <span className="w-[calc(100%-2.5rem)] text-primary text-2xl font-semibold">
                  APRESENTAÇÃO DO VÍDEO 3D REALISTA DA PROPOSTA
                </span>
              </div>
              <div className="w-full border-b border-y-primary h-1/4 p-4 flex items-center gap-2">
                <div className="flex w-10 min-h-10 min-w-10 max-w-10 max-h-10 text-xl h-10 items-center justify-center rounded-full bg-primary text-white">
                  6.
                </div>
                <span className="w-[calc(100%-2.5rem)] text-primary text-2xl font-semibold">
                  ALTERAÇÕES E AJUSTES, CASO NECESSÁRIO
                </span>
              </div>
              <div className="w-full border-b border-y-primary h-1/4 p-4 flex items-center gap-2">
                <div className="flex w-10 min-h-10 min-w-10 max-w-10 max-h-10 text-xl h-10 items-center justify-center rounded-full bg-primary text-white">
                  7.
                </div>
                <span className="w-[calc(100%-2.5rem)] text-primary text-2xl font-semibold">
                  REAPRESENTAÇÃO COM OS AJUSTES
                </span>
              </div>
              <div className="w-full h-1/4 p-4 flex items-center gap-2">
                <div className="flex w-10 min-h-10 min-w-10 max-w-10 max-h-10 text-xl h-10 items-center justify-center rounded-full bg-primary text-white">
                  8.
                </div>
                <span className="w-[calc(100%-2.5rem)] text-primary text-2xl font-semibold">
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
