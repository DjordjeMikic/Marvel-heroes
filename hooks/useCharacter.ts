import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { useAppSelector } from '../store/store';
import { setCharacter, setIsLoading } from '../store/slice';
import { getByName, getCharacterById } from '../config/route';

export const useCharacter = () => {
  const { singleCharacter, isLoading } = useAppSelector(state => state.store);
  const dispatch = useDispatch();
  const { id } = useRouter().query;

  useEffect(() => {
    if(!singleCharacter && id) {
      (async () => {
        dispatch(setIsLoading(true));
        const res = await axios({
          method: 'get',
          url: getCharacterById(String(id)),
        });
        dispatch(setCharacter(res.data.data.results[0]));
        dispatch(setIsLoading(false));
      })()
    }
  }, [id, dispatch, singleCharacter]);

  const liveSearchByName = async (search: string) => {
    const res = await axios({
      method: 'get',
      url: getByName(search),
    });
    if(res?.data.data.results) {
      return res?.data.data.results.slice(0, 5);
    }
    return 'No heroes by search query';
  }
  
  return {
    isLoading,
    singleCharacter,
    liveSearchByName,
  }
}