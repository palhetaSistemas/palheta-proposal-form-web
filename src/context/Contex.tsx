"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface ProposalDataProps {
  architectural: boolean;
  view3d: boolean;
  structural: boolean;
  electrical: boolean;
}

interface ProposalContextProps {
  proposalData: ProposalDataProps | undefined;
}

const ProposalContext = createContext({} as ProposalContextProps);

export const ProposalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [proposalData, setProposalData] = useState<ProposalDataProps>();

  useEffect(() => {
    setProposalData({
      architectural: true,
      view3d: true,
      structural: true,
      electrical: true,
    });
  }, []);

  const value = {
    proposalData,
  };

  return (
    <ProposalContext.Provider value={value}>
      {children}
    </ProposalContext.Provider>
  );
};

export function useProposalContext() {
  const { proposalData } = useContext(ProposalContext);

  return { proposalData };
}
