"use client";
import Search from "./Search";

import { MovieProps } from "@/types";
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";


type Props = {
};

const MoviesList: React.FC<Props> = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);


    useEffect(() => {
      const getMovies = async() => {
        const res = await fetch("/api/movies")
        console.log(res)
        const movies = await res.json()
        setMovies(movies)
      }

      getMovies()
     
    }, [])
    
  
 

  return (
    <div className="flex flex-col justify-center p-3 gap-4 container">
      <Search getSearchResults={(results: MovieProps[]) => setMovies(results)}  />
      <div className=" container grid grid-cols-4 gap-3">
      {movies.map((movie: MovieProps) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      </div>
    </div>
  );
};

export default MoviesList;
