import { Stack } from '@mui/material';
import React from 'react';

import { useCharacters } from '../../hooks/useCharacters';
import { Character } from '../Character/Character';
import { CharacterType } from '../../types';
import { useAppSelector } from '../../store/store';
import { Loading } from '../Loading/Loading';
import { useDispatch } from 'react-redux';
import { setCharacter } from '../../store/slice';

export const CharactersList = () => {
  const { characters } = useCharacters();
  const { isLoading } = useAppSelector((state) => state.store);
  const dispatch = useDispatch();

  const onClick = (character: CharacterType) =>
    dispatch(setCharacter(character));

  if (isLoading) return <Loading />;

  return (
    <Stack width="100%" alignItems="center" spacing={1} margin="100px 0">
      {characters.map((character: CharacterType, index: number) => (
        <Character
          key={index}
          { ...character }
          onClick={() => onClick(character)}
        />
      ))}
    </Stack>
  );
};
