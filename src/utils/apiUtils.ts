export const BASE_URL = 'https://api.themoviedb.org/3/'
export const IMAGE_BASE_URL ='https://image.tmdb.org/t/p/w500/'
export const API_KEY = '3b2b36a0af182fd87470477280ab27d7'

export const popularMovies = (page: number,local:string): string => {
  return `movie/popular?language=${local}&page=${page}&api_key=${API_KEY}`;
}
