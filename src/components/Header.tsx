import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import {
  HeaderContainer,
  HeaderContent,
  LogoLink,
  Nav
} from '../styles/HeaderStyles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    localStorage.removeItem('auth_token');
    navigate('/login');
  };
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoLink to="/">Funeral Management</LogoLink>
        <Nav>
          <Button 
            variant="secondary" 
            size="small" 
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 