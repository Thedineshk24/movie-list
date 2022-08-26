import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movies } from "../types/movies";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org",
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movies, void>({
      query: () =>
        `/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    }),
  }),
});

export const { useGetMoviesQuery } = movieApi;
