import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const SidebarWrapper = styled.div`
  width: 280px;
  flex-shrink: 0;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  overflow-x: hidden;
`; 