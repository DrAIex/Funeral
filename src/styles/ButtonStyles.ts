import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'text' | 'outline' | 'flattened' | 'flat';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const commonButtonStyle = css`
  background-color: #ffffff;
  color: #656565;
  border: 1px solid #E0E0E0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    stroke: #656565 !important;
    transition: all 0.3s ease !important;
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
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const variantStyles = {
  primary: css`
    ${commonButtonStyle}
  `,
  secondary: css`
    ${commonButtonStyle}
  `,
  danger: css`
    ${commonButtonStyle}
    &:hover {
      background-color: #FF5A5A;
      border-color: #FF5A5A;
    }
  `,
  text: css`
    ${commonButtonStyle}
    background-color: transparent;
    border: none;
    padding: 0;
    
    &:hover {
      background-color: transparent;
      color: #656565;
      
      svg, svg path {
        stroke: #ffffff !important;
      }
    }
  `,
  outline: css`
    ${commonButtonStyle}
    background-color: transparent;
    border: 1px solid #656565;
  `,
  flattened: css`
    ${commonButtonStyle}
    background-color: transparent;
    border: none;
    border-radius: 0;
    padding: 6px 0;
    
    &:hover {
      background-color: transparent;
      color: #656565;
      
      svg, svg path {
        stroke: #ffffff !important;
      }
    }
  `,
  flat: css`
    ${commonButtonStyle}
    background-color: transparent;
    border: none;
  `,
};

export const sizeStyles = {
  small: css`
    padding: 4px 12px 4px 4px;
    font-size: 14px;
    height: 28px;
  `,
  medium: css`
    padding: 8px 24px;
    font-size: 16px;
    height: 40px;
  `,
  large: css`
    padding: 12px 32px;
    font-size: 18px;
    height: 48px;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  ${commonButtonStyle}
  ${({ variant = 'primary' }) => variantStyles[variant]}
  ${({ size = 'medium' }) => sizeStyles[size]}
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
`;

export const IconButtonContainer = styled.button`
  ${commonButtonStyle}
  width: 36px;
  height: 36px;
  padding: 0;
  outline: none;
`;

export const AddButton = styled(StyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  
  svg, svg path {
    stroke: #656565 !important;
  }
  
  &:hover {
    svg, svg path {
      stroke: #ffffff !important;
    }
  }
`;