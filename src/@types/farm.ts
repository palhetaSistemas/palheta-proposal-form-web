import { StaticImageData } from "next/image";

export interface FarmProps {
  id: string;
  name: string;
  title: string;
  city: string;
  state: string;
  startDate: Date;
  lastUpdate: Date;
  image: string | StaticImageData;
  logo: string | StaticImageData;
}
