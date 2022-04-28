import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import axios from "axios";

import { API_URL } from "../config/route";
import { setIsLoading } from "../store/slice";

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setIsLoading(true));

      const res = await axios({
        method: 'get',
        url: API_URL,
      });

      setCharacters(res.data.data.results);
      dispatch(setIsLoading(false));
    })();    
  }, [dispatch]);

  return {
    characters,
  }
}