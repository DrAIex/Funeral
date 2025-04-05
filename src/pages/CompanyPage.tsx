import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCompanyStore } from '../stores/StoreContext';
import CompanyCard from '../components/CompanyCard';
import ContactCard from '../components/ContactCard';
import Button from '../components/Button';

const PageContainer = styled.div`
  width: 640px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E0E0E0;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #333333;
  margin: 0;
`;

const LoadingOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  font-size: 18px;
  color: #656565;
`;

const ErrorMessage = styled.div`
  background-color: #FFECEC;
  color: #FF5A5A;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const CompanyPage: React.FC = observer(() => {
  const companyStore = useCompanyStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!companyStore.authenticated) {
      navigate('/login');
      return;
    }
    
    if (!companyStore.company) {
      companyStore.fetchCompany('12');
    }
  }, [companyStore, navigate]);
  
  const handleLogout = () => {
    navigate('/login');
  };
  
  if (!companyStore.authenticated) {
    return null;
  }
  
  if (companyStore.loading && !companyStore.company) {
    return (
      <PageContainer>
        <LoadingOverlay>Loading company data...</LoadingOverlay>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <Header>
        <Title>Eternal Rest Funeral Home</Title>
        <Button variant="secondary" onClick={handleLogout}>Sign Out</Button>
      </Header>
      
      {companyStore.error && (
        <ErrorMessage>{companyStore.error}</ErrorMessage>
      )}
      
      <CompanyCard />
      <ContactCard />
    </PageContainer>
  );
});

export default CompanyPage; 