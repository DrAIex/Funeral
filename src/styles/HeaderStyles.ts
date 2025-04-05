import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 0 24px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 640px;
  margin: 0 auto;
  height: 64px;
`;

export const LogoLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  
  &:hover {
    color: #3D8FEC;
  }
`;

export const Nav = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
