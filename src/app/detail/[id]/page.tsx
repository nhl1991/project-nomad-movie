import { Detail } from "@/app/lib/types";
import { getMovieById, getProviderById } from "@/app/lib/utils"
import Link from "next/link";
import styles from "./detail.module.css"
import Videos from "./components/VideoComponent";
import Poster from "./components/ImageComponent";
import Provider from "./components/ProviderComponent";
import Credits from "./components/Credits";


export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> }
) {
    // read route params
    const { id } = await params;
    const data: Detail = await getMovieById(id);

    return {
        title: data.title,
    }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data: Detail = await getMovieById(id);
    const providers = await getProviderById(id);
    const regions = Object.keys(providers);
    const million = 1000000;



    return (
        <div className="w-full h-full bg-black text-white">
            <h1 className="w-full text-center text-4xl p-4">{data.title}</h1>
            <h6 className="w-full text-center text-2xl p-2">&quot;{data.tagline}&quot;</h6>
            <div className="w-full h-max md:flex">
                <div className="w-full md:w-1/4 p-4 h-max">
                    <Poster src={data.poster_path} title={data.title} />
                    <div className="p-2">
                        <div className={styles.subInfoContainer}>
                            <b className={styles.infoTitle}>Release</b>
                            <p className={styles.infoText}>{data.release_date.replaceAll('-', '.')}</p>
                        </div>
                        <div className={styles.subInfoContainer}>
                            <b className={styles.infoTitle}>Runtime</b>
                            <p className={styles.infoText}>{data.runtime} min</p>
                        </div>
                        <div className={styles.subInfoContainer}>
                            <b className={styles.infoTitle}>Status</b>
                            <p className={styles.infoText}>{data.status}</p>
                        </div>
                        <div className={styles.subInfoContainer}>
                            <b className={styles.infoTitle}>Budget</b>
                            <p className={styles.infoText}><b>${(data.budget / million).toFixed(0).toString()}M</b></p>
                        </div>
                        <div className={styles.subInfoContainer}>
                            <b className={styles.infoTitle}>Revenue</b>
                            <p className={styles.infoText}><b>${(data.revenue / million).toFixed(0).toString()}M</b></p>
                        </div>
                        <div className={styles.subInfoContainer}>
                            <b className={styles.infoTitle}>Popularity</b>
                            <p className={styles.infoText}><b>{data.popularity.toFixed(0).toString()}</b></p>
                        </div>

                    </div>
                    <h1 className="text-2xl font-bold py-2 px-1 h-max">Cast</h1>
                    <div className="h-[300px] md:h-[600px] overflow-scroll ">
                        <h2 className="font-bold px-4">Directing</h2>
                            <Credits id={id} category="Directing" />
                        <h2 className="font-bold px-4">Actor</h2>
                            <Credits id={id} category="Acting" />
                    </div>
                    
                </div>

                <div id="detail" className="w-full md:w-3/4 p-10">
                    <h1><b>Synopsis</b></h1>
                    <p className="w-full md:w-2/3 p-2">{data.overview}</p>
                    <h1><b>Genres</b></h1>
                    <div className={styles.mappingItem}>
                        {
                            data.genres.map((item, i) => {
                                return <p key={i} className="w-max p-2 rounded bg-slate-700">{item.name}</p>
                            })
                        }
                    </div>
                    <h1><b>Production</b></h1>
                    <div className={styles.mappingItem}>
                        {
                            data.production_companies.map((item, i) => {
                                
                                return <p key={i} className="min-w-max p-2 rounded bg-slate-700 text-[6px] md:text-base">{item.name} ({item.origin_country})</p>

                            })
                        }
                    </div>
                    <h1><b>Countries</b></h1>
                    <div className={styles.mappingItem}>
                        {
                            data.production_countries.map((item, i) => {
                                
                                return <p key={i} className="w-max py-1 px-2 rounded bg-slate-700">{item.iso_3166_1}</p>

                            })
                        }
                    </div>
                    <h1><b>Releted Sites</b></h1>

                    <div className={styles.mappingItem}>
                        <Link className={styles.linkItem} href={data.homepage}><p>Official</p></Link>
                        <Link className={styles.linkItem} href={`https://www.imdb.com/title/${data.imdb_id}`}><p>IMDB</p></Link>
                    </div>
                    <h1 id="video"><b>Related Videos</b></h1>
                    <Videos id={id} />
                    <h1 id="provider"><b>Providers</b></h1>
                    <div className="min-h-max bg-black p-4">
                        <Provider providers={providers} regions={regions} />
                    </div>
                </div>
            </div>



        </div>
    )
}