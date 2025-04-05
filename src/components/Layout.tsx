import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompanyStore } from '../stores/StoreContext';
import Sidebar from './Sidebar';
import {
  LayoutContainer,
  SidebarWrapper,
  ContentWrapper
} from '../styles/LayoutStyles';
import { ReactComponent as LogoIcon } from '../assets/icons/Logo.svg';
import { ReactComponent as DeceasedIcon } from '../assets/icons/Deceased.svg';
import { ReactComponent as BriefcaseIcon } from '../assets/icons/Briefcase.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/Settings.svg';
import { ReactComponent as SignOutIcon } from '../assets/icons/SignOut.svg';

import {
  IconWrapperSider,
  WrapperIconsSiderOuter,
  SidebarFooter,
  WrapperIconsSider,
} from '../styles/SidebarStyles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const companyStore = useCompanyStore();
  
  const handleSignOut = () => {
    companyStore.reset();
    navigate('/login');
  };

  return (
    <LayoutContainer>
      <SidebarWrapper>
        <WrapperIconsSiderOuter>
          <WrapperIconsSider>
            <IconWrapperSider style={{ width: 45, height: 45 }}>
              <LogoIcon />
            </IconWrapperSider>
            <IconWrapperSider>
              <BriefcaseIcon style={{ width: 26, height: 26 }} />
            </IconWrapperSider>
            <IconWrapperSider>
              <DeceasedIcon />
            </IconWrapperSider>
          </WrapperIconsSider>
          <SidebarFooter>
            <IconWrapperSider style={{ margin: '20px 0' }}>
              <SettingsIcon />
            </IconWrapperSider>
            <IconWrapperSider style={{ margin: '20px 0' }}>
              <SignOutIcon onClick={handleSignOut} />
            </IconWrapperSider>
          </SidebarFooter>
        </WrapperIconsSiderOuter>
        <Sidebar />
      </SidebarWrapper>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout; 