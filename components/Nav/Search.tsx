import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Icon, TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';

interface SearchProps {
  value: string;
  cls: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    void;
}

export const Search: React.FC<SearchProps> = ({
  value,
  cls,
  onChange,
}) => (
  <TextField
    variant="standard"
    sx={{
      width: '100%',
      fontSize: 1.1,
      borderRadius: '4px',
      padding: '0 6px',
      backgroundColor: '#fff',
    }}
    placeholder="Search"
    InputProps={{
      disableUnderline: true,
      endAdornment: value ? (
        <Icon color="disabled" onClick={cls} sx={{ cursor: 'pointer' }}>
          <CloseIcon />
        </Icon>
      ) : (
        <Icon color="disabled"><SearchIcon /></Icon>
      ),
    }}
    value={value}
    onChange={onChange}
  />
);
