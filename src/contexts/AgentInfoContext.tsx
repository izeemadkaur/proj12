import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AgentInfo {
  agentCode?: string; // Note: Ensure the property name matches the JSON key ("agentCode" instead of "agentCode:")
  name?: string;
  gender?: string;
  age?: number;
  birthdate?: string;
  height?: string;
  weight?: string;
  address?: string;
  tobaccoStatus?: string;
}


interface AgentInfoContextType {
  agentInfo: AgentInfo;
  setAgentInfo: (info: AgentInfo) => void;
}

const AgentInfoContext = createContext<AgentInfoContextType | undefined>(undefined);

export const useAgentInfo = () => {
  const context = useContext(AgentInfoContext);
  if (context === undefined) {
    throw new Error('useAgentInfo must be used within an AgentInfoProvider');
  }
  return context;
};

export const AgentInfoProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [agentInfo, setAgentInfo] = useState<AgentInfo>({});

  return (
    <AgentInfoContext.Provider value={{ agentInfo, setAgentInfo }}>
      {children}
    </AgentInfoContext.Provider>
  );
};
