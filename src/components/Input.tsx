import React, { forwardRef } from 'react';
import {
  InputContainer,
  InputLabel,
  InputWrapper,
  StyledInput,
  InputIconWrapper,
  ErrorMessage
} from '../styles/InputStyles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth, icon, ...props }, ref) => {
    return (
      <InputContainer fullWidth={fullWidth}>
        {label && <InputLabel>{label}</InputLabel>}
        <InputWrapper>
          {icon && <InputIconWrapper>{icon}</InputIconWrapper>}
          <StyledInput
            ref={ref}
            hasError={!!error}
            {...props}
          />
        </InputWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    );
  }
);

Input.displayName = 'Input';

export default Input; 