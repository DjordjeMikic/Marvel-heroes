import { Avatar, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import { CharacterType } from '../../types';
import { CharacterContainer } from './Character.style';

interface CharacterProps extends CharacterType {
  onClick: () => void;
}

export const Character: React.FC<CharacterProps> = ({
  description,
  name,
  id,
  thumbnail,
  onClick,
}) => {
  const router = useRouter();

  return (
    <CharacterContainer
      onClick={() => {
        onClick();
        router.push(`/character/${id}`);
      }}
    >
      <Avatar src={`${thumbnail.path}.${thumbnail.extension}`} />
      <Stack height="100%" width="20%">
        <Typography>{name}</Typography>
      </Stack>
      <Typography>
        {description.length >= 100 ?
          `${description.slice(0, 100)}...` : description
        }
      </Typography>
    </CharacterContainer>
  );
};
