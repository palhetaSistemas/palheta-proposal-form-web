import { FarmStaticData } from "@/src/@staticData/farm";
import FarmHeader from "./farm-header";
import { FilterSelector } from "./filter-selector";

export default function Home() {
  return (
    <div>
      <FarmHeader farm={FarmStaticData} />
      <FilterSelector />
    </div>
  );
}
