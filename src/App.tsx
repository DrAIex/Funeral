import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StoreProvider } from './stores/StoreContext';
import { observer } from 'mobx-react-lite';
import { useCompanyStore } from './stores/StoreContext';
import LoginPage from './pages/LoginPage';
import Company from './pages/Company';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #F5F5F5;
    color: #333333;
    line-height: 1.6;
  }
  
  button, input, select, textarea {
    font-family: inherit;
  }
`;

const PrivateRoute = observer(({ children }: { children: React.ReactNode }) => {
  const companyStore = useCompanyStore();
  
  if (!companyStore.authenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
});

const AppRoutes = observer(() => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/company/12" element={
          <PrivateRoute>
            <Company />
          </PrivateRoute>
        } />
        
        <Route path="/" element={<Navigate to="/company/12" replace />} />
        
        <Route path="*" element={<Navigate to="/company/12" replace />} />
      </Routes>
    </Router>
  );
});

function App() {
  return (
    <>
      <GlobalStyle />
      <StoreProvider>
        <AppRoutes />
      </StoreProvider>
    </>
  );
}

export default App;
