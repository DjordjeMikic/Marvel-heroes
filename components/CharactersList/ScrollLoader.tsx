import { CircularProgress, Stack, Typography } from '@mui/material';
import React from 'react';

export const ScrollLoader = () => (
  <Stack
    width="100%"
    direction="row"
    justifyContent="center"
    margin="2% 0"
    spacing={2}
  >
    <CircularProgress />
    <Typography variant="h5">Loading ...</Typography>
  </Stack>
);
