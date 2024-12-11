import { StaticImageData } from "next/image";

export interface FarmProps {
  id: string;
  title: string;
  city: string;
  state: string;
  startDate: Date;
  lastUpdate: Date;
  logo: string | StaticImageData;
}
