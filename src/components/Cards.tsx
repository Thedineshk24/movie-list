import React from "react";
import { useGetMoviesQuery } from "../services/moviesApi";
import "../styles/cards.scss";
import { Movies } from "../types/movies";

type Props = {};

interface MoviesData {
   backdrop_path: string | undefined;
   original_title: string;
   overview: string;
   id: string | number;
}

const Cards = (props: Props) => {
    // @ts-ignore
  const { data , isLoading, isSuccess, isError, isFetching }  =
    useGetMoviesQuery();

    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }

  return (
    <div className="card">
      {isSuccess &&
        data?.results?.map((item:MoviesData) => {
          return (
            <div className="cards" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.original_title}
              />
              <p className="title">{item.original_title}</p>
              <p className="desc">{item.overview}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
