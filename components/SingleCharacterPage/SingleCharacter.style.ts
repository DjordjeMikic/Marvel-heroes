import { Box, styled } from '@mui/material';

export const SingleCharacterComicContainer = styled(Box)<{ isodd?: boolean; }>`
  padding: 16px 4px;
  background-color: ${({ isodd, theme }) =>
    isodd ? theme.palette.common?.white : theme.palette.grey[100]};
`;

export const LinkContainer = styled(Box)`
  a {
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: blue;
    }
  }
`;
