import { Provider } from "@/app/lib/types"
import Image
 from "next/image"
export default function ProviderItem({ item, image } : { item : Provider; image: string}) {

    return (
        <div className="p-2 ">
            <Image className="rounded-2xl border-2" src={`https://image.tmdb.org/t/p/w300/${image}`} width={100} height={100} alt={item.provider_name} />
            <p className="text-[9px] text-center">{item.provider_name}</p>
        </div>
    )
}