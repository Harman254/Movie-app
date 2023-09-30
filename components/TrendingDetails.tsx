"use client"
import { TVShowProps } from "@/types";
import React from "react";
import {Image} from "@nextui-org/react";


type Props = {
  tvshow: TVShowProps;
};

const TrendingDetails: React.FC<Props> = ({ tvshow }) => {
  const {
    name,
    poster_path,
    first_air_date,
    overview,
    vote_average,
    vote_count,
    adult,
    original_language,
    popularity,
    backdrop_path,
  } = tvshow;

  return (
    <div className="p-10 flex gap-10 ">
      <div className="w-1/2 flex items-center justify-center">
        <Image
          loading="lazy"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt="movieposter"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        />
      </div>
      <div className="flex-1 flex flex-col px-4 h-full border border-s-gray-200">
        <h1 className="text-2xl font-bold mt-3 mb-4">{name}</h1>
        <p className="mb-2 ">Language: {original_language}</p>
        <p className="mb-2 underline font-medium text-xl">Overview</p>
        <p className="font-semibold mb-2 text-xl">{overview}</p>
        <p className="mb-2">{first_air_date}</p>
        <p className="mb-2 font-semibold">Popularity:{popularity} views</p>
        <p className="mb-2 font-semibold">
          Audience: {adult ? "18+" : "General Audience"}
        </p>
        <p className="mb-2 font-semibold">Rating:{vote_average}/ 10</p>
        <p>vote count:{vote_count}</p>
        <div className="m-3 shadow-md">
          <Image
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            alt="backdrop"
          />
        </div>
      </div>
    </div>
  );
};

export default TrendingDetails;
