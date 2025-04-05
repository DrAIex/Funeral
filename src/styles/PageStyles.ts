import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 24px;
`;

export const PageTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PageTitle = styled.h1`
  font-size: 28px;
  color: #333333;
  font-weight: 600;
  margin: 0;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  
  &:hover {
    opacity: 0.8;
  }
`; 