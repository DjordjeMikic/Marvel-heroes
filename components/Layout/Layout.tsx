import React, { ReactElement } from 'react';

import { Nav } from '../Nav/Nav';
import { ContentContainer, LayoutContainer } from './Layout.style';

export const Layout: React.FC<{ children: ReactElement }> = ({ children }) => (
  <LayoutContainer>
    <Nav />
    <ContentContainer>
      {children}
    </ContentContainer>
  </LayoutContainer>
);
