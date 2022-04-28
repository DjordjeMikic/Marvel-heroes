import { Box, styled } from '@mui/material';

export const CharacterContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 16px;
  border-radius: 9px;
  cursor: pointer;
  box-shadow: 0 0 2px 1px ${({ theme }) => theme.palette.primary.light};
  transition: all 0.4s;

  &:hover {    
    box-shadow: 0 0 2px 1px ${({ theme }) => theme.palette.error.light};
  }
`;