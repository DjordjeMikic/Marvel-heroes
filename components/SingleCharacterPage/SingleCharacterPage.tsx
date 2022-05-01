import { Avatar, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

import { useCharacter } from '../../hooks/useCharacter';
import { Loading } from '../Loading/Loading';
import { LinkContainer } from './SingleCharacter.style';
import { SingleCharacterComics } from './SingleCharacterComics';
import { SingleCharacterSeries } from './SingleCharacterSeries';
import { SingleCharacterStories } from './SingleCharacterStories';

export const SingleCharacterPage: React.FC = () => {
  const { singleCharacter, isLoading } = useCharacter();
  const matches = useMediaQuery('(max-width: 1024px)');

  if (isLoading) return <Loading />;

  if (!singleCharacter) return null;

  return (
    <Stack direction={matches ? 'column' : 'row'} margin="101px 0 0 0" spacing={1}>
      <Stack spacing={3} width={matches ? '100%' : '25%'}>
        <Stack direction="row" alignItems="center" spacing={4}>
          <Avatar
            src={`
              ${singleCharacter.thumbnail.path}.${singleCharacter.thumbnail.extension}`
            }
          />
          <Typography variant="h4">
            {singleCharacter.name}
          </Typography>
        </Stack>
        <Typography>{singleCharacter.description || 'No desc.'}</Typography>
        <Stack>
          {singleCharacter.urls.map((lnk: any, index: number) => (
            <LinkContainer key={index}>
              <a href={lnk.url} target="_blank" rel="noreferrer">{lnk.type}</a>
            </LinkContainer>
          ))}
        </Stack>
        <Typography variant="h5" align="center">Events</Typography>
        {singleCharacter.events.items.length > 0 &&
          singleCharacter.events.items.map((event: any, index: number) => (
            <SingleCharacterComics key={index} isodd={index % 2} {...event} />
          ),
          )}
      </Stack>
      <Stack width={matches ? '100%' : '25%'}>
        <Typography variant="h5" align="center">Commics</Typography>
        {singleCharacter.comics.items.map((comic: any, index: number) => (
          <SingleCharacterComics key={index} isodd={index % 2} {...comic} />
        ))}
      </Stack>
      <Stack width={matches ? '100%' : '25%'}>
        <Typography variant="h5" align="center">Stories</Typography>
        {singleCharacter.stories.items.map((story: any, index: number) => (
          <SingleCharacterStories key={index} isodd={index % 2} {...story} />
        ))}
      </Stack>
      <Stack width={matches ? '100%' : '25%'}>
        <Typography variant="h5" align="center">Series</Typography>
        {singleCharacter.series.items.map((serie: any, index: number) => (
          <SingleCharacterSeries key={index} isodd={index % 2} {...serie} />
        ))}
      </Stack>
    </Stack>
  );
};
