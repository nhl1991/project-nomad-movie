import styles from '../detail.module.css'

export default function VideoSkeleton() {


    return (
        <div className="w-full overflow-scroll flex">
            {
                Array.from({ length: 5 }).map((__, i) => {
                    return <div key={i} className="w-max p-2">
                        <div className={styles.videoSkeleton} ></div>
                        <p className="w-full p-2 text-xs"></p>
                    </div>
                })
            }
        </div>
    )
}