import { FarmProps } from "../@types/farm";
import Image from "@/public/images/staticDataImage/farm.jpg";

export const FarmStaticData: FarmProps = {
  id: "1",
  name: "Fazenda Boa Vista",
  city: "Sinop",
  state: "MT",
  image: Image,
  startDate: new Date(),
  lastUpdate: new Date(),
};
