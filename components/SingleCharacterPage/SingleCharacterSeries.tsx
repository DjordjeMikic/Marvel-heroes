import React from "react";

import { SingleCharacterComicContainer } from "./SingleCharacter.style";
import { SingleCharacterComics } from "./SingleCharacterComics";

export const SingleCharacterSeries: React.FC<SingleCharacterComics> = ({
  name,  
  isodd,
}) => (
  <SingleCharacterComicContainer isodd={isodd}>
    {name}
  </SingleCharacterComicContainer>
)