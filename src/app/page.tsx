
import MovieItem from "./components/movieComponent";
import { Movie } from "./lib/types";
async function getMovie() {
  try {
    const res = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies", {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch movies: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();
    console.log(json)
    // if (!Array.isArray(json)) {
    //   throw new Error("Movie API did not return an array");
    // }

    return json;
  } catch (error) {
    console.error("getMovie error:", error);
    return [];
  }
}
export default async function Home() {
  const data = await getMovie();

  return (
    <section className="p-24">
      <div className="w-full h-full  p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-4">
        {data?.map((m: Movie) => {
          return <MovieItem key={m.id} item={m} />;
        })}
      </div>
    </section>
  );
}
