import React, { createContext, useState, ReactNode } from 'react';

interface AppContextType {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  selectedData: any | null;
  setSelectedData: React.Dispatch<React.SetStateAction<any | null>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

function AppContextProvider({ children }: AppContextProviderProps) {
  const [data, setData] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any | null>(null);

  const value = React.useMemo(
    () => ({ data, setData, selectedData, setSelectedData }),
    [data, selectedData],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = (): AppContextType => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export { AppContextProvider };
