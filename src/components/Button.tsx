import React from 'react';
import { 
  StyledButton, 
  ButtonVariant, 
  ButtonSize 
} from '../styles/ButtonStyles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

/**
 * Компонент кнопки с поддержкой иконок
 */
export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  icon,
  ...props 
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {icon && icon}
      {children}
    </StyledButton>
  );
};

export default Button; 