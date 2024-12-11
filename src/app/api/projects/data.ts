import farm1 from "@/public/images/staticDataImage/farm1.png";
import farm2 from "@/public/images/staticDataImage/farm2.png";
import farm3 from "@/public/images/staticDataImage/farm3.png";
import farm4 from "@/public/images/staticDataImage/farm4.png";
import farm5 from "@/public/images/staticDataImage/farm5.png";
import farm6 from "@/public/images/staticDataImage/farm6.png";
import farm7 from "@/public/images/staticDataImage/farm7.png";
import farm8 from "@/public/images/staticDataImage/farm8.png";
import farm9 from "@/public/images/staticDataImage/farm9.png";
import farm10 from "@/public/images/staticDataImage/farm10.png";

import ass from "@/public/images/projects/ass.jpg";
import productify from "@/public/images/projects/productify.jpg";
import uradvisor from "@/public/images/projects/uradvisor.jpg";
import konst from "@/public/images/projects/konst.jpg";
import { faker } from "@faker-js/faker";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Timer,
} from "lucide-react";
import { formatDate } from "@/src/lib/utils";
import { format } from "date-fns";
export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CheckCircle2,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ChevronDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ChevronRight,
  },
  {
    label: "High",
    value: "high",
    icon: ChevronUp,
  },
];

function getRandomDate(startDate: Date, endDate: Date) {
  const start = startDate.getTime();
  const end = endDate.getTime();
  const randomTime = start + Math.random() * (end - start);
  return new Date(randomTime);
}

export function generateAssignments(numAssign: number) {
  const assignObjects = [];

  for (let j = 0; j < numAssign; j++) {
    assignObjects.push({
      image: faker.image.avatarLegacy(),
      label: faker.person.firstName(),
      value: faker.internet.userName(),
    });
  }

  return assignObjects;
}

export const projects = [
  {
    id: "76b99e8a-4d5e-4818-92cb-7932a5b8f42a",
    title: "Projeto 1",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "in progress",
    label: "bug",
    priority: "low",
    city: "Sinop",
    state: "MT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    percentage: 32,
    assign: [
      { image: farm1, label: "John Doe", value: "john.doe" },
      { image: farm2, label: "Jane Smith", value: "jane.smith" },
      { image: farm3, label: "Bob Johnson", value: "bob.johnson" },
      { image: farm4, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),
    logo: farm5,
    isFavorite: false,
  },
  {
    id: "76b99e8a-4d5e-4818-92cb-7932a5b8f42b",
    title: "Projeto 2",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "in progress",
    label: "bug",
    priority: "low",
    city: "Sinop",
    state: "MT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    percentage: 32,
    assign: [
      { image: farm1, label: "John Doe", value: "john.doe" },
      { image: farm2, label: "Jane Smith", value: "jane.smith" },
      { image: farm3, label: "Bob Johnson", value: "bob.johnson" },
      { image: farm4, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),
    logo: farm6,
    isFavorite: true,
  },
  {
    id: "76b99e8a-4d5e-4818-92cb-7932a5b8f42c",
    title: "Projeto 3",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "in progress",
    label: "bug",
    priority: "low",
    city: "Sinop",
    state: "MT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    percentage: 32,
    assign: [
      { image: farm1, label: "John Doe", value: "john.doe" },
      { image: farm2, label: "Jane Smith", value: "jane.smith" },
      { image: farm3, label: "Bob Johnson", value: "bob.johnson" },
      { image: farm4, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),
    logo: farm7,
    isFavorite: true,
  },
  {
    id: "76b99e8a-4d5e-4818-92cb-7932a5b8f42d",
    title: "Projeto 4",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "in progress",
    label: "bug",
    priority: "low",
    city: "Sinop",
    state: "MT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    percentage: 32,
    assign: [
      { image: farm1, label: "John Doe", value: "john.doe" },
      { image: farm2, label: "Jane Smith", value: "jane.smith" },
      { image: farm3, label: "Bob Johnson", value: "bob.johnson" },
      { image: farm4, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),
    logo: farm8,
    isFavorite: false,
  },
  {
    id: "76b99e8a-4d5e-4818-92cb-7932a5b8f42e",
    title: "Projeto 5",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "in progress",
    label: "bug",
    priority: "low",
    city: "Sinop",
    state: "MT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    percentage: 32,
    assign: [
      { image: farm1, label: "John Doe", value: "john.doe" },
      { image: farm2, label: "Jane Smith", value: "jane.smith" },
      { image: farm3, label: "Bob Johnson", value: "bob.johnson" },
      { image: farm4, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),
    logo: farm9,
    isFavorite: false,
  },
  {
    id: "76b99e8a-4d5e-4818-92cb-7932a5b8f42f",
    title: "Projeto 6",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "in progress",
    label: "bug",
    priority: "low",
    city: "Sinop",
    state: "MT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    percentage: 32,
    assign: [
      { image: farm1, label: "John Doe", value: "john.doe" },
      { image: farm2, label: "Jane Smith", value: "jane.smith" },
      { image: farm3, label: "Bob Johnson", value: "bob.johnson" },
      { image: farm4, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),
    logo: farm10,
    isFavorite: true,
  },
  {
    id: "76b99e8a-4d5e-4818-92cb-7932a5b8f42g",
    title: "Projeto 7",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "in progress",
    label: "bug",
    priority: "low",
    city: "Sinop",
    state: "MT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    percentage: 32,
    assign: [
      { image: farm1, label: "John Doe", value: "john.doe" },
      { image: farm2, label: "Jane Smith", value: "jane.smith" },
      { image: farm3, label: "Bob Johnson", value: "bob.johnson" },
      { image: farm4, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),

    isFavorite: true,
  },
  {
    id: "76b99e8a-4d5e-4818-92cb-7932a5b8f42h",
    title: "Projeto 8",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "in progress",
    label: "bug",
    priority: "low",
    city: "Sinop",
    state: "MT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    percentage: 32,
    assign: [
      { image: farm1, label: "John Doe", value: "john.doe" },
      { image: farm2, label: "Jane Smith", value: "jane.smith" },
      { image: farm3, label: "Bob Johnson", value: "bob.johnson" },
      { image: farm4, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),

    isFavorite: true,
  },
  {
    id: "76b99e8a-4d5e-4818-92cb-7932a5b8f42i",
    title: "Projeto 9",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "in progress",
    label: "bug",
    priority: "low",
    city: "Sinop",
    state: "MT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    percentage: 32,
    assign: [
      { image: farm1, label: "John Doe", value: "john.doe" },
      { image: farm2, label: "Jane Smith", value: "jane.smith" },
      { image: farm3, label: "Bob Johnson", value: "bob.johnson" },
      { image: farm4, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: formatDate(faker.date.past(1, new Date())),
    dueDate: formatDate(faker.date.future(1, new Date())),

    isFavorite: false,
  },
];

export type Project = (typeof projects)[number];
