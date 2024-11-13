import Image from "next/image";

export function MortalityByRace() {
  return (
    <div className="relative w-full h-full rounded-md py-4 px-8 flex flex-col border border-primary-500">
      <Image
        src="/images/staticDataImage/cattle.png"
        alt=""
        width={500}
        height={500}
        className="absolute w-full h-full object-cover left-0 top-0 opacity-20"
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images/all-img/skullIcon.png"
            alt=""
            width={100}
            height={100}
            className="w-10 h-10"
          />
          <span className="text-2xl">Quantidade de Mortes por Raça</span>
        </div>
        <div className="flex w-40 flex-col p-1 rounded-md gap-1 bg-white/20">
          <span className="text-sm">Nelore</span>
          <span>123</span>
        </div>
        <div className="flex w-40 flex-col p-1 rounded-md gap-1 bg-white/20">
          <span className="text-sm">Nelore</span>
          <span>123</span>
        </div>
        <div className="flex w-40 flex-col p-1 rounded-md gap-1 bg-white/20">
          <span className="text-sm">Nelore</span>
          <span>123</span>
        </div>
        <div className="flex w-40 flex-col p-1 rounded-md gap-1 bg-white/20">
          <span className="text-sm">Nelore</span>
          <span>123</span>
        </div>
      </div>
    </div>
  );
}
