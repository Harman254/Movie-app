import MoviesList from "@/components/MoviesList.";

export default async function Home() {

 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="container">
        <h1 className="font-bold  text-center text-4xl text-indigo-700">
          Moviebase
        </h1>
      </div>
      <MoviesList  />
    </div>
  );
}
