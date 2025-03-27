'use client'
import { Movie } from "../lib/types";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function MovieItem({item} : {item : Movie}) {

    const router = useRouter()

    const handleOnClick = () => {
        router.push(`/id/${item.id}`)
    }

    return (
        <>
            <div className="">
                <div className="p-4 ">
                    <div className="p-1"><Image width={480} height={640} src={item.poster_path} alt={item.title} onClick={handleOnClick}/></div>
                    <div className="p-1"><Link href={`/detail/${item.id}`}><p className="w-full text-center text-[9px] md:text-sm rounded text-white p-1 bg-gray-900 overflow-hidden">{item.title}</p></Link></div></div>
            </div>
        </>
    )
}