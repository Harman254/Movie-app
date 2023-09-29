"use client";
import React from "react";
import { useState } from "react";
import { MovieProps } from "@/types";
import MovieCard from "./MovieCard";
import axios from "axios";
const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState<MovieProps[]>([]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiKey = process.env.API_KEY;
     // !bug
    try {
      console.log(query);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      console.log(response);
      const movieData = response.data.results;
  
      setSearchResult(movieData);
    } catch (error) {
      console.log('Error fetching search results:', error);
    }
  };
  
  return (
    <div className="flex flex-col container">
      <form className="flex container" onSubmit={handleSubmit}>
        <input
          className="flex-grow px-3 bg-slate-200 border border-gray-600 rounded-lg text-black"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-3 m-3 py-2 rounded-md hover:outline-1 border hover:border-s-slate-400"
        >
          Search
        </button>
      </form>
      <div className="container flex">
        {searchResult.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default Search;
