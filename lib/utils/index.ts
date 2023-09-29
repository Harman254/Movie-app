



export const fetchMovies = async () => {
    const apiKey = process.env.API_KEY
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
    const res = await fetch(url)
    const data =  await res.json()
    
   const result = data.results

   return result

}


export const fetchMovie = async (movieId: number) => {
    const apiKey = process.env.API_KEY
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
     const res = await fetch(url)
     const data =  await res.json()
     return data
}

// export const fetchSearch = async (query:string) => {
//     const apiKey = process.env.API_KEY
//    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
//    const res = await fetch(url)
//    const data =  await res.json()
//    const result = data.results
//    console.log(result)
//    return result

// }
