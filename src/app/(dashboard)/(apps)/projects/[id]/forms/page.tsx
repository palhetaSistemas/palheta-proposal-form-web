import Image from "next/image";

export default function Forms() {
  return (
    <div className="flex w-full items-center justify-center">
      <Image
        src="/images/soon.png"
        width={5000}
        height={5000}
        priority
        className="w-2/3 rounded-md"
        alt="coming soon"
      />
    </div>
  );
}
