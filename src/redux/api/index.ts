import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Constants} from './constants';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({baseUrl: Constants.BASE_URL}),
  endpoints: builder => ({
    getAllMovies: builder.query<any, string>({
      query: () => `/trending/all/day?api_key=${Constants.API_KEY}`,
    }),
    getMovieById: builder.query<any, string>({
      query: id => `movie/${id}?api_key=${Constants.API_KEY}`,
    }),
  }),
});

export const {useGetAllMoviesQuery} = moviesApi;
export const {useGetMovieByIdQuery} = moviesApi;
