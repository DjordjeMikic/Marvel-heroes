import crypto from 'crypto';

const BASE_URL = 'https://gateway.marvel.com';
const PRIVATE_KEY = 'c098801d01be3b590932470fed18a9ab7aa6fa0a';
const PUBLIC_KEY = '2cf49eabfd53d8495f654490588346a0';
const ts = new Date().getTime();
const hash = crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest('hex');

export const API_URL = `${BASE_URL}/v1/public/characters?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}`;

export const getCharacterById = (id: string) =>
  `${BASE_URL}/v1/public/characters/${id}?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}`;

export const getByName = (name: string = '3-D') =>
  `${BASE_URL}/v1/public/characters?apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}&nameStartsWith=${name}`;