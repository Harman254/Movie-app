import { fetchMovie } from '@/lib/utils'
import React from 'react'
import TrendingDetails from '@/components/TrendingDetails'

type Props = {
    params: {
        id: number
    }
}

const page: React.FC<Props> = async ({params}) => {
    const {id} = params
    //!this function is for fetching a single movie that is not trending and also dont forget the weird card behaviour
    const tvshow = await fetchMovie(id)   
    console.log(tvshow)
  return (
    <div className='container shadow-xl'>
        <TrendingDetails tvshow={tvshow} />
    </div>
  )
}

export default page