import { getMovie } from "./lib/utils";
import MovieItem from "./components/movieComponent";
import { Movie } from "./lib/types";


export default async function Home() {
  const data = await getMovie();

  return (
    <div className="w-full h-full  p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-black">
      {
        data?.map((item:Movie, i:number) => {
          return <MovieItem key={i} item={item} />
        })
      }

    </div>
  );
}
