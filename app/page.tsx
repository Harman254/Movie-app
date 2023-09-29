import MoviesList from "@/components/MoviesList.";
import { fetchMovies } from "@/lib/utils";

export default async function Home() {
  const result = await fetchMovies();

 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="container">
        <h1 className="font-bold  text-center text-4xl text-indigo-700">
          Moviebase
        </h1>
      </div>
      <MoviesList data={result} />
    </div>
  );
}
