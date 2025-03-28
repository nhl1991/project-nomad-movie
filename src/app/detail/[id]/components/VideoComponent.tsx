import { Video } from "@/app/lib/types";
import { getVideosById } from "@/app/lib/utils";
import { Suspense } from "react";
import styles from "../detail.module.css"


export default async function Videos({ id }: { id: string }) {

    const videos: Video[] = await getVideosById(id);


    return (
        <Suspense fallback={<p>Loading Videos..</p>}>
            <div className="w-full overflow-scroll flex">
                {
                    videos.map((item: Video ,i) => {
                        if (item.official === true)
                            return <div className="w-max p-2" key={i}>
                                <iframe className={styles.videoItem} src={`https://www.youtube-nocookie.com/embed/${item.key}?si=Fqg2zvD0c0vvxgvF`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
                                
                            </div>
                    })
                }
            </div>
        </Suspense>
    )
}