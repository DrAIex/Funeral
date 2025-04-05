import React, { createContext, ReactNode, useContext } from 'react';
import rootStore, { RootStore } from '.';

const StoreContext = createContext<RootStore | null>(null);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStores = (): RootStore => {
  const context = useContext(StoreContext);
  
  if (!context) {
    throw new Error('useStores должен использоваться внутри StoreProvider');
  }
  
  return context;
};

export const useCompanyStore = () => {
  const { companyStore } = useStores();
  return companyStore;
};

export const useContactStore = () => {
  const { contactStore } = useStores();
  return contactStore;
}; 