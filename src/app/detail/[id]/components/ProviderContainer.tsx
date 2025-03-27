

export default function ProviderContainer({ children } : { children : React.ReactNode }){

    return (
        <div className="flex">
            {children}
        </div>
    )
}