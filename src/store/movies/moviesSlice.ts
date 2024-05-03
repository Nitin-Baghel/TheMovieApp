import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL, popularMovies } from '../../utils/apiUtils';
import { Movie,MovieApiResponse } from '../../screens/movies';

interface QueryParam{
  page:number
  local:string
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getMovies: builder.query<Movie[], QueryParam>({
      query: (param:QueryParam) => popularMovies(param.page,param.local),
      transformResponse:(response:MovieApiResponse)=>{
        return response.results
      }
    }),
  }),
});


export const {useGetMoviesQuery,useLazyGetMoviesQuery} = moviesApi;
