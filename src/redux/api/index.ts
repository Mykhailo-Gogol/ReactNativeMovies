import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Constants} from './constants';
import {TMovie} from '../../types';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({baseUrl: Constants.BASE_URL}),
  endpoints: builder => ({
    getAllMovies: builder.query<TMovie, number>({
      query: page =>
        `/trending/movie/week?api_key=${Constants.API_KEY}&page=${page}`,
    }),
    getMovieById: builder.query<TMovie, number>({
      query: id => `movie/${id}?api_key=${Constants.API_KEY}`,
    }),
    getMovieVideosById: builder.query<any, number>({
      query: id => `movie/${id}/videos?api_key=${Constants.API_KEY}`,
    }),
  }),
});

export const {useGetAllMoviesQuery} = moviesApi;
export const {useGetMovieByIdQuery} = moviesApi;
export const {useGetMovieVideosByIdQuery} = moviesApi;
