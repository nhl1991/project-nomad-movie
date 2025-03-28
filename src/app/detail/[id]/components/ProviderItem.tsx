import { Provider } from "@/app/lib/types"
import Image
    from "next/image"
export default function ProviderItem({ item, image }: { item: Provider; image: string }) {

    return (
        <div className="flex-shrink-0 md:w-[90px] w-[70px] h-[70px] md:h-[90px] flex flex-col items-center justify-center">
            <div className=" md:w-[80px] w-[50px] md:h-[80px] h-[50px]">
                <Image className="rounded-xl" src={`https://image.tmdb.org/t/p/w300/${image}`} width={80} height={80} alt={item.provider_name} />

            </div>
            <div>
                <p className="md:text-[9px] text-[6px]">{item.provider_name}</p>
            </div>
        </div>
    )
}