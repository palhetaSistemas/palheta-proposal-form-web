"use client";

import { useState } from "react";

export const [openActivitiesBoard, setOpenActivitiesBoard] = useState(false);
export const closeCreateActivitiesBoard = () => {
  setOpenActivitiesBoard(false);
};
