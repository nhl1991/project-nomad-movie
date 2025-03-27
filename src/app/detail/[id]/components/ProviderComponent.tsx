'use client'
import { WatchProviders } from "@/app/lib/types"
import { ChangeEvent, useState } from "react";
import ProviderContainer from "./ProviderContainer";
import ProviderItem from "./ProviderItem";
import ProviderText from "./ProviderTextContainer";


export default function Provider({ providers, regions }: {
    providers: WatchProviders,
    regions: string[]
}) {

    const [region, setRegion] = useState('US');

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setRegion(e.currentTarget.value);

    }
    if (providers[`${region}`])
        return (
            <>
                <div className="flex">
                    <div className="p-2">
                        <select className="" onChange={handleOnChange} defaultValue={region}>
                            {
                                regions.map((item, i) => {

                                    return <option key={i} >{item}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="p-2">
                        <p className="">&larr; Select your region!</p>
                    </div>
                </div>

                {
                    providers[`${region}`] && providers[`${region}`].flatrate != null ?
                        <div className="h-1/3">
                            <ProviderText>Streaming</ProviderText>
                            <ProviderContainer>
                                {
                                    providers[`${region}`].flatrate?.map((item, i) => {
                                        return <ProviderItem key={i} item={item} image={item.logo_path} />
                                    })
                                }
                            </ProviderContainer>
                        </div> : <></>
                }
                {
                    providers[`${region}`] && providers[`${region}`].buy ?
                        <div className="h-1/3">
                            <ProviderText>Buy</ProviderText>
                            <ProviderContainer>
                                {
                                    providers[`${region}`].buy?.map((item, i) => {
                                        return <ProviderItem key={i} item={item} image={item.logo_path.split('/')[6]} />
                                    })
                                }
                            </ProviderContainer>
                        </div> : <></>
                }
                {
                    providers[`${region}`] && providers[`${region}`].rent ?
                        <div className="h-1/3">
                            <ProviderText>Rent</ProviderText>
                            <ProviderContainer>
                                {
                                    providers[`${region}`].rent?.map((item, i) => {
                                        return <ProviderItem key={i} item={item} image={item.logo_path.split('/')[6]} />
                                    })
                                }
                            </ProviderContainer>
                        </div> : <></>
                }
            </>
        )
    else
        return (
            <>
                <p>No Providers Available.</p>
            </>
        )
}