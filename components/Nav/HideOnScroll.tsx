import { Slide, useScrollTrigger } from '@mui/material';
import React, { ReactElement } from 'react';

interface HideOnScrollProps {
  children: ReactElement;
  window?: () => Window;
}

export const HideOnScroll: React.FC<HideOnScrollProps> = ({
  children,
  window,
}) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
