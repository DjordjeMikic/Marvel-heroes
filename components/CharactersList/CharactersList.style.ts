import { Stack, styled } from '@mui/material';

export const CharactersListContainer = styled(Stack)`
  width: 100%;
  align-items: center;
  margin: 100px 0;

  & .infinite-scroll-component__outerdiv {
    width: 100%;

    & .infinite-scroll-component {
      padding: 0 4px;
    }
  }
`;
