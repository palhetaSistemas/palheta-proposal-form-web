import Image from "next/image";

export function Portfolio() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full p-2 pb-0 lg:p-0">
        <div className="w-full lg:w-5/6 h-full justify-center flex flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo/vertical-logo.png"
                alt=""
                width={200}
                height={1000}
                className="w-20 h-36 object-contain"
              />
              <div className="flex w-full lg:w-[575px] flex-col">
                <span className="text-primary font-semibold text-xl xl:text-4xl">
                  UM POUCO DO QUE JÁ REALIZAMOS
                </span>
                <span className="text-sm xl:text-base">
                  Quem conhece sempre Indica Palheta Arquitetura, do Norte ao
                  Sul do Brasil e no Mundo com 5 Países
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:h-3/5 flex flex-col lg:flex-row gap-4 items-center">
            <div className="h-52 lg:h-full w-full lg:w-1/2 group cursor-pointer relative overflow-hidden rounded-3xl flex flex-col items-center justify-end p-8">
              <Image
                src="/images/staticDataImage/facade2.png"
                alt=""
                width={1200}
                height={1500}
                className="w-full absolute top-0 group-hover:scale-105 group-hover:-rotate-2 transition duration-300 right-0 h-full object-cover"
              />
              <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-b from-transparent to-primary z-10" />
              <div className="flex z-20 items-center text-white text-center flex-col gap-2">
                <span className="w-max">
                  CLIQUE E ASSISTA
                  <div className="w-full -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 h-px bg-white transition duration-300" />
                </span>
                <span className="text-sm xl:text-2xl font-semibold">
                  DEPOIMENTO DO PASTOR UESLEN THOMAZ
                </span>
                <span className="text-xs xl:text-xl">
                  PORTO VELHO, RONDÔNIA
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-full flex flex-col gap-4">
              <div className="h-52 lg:h-1/2 w-full group cursor-pointer relative overflow-hidden rounded-3xl flex flex-col items-center justify-end p-8">
                <Image
                  src="/images/staticDataImage/facade2.png"
                  alt=""
                  width={1200}
                  height={1500}
                  className="w-full absolute top-0 group-hover:scale-105 group-hover:-rotate-2 transition duration-300 right-0 h-full object-cover"
                />
                <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-b from-transparent to-primary z-10" />
                <div className="flex z-20 items-center text-white text-center flex-col gap-2">
                  <span className="w-max">
                    CLIQUE E ASSISTA
                    <div className="w-full -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 h-px bg-white transition duration-300" />
                  </span>
                  <span className="text-sm xl:text-2xl font-semibold">
                    IGREJA NOVA ALIANÇA COM DEUS
                  </span>
                  <span className="text-xs xl:text-xl">
                    PORTO VELHO, RONDÔNIA
                  </span>
                </div>
              </div>
              <div className="h-52 lg:h-1/2 w-full group cursor-pointer relative overflow-hidden rounded-3xl flex flex-col items-center justify-end p-8">
                <Image
                  src="/images/staticDataImage/facade2.png"
                  alt=""
                  width={1200}
                  height={1500}
                  className="w-full absolute top-0 group-hover:scale-105 group-hover:-rotate-2 transition duration-300 right-0 h-full object-cover"
                />
                <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-b from-transparent to-primary z-10" />
                <div className="flex z-20 items-center text-white text-center flex-col gap-2">
                  <span className="w-max">
                    CLIQUE E ASSISTA
                    <div className="w-full -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 h-px bg-white transition duration-300" />
                  </span>
                  <span className="text-sm xl:text-2xl font-semibold">
                    IGREJA BATISTA COMUNIDADE ALIANÇA
                  </span>
                  <span className="text-xs xl:text-xl">
                    PORTO VELHO, RONDÔNIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-primary" />
    </>
  );
}
