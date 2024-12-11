import React from "react";
import { Card, CardFooter } from "@/src/components/ui/card";
import { getProject, getProjects } from "@/src/config/project-config";
import Link from "next/link";
import FarmHeader from "./[id]/project-header";
import PageLink from "./[id]/page-link";

const singleProjectLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  const projects = await getProjects();

  const project = await getProject("76b99e8a-4d5e-4818-92cb-7932a5b8f42a");

  return <div>{children}</div>;
};

export default singleProjectLayout;
