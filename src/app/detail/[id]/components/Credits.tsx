import { Credit } from "@/app/lib/types";
import { getCreditById } from "@/app/lib/utils"
import Image from "next/image";



export default async function Credits({ id, category }: { id: string; category:string }){

    const data = await getCreditById(id);

    return(
        <>
            {
                data.map((item:Credit, i:number)=>{
                    if(item.known_for_department === category)
                        return <div key={i} className="flex p-2">
                            <div className="w-[50px] h-[50px] bg-slate-600 rounded-full overflow-hidden flex justify-center items-center">
                                {
                                    item.profile_path != null ? <Image src={item.profile_path} width={50} height={50} alt={item.name} /> : <p className="text-[9px] text-center">No image</p>
                                }
                            </div>
                            <div className="px-4 flex flex-col justify-center">
                                <p className="md:h-max h-[15px] md:text-[12px] lg:text-[15px] text-[9px]">{item.name}</p>
                                <p className="md:h-max h-[15px]  md:text-[9px] lg:text-[12px] text-[6px]">{item.character}</p>
                            </div>

                        </div>
                        
                })
            }
        </>
    )
}

