"use client";
import { Movie } from "../lib/types";
import Link from "next/link";
import Image from "next/image";

export default function MovieItem({ item }: { item: Movie }) {
    
  return (
    <>
      <Link href={`/detail/${item.id}`} className="" rel="">
        <article className="w-full flex flex-col items-center justify-center transition-colors duration-200">
          <div className="p-4 ">
            <figure className="w-48 aspect-[3/4] p-1 relative overflow-hidden  hover:rounded-xl transition-all duration-300">
              <Image
                fill
                className="hover:scale-110 object-cover transition-transform duration-300"
                sizes="(max-width: 768px) 96px, 192px"
                src={item.poster_path}
                alt={`Poster for ${item.title}`}
              />
            </figure>
            <div className="w-full">
              <p className="w-full text-center text-[9px] md:text-sm rounded p-1 font-bold line-clamp-1 dark:bg-gray-900 overflow-hidden">
                {item.title}
              </p>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}

// LCP 4.48s
