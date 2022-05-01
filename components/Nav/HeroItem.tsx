import { Avatar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

import { setCharacter } from '../../store/slice';
import { CharacterType } from '../../types';
import { HeroItemContainer } from './Nav.style';

interface HeroItemProps {
  notlast: boolean;
  hero: CharacterType;
  cls: () => void;
  image?: string;
}

export const HeroItem: React.FC<HeroItemProps> = ({
  image,
  hero,
  cls,
  notlast,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <HeroItemContainer
      notlast={notlast}
      onClick={() => {
        dispatch(setCharacter(hero));
        cls();
        router.push(`/character/${hero.id}`);
      }}
    >
      <Avatar src={image} />
      <Typography>{hero.name}</Typography>
    </HeroItemContainer>
  );
};
