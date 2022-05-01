import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useCharacters } from '../../hooks/useCharacters';
import { Character } from '../Character/Character';
import { CharacterType } from '../../types';
import { useAppSelector } from '../../store/store';
import { Loading } from '../Loading/Loading';
import { useDispatch } from 'react-redux';
import { setCharacter, setOffset } from '../../store/slice';
import { ScrollLoader } from './ScrollLoader';
import { CharactersListContainer } from './CharactersList.style';

export const CharactersList = () => {
  const { characters } = useCharacters();
  const { isLoading, offset } = useAppSelector((state) => state.store);
  const dispatch = useDispatch();

  const onClick = (character: CharacterType) =>
    dispatch(setCharacter(character));

  if (isLoading) return <Loading />;

  return (
    <CharactersListContainer spacing={1}>
      <InfiniteScroll
        dataLength={characters.length}
        next={() => dispatch(setOffset(offset + 20))}
        hasMore={true}
        loader={<ScrollLoader />}
        style={{ width: '100%' }}
      >
        {characters.map((character: CharacterType, index: number) => (
          <Character
            key={index}
            { ...character }
            onClick={() => onClick(character)}
          />
        ))}
      </InfiniteScroll>
    </CharactersListContainer>
  );
};
