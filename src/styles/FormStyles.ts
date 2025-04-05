import styled from 'styled-components';

export const SelectField = styled.select`
  padding: 6px 12px;
  font-size: 13px;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  outline: none;
  width: 100%;
  height: 32px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23333' d='M4 6l4 4 4-4H4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-color: white;
  color: #333333;

  &:focus {
    border-color: #3D8FEC;
    box-shadow: 0 0 0 2px rgba(61, 143, 236, 0.2);
  }
  
  &:disabled {
    background-color: #F5F5F5;
    cursor: not-allowed;
  }

`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  
  input {
    margin-right: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #fff;
  }
`;

export const UploadButtonLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #656565;
  border: 1px solid #656565;
  border-radius: 4px;
  padding: 3px 12px;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  
  svg {
    stroke: #656565 !important;
    transition: all 0.3s ease !important;
    margin-right: 8px;
  }
  
  svg path {
    stroke: #656565 !important;
    transition: all 0.3s ease !important;
  }
  
  &:hover {
    background-color: #656565;
    color: #ffffff;
    border-color: #656565;
    
    svg {
      stroke: #ffffff !important;
    }
    
    svg path {
      stroke: #ffffff !important;
    }
  }
  
  input {
    display: none;
  }
`;

export const HiddenInput = styled.input`
  display: none;
  padding: 0;
`; 