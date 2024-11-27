const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
const dayBeforePreviousDay = new Date(
  new Date().getTime() - 24 * 60 * 60 * 1000 * 2
);

import avatar1 from "@/public/images/avatar/avatar-1.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
import avatar9 from "@/public/images/avatar/avatar-9.jpg";
import avatar10 from "@/public/images/avatar/avatar-10.jpg";
import avatar11 from "@/public/images/avatar/avatar-11.jpg";
export const profileUser = {
  id: 11,
  avatar: avatar1,
  fullName: "Matheus Reis",
  bio: "Médico Veterinário",
  role: "admin",
  about:
    "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
  status: "online",
  settings: {
    isTwoStepAuthVerificationEnabled: true,
    isNotificationsOn: false,
  },
  date: "10 am",
};

export const contacts = [
  {
    id: 1,
    fullName: "Marco (Faz Boa Vista)",
    role: "Frontend Developer",
    about: "Conseguiu Ver?",
    about2:
      "Dono da Fazenda Grandino, tem muitas falhas administrativas, péssimo hábito de operação...",
    avatar: avatar2,
    status: "online",
    unreadmessage: 0,
    date: "10:00",
  },
  {
    id: 2,
    fullName: "João Grandino",
    role: "UI/UX Designer",
    about: "Bom dia seu João, certo?",
    avatar: avatar3,
    status: "online",
    unreadmessage: 0,
    date: "10:00",
  },
  {
    id: 3,
    fullName: "Vitor Goulart",
    role: "Town planner",
    about: "Obrigado!!",
    avatar: avatar4,
    status: "busy",
    unreadmessage: 0,
    date: "10:00",
  },
  {
    id: 4,
    fullName: "Vitor Santos",
    role: "Data scientist",
    about: "Concordo, obrigado",
    avatar: avatar5,
    status: "online",
    unreadmessage: 0,
    date: "10:00",
  },
];

export const chats = [
  {
    id: 1,
    userId: 1,
    unseenMsgs: 0,
    chat: [
      {
        message: "Conseguiu Ver?",
        time: "Mon Dec 10 2018 13:00:00 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
    ],
  },
  {
    id: 2,
    userId: 2,
    unseenMsgs: 0,
    chat: [
      {
        message: "Bom dia seu João, certo?",
        time: "Mon Dec 10 2018 13:00:00 GMT+0000 (GMT)",
        senderId: 11,
        replayMetadata: false,
      },
    ],
  },
  {
    id: 3,
    userId: 3,
    unseenMsgs: 0,
    chat: [
      {
        message: "Obrigado!!",
        time: "Mon Dec 10 2018 13:00:00 GMT+0000 (GMT)",
        senderId: 10,
        replayMetadata: false,
      },
    ],
  },
  {
    id: 4,
    userId: 4,
    unseenMsgs: 1,
    chat: [
      {
        message: "Concordo, brigado",
        time: "Mon Dec 10 2018 13:00:00 GMT+0000 (GMT)",
        senderId: 10,
        replayMetadata: false,
      },
    ],
  },
];

export type Chat = (typeof chats)[number];
export type Contact = (typeof contacts)[number];
export type ProfileUser = typeof profileUser;
