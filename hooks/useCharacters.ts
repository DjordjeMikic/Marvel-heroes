import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { getCharacters } from '../config/route';
import { setIsLoading } from '../store/slice';
import { useAppSelector } from '../store/store';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Array<any>>([]);
  const { offset } = useAppSelector((state) => state.store);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (offset < 20) {
        dispatch(setIsLoading(true));

        const res = await axios({
          method: 'get',
          url: getCharacters(offset),
        });

        setCharacters([...characters, ...res.data.data.results]);
        dispatch(setIsLoading(false));
      } else {
        const res = await axios({
          method: 'get',
          url: getCharacters(offset),
        });
        setCharacters([...characters, ...res.data.data.results]);
      }
    })();
  }, [dispatch, offset]);


  // useEffect(() => {
  //   console.log(characters);
  // }, [characters]);

  return {
    characters,
  };
};
