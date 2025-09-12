"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { useApiContext } from "./ApiContext";

export interface ProposalDataProps {
  architectureValue: number;
  churchPixKey: string;
  city: string;
  client: {
    cpfCnpj: string;
    id: string;
    name: string;
    phone: string;
  };
  complementarProjectsValue: number;
  country: string;
  createdAt: string;
  currentPhase: null;
  dueDate: string;
  electrical: boolean;
  hasPassword: boolean;
  id: string;
  image3ds: {
    id: string;
    projectId: string;
    url: string;
  }[];
  imageUrl: string;
  installmentCount: number;
  name: string;
  paymentFormat: string;
  phases: [];
  photos: {
    id: string;
    projectId: string;
    url: string;
  }[];
  videoUrl: string;
  projectStatus: {
    color: string;
    id: string;
    name: string;
    position: number;
  };
  proposalType: {
    color: string;
    description: null;
    id: string;
    name: string;
  };
  socialMediaContentValue: number;
  state: string;
  structural: boolean;
  updatedAt: string;
  value: number;
  view3d: boolean;
}

interface ProposalContextProps {
  proposalData: ProposalDataProps | undefined;
  isGettingData: boolean;
}

const ProposalContext = createContext({} as ProposalContextProps);

export const ProposalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [proposalData, setProposalData] = useState<ProposalDataProps>();
  const { GetAPI } = useApiContext();
  const params = useSearchParams();
  const projectId = params.get("projectId");
  const [isGettingData, setIsGettingData] = useState(true);

  async function handleGetProject() {
    try {
      if (!projectId) {
        return setIsGettingData(false);
      }
      const response = await GetAPI(`project/details/${projectId}`, false);
      if (response.status === 200) {
        setProposalData(response.body.project);
        setIsGettingData(false);
      } else {
        setIsGettingData(false);
      }
    } catch (error) {
      console.error(error);
      setIsGettingData(false);
    }
  }
  useEffect(() => {
    handleGetProject();
  }, []);

  const value = {
    proposalData,
    isGettingData,
  };

  return (
    <ProposalContext.Provider value={value}>
      {children}
    </ProposalContext.Provider>
  );
};

export function useProposalContext() {
  const { proposalData, isGettingData } = useContext(ProposalContext);

  return { proposalData, isGettingData };
}
