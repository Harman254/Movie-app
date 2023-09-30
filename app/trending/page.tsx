
"use client"
import TrendingCard from '@/components/TrendingCard';
import { TVShowProps } from '@/types';
import React, {useEffect, useState} from 'react'


const page = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const getTrends = async() => {
            const res = await fetch("/api/movies/trending")
            const trends = await res.json()
            console.log(trends)
            setTrending(trends)
        }
      

        getTrends();
    }, [])
    
  return (
    <div className='container flex flex-col min-h-screen'>
        <h1 className='m-4  bg-gradient-to-r from-lime-500 to-pink-700 bg-clip-text text-transparent text-4xl font-bold'>Top Trending Tv Shows this week</h1>
        <div className='container flex flex-wrap gap-5 justify-center'>
          {trending.map((tvshow: TVShowProps ) => (
            <TrendingCard key={tvshow.id} tvshow={tvshow} />
          ))}
        </div>


    </div>
  )
}

export default page