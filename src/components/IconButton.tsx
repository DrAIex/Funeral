import React from 'react';
import { IconButtonContainer } from '../styles/ButtonStyles';

interface IconButtonProps {
  onClick?: () => void;
  icon: React.ReactNode;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

/**
 * Компонент кнопки с иконкой
 * 
 * @param onClick - функция обработки клика
 * @param icon - компонент иконки
 * @param ariaLabel - доступность: описание кнопки
 * @param type - тип кнопки (button, submit, reset)
 * @param className - дополнительные классы
 * @param disabled - отключена ли кнопка
 */
const IconButton: React.FC<IconButtonProps> = ({ 
  onClick, 
  icon, 
  ariaLabel, 
  type = 'button',
  className,
  disabled
}) => {
  return (
    <IconButtonContainer
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
      className={className}
      disabled={disabled}
    >
      {icon}
    </IconButtonContainer>
  );
};

export default IconButton;