import Link from "next/link";




export default function DetailLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <>

            <nav className="w-full bg-black">
                <ul className="w-full p-2 flex text-white">
                    <li className="p-2"><Link href={`/`}>&larr;BACK</Link></li>
                </ul>
            </nav>
            {children}
        </>
    )
}