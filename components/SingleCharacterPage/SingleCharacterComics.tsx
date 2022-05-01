import React from 'react';

import { SingleCharacterComicContainer } from './SingleCharacter.style';

export interface SingleCharacterComics {
  isodd: boolean;
  name?: string;
}

export const SingleCharacterComics: React.FC<SingleCharacterComics> = ({
  isodd,
  name,
}) => (
  <SingleCharacterComicContainer isodd={isodd}>
    {name}
  </SingleCharacterComicContainer>
);
