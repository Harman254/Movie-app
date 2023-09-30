"use client";
import React from "react";
import { useState } from "react";
import { MovieProps } from "@/types";

type SearchProps = {
  getSearchResults: (results: MovieProps[]) => void
}

const Search = ({getSearchResults}: SearchProps) => {
  const [query, setQuery] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/movies/search?query=${query}`)
    console.log(res)
    
    const movies = await res.json()
    console.log(movies)

    getSearchResults(movies)
    setQuery("")

     
  }
  
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
      
    </div>
  );
};
export default Search;
