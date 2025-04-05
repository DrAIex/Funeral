import styled from 'styled-components';

export const InputContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  margin-bottom: 16px;
`;

export const InputLabel = styled.label`
  font-size: 12px;
  color: #656565;
  margin-bottom: 4px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input<{ hasError?: boolean }>`
  padding: 6px 12px;
  font-size: 13px;
  border: 1px solid ${({ hasError }) => (hasError ? '#FF5A5A' : '#E0E0E0')};
  border-radius: 4px;
  outline: none;
  width: 100%;
  height: 32px;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: ${({ hasError }) => (hasError ? '#FF5A5A' : '#3D8FEC')};
    box-shadow: 0 0 0 2px ${({ hasError }) => (hasError ? 'rgba(255, 90, 90, 0.2)' : 'rgba(61, 143, 236, 0.2)')};
  }
  
  &:disabled {
    background-color: #F5F5F5;
    cursor: not-allowed;
  }
  
  ${({ hasError }) => hasError && `
    background-color: rgba(255, 90, 90, 0.05);
  `}  
`;

export const InputIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  color: #656565;
`;

export const ErrorMessage = styled.p`
  color: #FF5A5A;
  font-size: 12px;
  margin: 4px 0 0;
`;