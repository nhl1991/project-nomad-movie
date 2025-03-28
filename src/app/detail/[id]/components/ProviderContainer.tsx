

export default function ProviderContainer({ children } : { children : React.ReactNode }){

    return (
        <div className="w-full flex flex-wrap gap-4 p-2">
            {children}
        </div>
    )
}