import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CharacterType } from "../types"

interface StateType {
  characters: CharacterType[] | null;
  singleCharacter: CharacterType | null;
  isLoading: boolean;
}

const initialState: StateType = {
  characters: null,
  singleCharacter: null,
  isLoading: false,
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setCharacters: (state: StateType, action: PayloadAction<CharacterType[] | null>) => {
      state.characters = action.payload;
    },
    setCharacter: (state: StateType, action: PayloadAction<CharacterType | null>) => {
      state.singleCharacter = action.payload;
    },
    setIsLoading: (state: StateType, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const {
  setCharacter,
  setCharacters,
  setIsLoading,
} = storeSlice.actions;
export default storeSlice.reducer;