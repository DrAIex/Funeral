import React from 'react';
import { OrganizationsIcon, ContractorsIcon, ClientIcon } from './icons/IconComponents';

import {
  SidebarContainer,
  Logo,
  SubLogo,
  NavContainer,
  NavItem,
  IconWrapper
} from '../styles/SidebarStyles';

const Sidebar: React.FC = () => (
  <SidebarContainer>
    <Logo>Oak Tree Cemetery</Logo>
    <SubLogo>Process Manager</SubLogo>
    <NavContainer>
      <NavItem to="/company/12" end>
        <IconWrapper>
          <OrganizationsIcon />
        </IconWrapper>
        Organisations
      </NavItem>
      <NavItem to="/company/12" end>
        <IconWrapper>
          <ContractorsIcon />
        </IconWrapper>
        Contracts
      </NavItem>
      <NavItem to="/company/12" end>
        <IconWrapper>
          <ClientIcon />
        </IconWrapper>
        Clients
      </NavItem>
    </NavContainer>
    <p style={{fontSize: '11px', fontWeight: '400', color: '#656565', marginTop: '20px', textAlign: 'center'}}>All Funeral Services © 2015-2025</p>
  </SidebarContainer>
);

export default Sidebar;