import styled from 'styled-components';
import { StyledButton } from './ButtonStyles';
import { NavItemStyled, IconContainer } from './NavigationStyles';

export const SidebarContainer = styled.div`
  width: 280px;
  height: 100vh;
  position: fixed;
  left: 48px;
  top: 0;
  background-color: #fff;
  border-right: 1px solid #E0E0E0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  padding: 24px 24px 0 24px;
  font-size: 14px;
  font-weight: 700;
  color: #333;
`;

export const SubLogo = styled.div`
  padding: 0 24px 24px 24px;
  border-bottom: 1px solid #E0E0E0;
  font-size: 11px;
  font-weight: 400;
  color: #333;
`;

export const NavContainer = styled.nav`
  padding: 24px 16px;
  flex-grow: 1;
  overflow-y: auto;
  width: 250px;
`;

export const IconWrapper = styled(IconContainer)``;
export const IconWrapperSider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: all 0.3s ease;
  height: 36px;
  width: 36px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: #656565;
    color: #ffffff;
    border-color: #656565;
  }
`;

export const WrapperIconsSiderOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3B3B3B;
  width: 48px;
  height: 100%;
`;

export const WrapperIconsSider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 15px 0;
`;

export const NavItem = styled(NavItemStyled)``;

export const SidebarFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #E0E0E0;
`;

export const SignOutButton = styled(StyledButton)`
  width: 100%;
`; 