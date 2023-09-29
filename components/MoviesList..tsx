"use client";
import Search from "./Search";

import { MovieProps } from "@/types";
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";


type Props = {
    data: MovieProps[]
};

const MoviesList: React.FC<Props> = ({data}) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);


    useEffect(() => {
        setMovies(data)
     
    }, [])
    
  
 

  return (
    <div className="flex flex-col justify-center p-3 gap-4 container">
      <Search setMovies={setMovies}  />
      <div className=" container grid grid-cols-4 gap-3">
      {movies.map((movie: MovieProps) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      </div>
    </div>
  );
};

export default MoviesList;
