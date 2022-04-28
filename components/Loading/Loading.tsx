import { CircularProgress } from "@mui/material";
import React from "react";

import { LoadingContainer } from "./Loading.style";

export const Loading = () => (
  <LoadingContainer>    
    <CircularProgress />
  </LoadingContainer>
)