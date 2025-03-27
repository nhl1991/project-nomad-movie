import Link from "next/link";






export default async function DetailLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    
    
    


    return (
        <>

            <nav className="w-full bg-black">
                <ul className="w-full p-2 flex text-white">
                    <li className="p-2"><Link href={`/`}>&larr;BACK</Link></li>
                    <li className="p-2"><Link href={`#detail`}>Detail</Link></li>
                    <li className="p-2"><Link href={`#video`}>Video</Link></li>
                    <li className="p-2"><Link href={`#provider`}>Provider</Link></li>
                </ul>
            </nav>
            {children}
        </>
    )
}