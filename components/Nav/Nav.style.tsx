import { Box, styled } from '@mui/material';

export const SearchContainer = styled(Box)`
  height: 75%;
  width: 20%;
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  @media(max-width: 1024px) {
    width: 100%;
    margin-top: 26px;
    position: relative;
  }
`;

export const HeroesContainer = styled(Box)`
  width: 20%;
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 6px;
  box-shadow: 0 0 1px 1px ${({ theme }) => theme.palette.grey[200]};
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);

  @media(max-width: 1024px) {
    width: 90%;
    margin-top: 4%;
  }
`;

export const HeroItemContainer = styled(Box)<{ notlast: boolean; }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 16px 6px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.common.black};
  border-bottom: ${({ notlast, theme }) =>
    notlast && `1px solid ${theme.palette.grey[200]}`};
  transition: all 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[200]};
  }
`;
