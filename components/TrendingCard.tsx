import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import Link from "next/link"
import { TVShowProps } from '@/types';


type Props = {
    tvshow: TVShowProps
}

const TrendingCard:React.FC<Props> = ({tvshow}) => {

    const {name, popularity, first_air_date, poster_path, id } = tvshow
  return (
    <Link href={`/trending/${id}`}>
    <Card  className="p-4 hover:scale-105 hover:shadow-2xl hover:dark:shadow-gray-600 transform transition-transform ">
      
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-xl mt-3 capitalize truncate font-bold">{ name}</p>
        <h4 className="font-bold text-large">Popularity:{popularity}</h4>
        <p className="text-default-500 font-semibold">First air date:{first_air_date}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          fetchPriority='high'
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

export default TrendingCard