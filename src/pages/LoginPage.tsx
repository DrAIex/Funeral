import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useCompanyStore } from '../stores/StoreContext';
import Input from '../components/Input';
import Button from '../components/Button';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #F5F5F5;
  padding: 20px;
`;

const LoginCard = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 40px;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333333;
  margin: 0 0 24px 0;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ErrorMessage = styled.p`
  color: #FF5A5A;
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
`;

export const LoginPage: React.FC = observer(() => {
  const companyStore = useCompanyStore();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }
    
    try {
      setError(null);
      await companyStore.authenticate(username);
      
      if (companyStore.authenticated) {
        navigate('/company/12');
      } else {
        setError('Authentication failed. Please try again.');
      }
    } catch (error) {
      setError('Authentication error. Please try again.');
      console.error('Authentication error:', error);
    }
  };
  
  return (
    <PageContainer>
      <LoginCard>
        <Title>Sign In</Title>
        <Form onSubmit={handleLogin}>
          <Input
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            fullWidth
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button 
            type="submit" 
            fullWidth 
            disabled={companyStore.loading}
          >
            {companyStore.loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </Form>
      </LoginCard>
    </PageContainer>
  );
});

export default LoginPage; 