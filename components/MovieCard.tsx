"use client"
import React from 'react'
import {Image} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { type MovieProps } from '@/types';
import Link from 'next/link';



type MovieCardProps = {
  movie: MovieProps;
}



const MovieCard: React.FC<MovieCardProps> = ( {movie}) => {
 const {id, title, release_date,popularity, poster_path} = movie

  return (
    <Link href={`/movies/${id}`}>
    <Card  className="p-4 hover:scale-105 hover:shadow-2xl hover:dark:shadow-gray-600 transform transition-transform ">
      
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-xl mt-3 capitalize wrap font-bold">{ title}</p>
        <h4 className="font-bold text-large">Popularity:{popularity}</h4>
        <p className="text-default-500 font-semibold">Released:{release_date}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
        
          alt="Card background"
          className="object-cover rounded-xl"
          height={150}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={270}
        />
      </CardBody>
    </Card>
    </Link>
  )
}

export default MovieCard