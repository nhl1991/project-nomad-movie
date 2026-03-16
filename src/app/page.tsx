
import MovieItem from "./components/movieComponent";
import { Movie } from "./lib/types";
import { getMovie } from "./lib/utils";
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
