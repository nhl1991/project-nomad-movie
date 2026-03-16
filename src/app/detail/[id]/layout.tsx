import Link from "next/link";






export default async function DetailLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    
    
    


    return (
        <>

            <nav className="w-full ">
                <ul className="w-full p-2 flex gap-x-4">
                    <li className="p-2 nav-link"><Link href={`/`}>&larr;BACK</Link></li>
                    <li className="p-2 nav-link"><Link href={`#detail`}>Detail</Link></li>
                    <li className="p-2 nav-link"><Link href={`#video`}>Video</Link></li>
                    <li className="p-2 nav-link"><Link href={`#provider`}>Provider</Link></li>
                </ul>
            </nav>
            {children}
        </>
    )
}