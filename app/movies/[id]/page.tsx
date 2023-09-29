
import React from 'react'
import MovieDetails from '@/components/MovieDetails'
import { fetchMovie } from '@/lib/utils';
type Props = {
  params: {
    id: number;
  }
}

const page: React.FC<Props> = async ({params}) => {
  const {id} = params
  const  Movie = await fetchMovie(id)
  return (
    <div className='container shadow-xl'>
        <MovieDetails movie={Movie}  />
    </div>
  )
}

export default page