import React from 'react';

import { SingleCharacterComicContainer } from './SingleCharacter.style';
import { SingleCharacterComics } from './SingleCharacterComics';

export const SingleCharacterStories: React.FC<SingleCharacterComics> = ({
  name,
  isodd,
}) => (
  <SingleCharacterComicContainer isodd={isodd}>
    {name}
  </SingleCharacterComicContainer>
);
