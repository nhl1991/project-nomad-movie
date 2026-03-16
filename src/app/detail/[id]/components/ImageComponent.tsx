'use client'

import Image from "next/image";


export default function Poster({ src, title }: { src: string, title: string }) {

    return (
        <figure className="w-full p-2 md:block flex items-center justify-center" >
            <Image src={src} className="object-contain rounded hover:scale-105 transition-all duration-500" width={320} height={480} alt={`poster image of ${title}`} draggable={false} />
        </figure>
    )
}