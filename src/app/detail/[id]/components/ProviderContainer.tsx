

export default function ProviderContainer({ children } : { children : React.ReactNode }){

    return (
        <div className="flex overflow-x-scroll p-2">
            {children}
        </div>
    )
}