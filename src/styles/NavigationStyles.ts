import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const commonNavStyle = css`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  color: rgb(77, 77, 77);
  text-decoration: none;
  font-size: 13px;
  transition: all 0.3s;
  background-color: #ffffff;
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: 600;
  
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
    
    svg {
      stroke: #ffffff !important;
    }
    
    svg path {
      stroke: #ffffff !important;
    }
  }
`;

export const NavButton = styled.button`
  ${commonNavStyle}
  border: none;
  outline: none;
  font-family: inherit;
`;


export const NavItemStyled = styled(NavLink)`
  ${commonNavStyle}
  margin-bottom: 8px;
  border: none;
`;

export const IconContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;