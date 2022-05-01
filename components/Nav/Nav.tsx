import { AppBar, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { useCharacter } from '../../hooks/useCharacter';
import { HeroItem } from './HeroItem';
import { HideOnScroll } from './HideOnScroll';
import { HeroesContainer, SearchContainer } from './Nav.style';
import { Search } from './Search';

export const Nav = () => {
  const [search, setSearch] = useState('');
  const [heroes, setHeroes] = useState([]);
  const { liveSearchByName } = useCharacter();
  const matches = useMediaQuery('(max-width: 1024px)');

  const onChange = (e: any) => setSearch(e.target.value);
  const cls = () => {
    setSearch('');
    setHeroes([]);
  };

  useEffect(() => {
    if (search) {
      (async () => {
        const searched = await liveSearchByName(search);
        setHeroes(searched);
      })();
    }
  }, [search]);

  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar disableGutters>
          <Stack
            width="90%"
            direction={matches ? 'column' : 'row'}
            alignItems="center"
            margin="0 auto"
          >
            <Link href="/" passHref>
              <Typography variant="h4" sx={{ cursor: 'pointer' }}>
                Marvel Characters
              </Typography>
            </Link>
            <SearchContainer>
              <Search value={search} cls={cls} onChange={onChange} />
            </SearchContainer>
            {Array.isArray(heroes) && heroes.length > 0 && (
              <HeroesContainer>
                {heroes.map((hero: any, index: number) => (
                  <HeroItem
                    key={index}
                    hero={hero}
                    cls={cls}
                    image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    notlast={(heroes.length - 1) > index}
                  />
                ))}
              </HeroesContainer>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};
