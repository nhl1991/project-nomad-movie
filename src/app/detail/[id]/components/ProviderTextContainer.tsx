

export default function ProviderText({children}:{children: React.ReactNode}){

    return(
        <div>
            <h1 className="text-white"><b>{children}</b></h1>
        </div>
    )
}